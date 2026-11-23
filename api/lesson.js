export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY is missing in Vercel environment variables" });
  }

  const { subject, class: grade, topic, duration, unit, learners, extra, language } = req.body || {};
  if (!topic) {
    return res.status(400).json({ error: "A topic is required." });
  }

  const langName = language === "rw" ? "Kinyarwanda" : language === "fr" ? "French" : "English";
  const dur = Math.min(Math.max(parseInt(duration, 10) || 40, 20), 120);

  const prompt = `You are GHAD AI, an expert in Rwanda's Competence-Based Curriculum (CBC) aligned with REB standards.
Generate a complete, structured lesson plan in ${langName}.
Subject: ${subject}
Class / Grade: ${grade}
Lesson Topic: ${topic}
Duration: ${dur} minutes
Unit Title: ${unit || "N/A"}
Number of Learners: ${learners || "N/A"}
Additional Instructions: ${extra || "N/A"}

Include clear sections for:
1. Instructional Objectives
2. Key Competence & Cross-Cutting Issues
3. Teaching & Learning Materials
4. Lesson Development (Introduction, Development/Body, Conclusion) with Teacher & Learner Activities
5. Assessment
6. Homework / Extension Activity`;

  const model = "gemini-3.5-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        error: data?.error?.message || "Gemini API request failed",
      });
    }

    const content =
      data.candidates?.[0]?.content?.parts
        ?.map((part) => part.text || "")
        .join("")
        .trim() || "No response generated.";

    return res.status(200).json({ content });
  } catch (err) {
    return res.status(502).json({ error: "Failed to reach AI service." });
  }
}
