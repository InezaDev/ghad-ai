export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "GEMINI_API_KEY is missing" });

  const { subject, class: grade, topic, duration, unit, learners, extra, language } = req.body || {};
  if (!topic) return res.status(400).json({ error: "A topic is required." });

  const langName = language === "rw" ? "Kinyarwanda" : language === "fr" ? "French" : "English";
  const dur = Math.min(Math.max(parseInt(duration, 10) || 40, 20), 120);

  const prompt = `You are GHAD AI, an expert in Rwanda's Competence-Based Curriculum.
  Generate a complete lesson plan in ${langName}.
  Subject: ${subject}
  Class: ${grade}
  Topic: ${topic}
  Duration: ${dur} minutes
  Unit: ${unit || 'N/A'}
  Learners: ${learners || 'N/A'}
  Extra: ${extra || 'N/A'}
  Include: Objectives, Key Competence, Materials, Lesson Development (Intro, Development, Conclusion), Assessment, Homework.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
    if (!upstream.ok) { const errText = await upstream.text(); return res.status(upstream.status).json({ error: errText }); }
    const data = await upstream.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    return res.status(200).json({ content });
  } catch (err) { return res.status(502).json({ error: "Failed to reach AI service." }); }
}
