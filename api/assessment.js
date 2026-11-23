export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "GEMINI_API_KEY is missing" });

  const { subject, class: grade, topic, count, difficulty, type, language } = req.body || {};
  if (!topic) return res.status(400).json({ error: "Topic required" });

  const langName = language === "rw" ? "Kinyarwanda" : language === "fr" ? "French" : "English";
  const prompt = `You are GHAD AI. Generate a ${difficulty} ${type} assessment in ${langName} for ${grade} ${subject} on "${topic}". Total questions: ${count}. Include an answer key.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const upstream = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
    const data = await upstream.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    return res.status(200).json({ content });
  } catch (err) { return res.status(502).json({ error: "Failed to reach AI service." }); }
}
