const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";
const MODEL = "deepseek-flash";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "DEEPSEEK_API_KEY is not configured on the server." });
  }

  const { subject, class: grade, topic, count, difficulty, type, language } = req.body || {};

  if (!topic || !subject || !grade) {
    return res.status(400).json({ error: "Subject, class and topic are required." });
  }

  const langName = language === "rw" ? "Kinyarwanda" : language === "fr" ? "French" : "English";
  const n = Math.min(Math.max(parseInt(count, 10) || 10, 5), 20);

  const typeLabel =
    type === "mcq" ? "multiple-choice questions only" :
    type === "truefalse" ? "true/false questions only" :
    type === "short" ? "short-answer questions only" :
    "a balanced mix of multiple-choice, true/false, short-answer and one essay/practical question";

  const systemPrompt = `You are GHAD AI Assessment Generator, an expert in educational measurement for Rwanda's Competence-Based Curriculum.

Generate a complete assessment in ${langName}. Requirements:
- Subject: ${subject}
- Class: ${grade}
- Topic: ${topic}
- Total questions: ${n}
- Difficulty: ${difficulty}
- Question format: ${typeLabel}

Output structure:
1. Header (subject, class, topic, total marks, time allowed).
2. The questions, clearly numbered, with marks indicated.
3. A complete ANSWER KEY / marking guide with correct answers and brief marking notes.
4. For essay or practical questions, provide a short rubric or marking scheme.

Make questions appropriate for the grade level and curriculum. Use realistic Rwandan contexts where helpful. Do not include questions that require resources the school may not have.`;

  const userPrompt = `Create a ${difficulty} assessment for ${grade} ${subject} on the topic "${topic}". Generate ${n} questions. Write everything in ${langName}.`;

  try {
    const upstream = await fetch(DEEPSEEK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.5,
        max_tokens: 3500,
        stream: false,
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text().catch(() => "");
      return res.status(upstream.status).json({
        error: `DeepSeek API error (${upstream.status})${errText ? ": " + errText.slice(0, 300) : ""}`,
      });
    }

    const data = await upstream.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) {
      return res.status(502).json({ error: "The AI returned an empty response. Please try again." });
    }

    return res.status(200).json({ content });
  } catch (err) {
    return res.status(502).json({ error: "Failed to reach the AI service. " + (err.message || "") });
  }
}
