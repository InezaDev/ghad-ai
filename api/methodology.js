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

  const { subject, class: grade, topic, language } = req.body || {};

  if (!subject || !grade || !topic) {
    return res.status(400).json({ error: "Subject, class and topic are required." });
  }

  const langName = language === "rw" ? "Kinyarwanda" : language === "fr" ? "French" : "English";

  const systemPrompt = `You are GHAD AI Teaching Methodology Advisor, an expert in learner-centred pedagogy for Rwanda's Competence-Based Curriculum.

Recommend teaching methodologies for the given subject, grade and topic. For each methodology:
- Name it clearly.
- Explain why it suits this specific topic and age group.
- Give 2–3 concrete steps for applying it in a Rwandan classroom.
- Mention any materials or classroom arrangements needed.

Cover a range of appropriate methods from: group discussion, pair work, demonstration, project-based learning, problem-solving, role play, discovery learning, practical work, question-and-answer, storytelling, games and songs, think-pair-share, gallery walk, and differentiated instruction.

Prioritise methods that are realistic with limited resources and large classes. Mention how to include learners with special educational needs. Write entirely in ${langName}. End with a short "Recommended combination" paragraph suggesting how to sequence 2–3 methods in one lesson.`;

  const userPrompt = `Subject: ${subject}
Class: ${grade}
Topic: ${topic}

Recommend the best teaching methodologies for this lesson. Write in ${langName}.`;

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
        max_tokens: 2800,
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
