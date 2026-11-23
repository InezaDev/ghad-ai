export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY is missing in Vercel environment variables" });
  }

  const { subject, class: grade, topic, count, difficulty, type, language } = req.body || {};
  if (!topic) {
    return res.status(400).json({ error: "Topic is required." });
  }

  const langName = language === "rw" ? "Kinyarwanda" : language === "fr" ? "French" : "English";
  const numQ = Math.min(Math.max(parseInt(count, 10) || 10, 1), 30);

  const prompt = `You are GHAD AI, an expert in Rwanda's Competence-Based Curriculum (CBC).
Generate a ${difficulty || "medium"} ${type || "mixed"} assessment in ${langName} for ${grade} ${subject} on the topic "${topic}".
Total number of questions: ${numQ}.
Format clearly with numbered questions and include a complete Marking Guide / Answer Key at the end.`;

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
