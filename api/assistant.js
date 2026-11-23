export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "GEMINI_API_KEY is missing" });

  const { messages, language } = req.body || {};
  if (!messages || messages.length === 0) return res.status(400).json({ error: "Messages required" });

  const langName = language === "rw" ? "Kinyarwanda" : language === "fr" ? "French" : "English";
  const contents = messages.map(m => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] }));
  const prompt = `You are GHAD AI, a helpful teaching assistant for Rwandan teachers. Answer the user in ${langName}.`;
  contents.unshift({ role: "user", parts: [{ text: prompt }] });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const upstream = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contents }) });
    const data = await upstream.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    return res.status(200).json({ content });
  } catch (err) { return res.status(502).json({ error: "Failed to reach AI service." }); }
}
