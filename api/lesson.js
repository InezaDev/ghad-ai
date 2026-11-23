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

  const { subject, class: grade, topic, duration, unit, learners, extra, language } = req.body || {};

  if (!topic || typeof topic !== "string" || !topic.trim()) {
    return res.status(400).json({ error: "A lesson topic is required." });
  }
  if (!subject || !grade) {
    return res.status(400).json({ error: "Subject and class are required." });
  }

  const langName = language === "rw" ? "Kinyarwanda" : language === "fr" ? "French" : "English";
  const dur = Math.min(Math.max(parseInt(duration, 10) || 40, 20), 120);

  const systemPrompt = `You are GHAD AI, an expert instructional designer specialised in Rwanda's Competence-Based Curriculum (CBC) and REB lesson-plan format.

Generate a complete, classroom-ready lesson plan in ${langName}. Use clear headings and structured sections. Include:
1. General information (subject, class, topic, duration, number of learners if provided).
2. Learning objectives written as observable, measurable outcomes (condition + action + content + standard).
3. Key unit competence.
4. Cross-cutting issues addressed (e.g. gender equality, inclusive education, environment).
5. Teaching and learning materials.
6. Detailed lesson development with timing: introduction, development (main activities), conclusion.
7. Teacher activities and learner activities for each phase — learner-centred, competence-based.
8. Assessment / evaluation methods and sample questions.
9. Differentiation: support for learners with special educational needs and extension for fast learners.
10. Homework / assignment.
11. Teacher self-evaluation prompts.

Keep the plan practical, realistic for a ${dur}-minute lesson, and appropriate for the stated class level. Do not invent curriculum codes you are not sure about — use general REB-aligned language instead.`;

  const userPrompt = `Create a lesson plan with these details:
- Subject: ${subject}
- Class: ${grade}
- Topic: ${topic}
- Duration: ${dur} minutes
${unit ? `- Unit title: ${unit}` : ""}
${learners ? `- Number of learners: ${learners}` : ""}
${extra ? `- Additional instructions: ${extra}` : ""}

Write the entire plan in ${langName}.`;

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
        temperature: 0.6,
        max_tokens: 3800,
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
