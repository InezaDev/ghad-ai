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

  const { messages, language } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "A non-empty messages array is required." });
  }
  if (messages.length > 40) {
    return res.status(400).json({ error: "Conversation is too long. Please start a new chat." });
  }

  const langName = language === "rw" ? "Kinyarwanda" : language === "fr" ? "French" : "English";

  const systemPrompt = `You are GHAD AI Teaching Assistant, a friendly and highly knowledgeable pedagogical advisor for teachers in Rwanda.

Your role:
- Answer questions about teaching, lesson delivery, classroom management, assessment, inclusive education, and Rwanda's Competence-Based Curriculum (CBC) / REB framework.
- Give practical, actionable advice that a teacher can use immediately in a real classroom.
- Use learner-centred, competence-based approaches.
- When asked to explain a concept, use simple language and concrete examples suitable for the stated grade level.
- If the teacher mentions learners with special educational needs, give specific inclusion strategies.
- Keep answers concise but complete. Use short paragraphs or bullet points where helpful.
- Always respond in ${langName}.

If a question is outside education, politely steer the conversation back to teaching and learning.`;

  const safeMessages = messages
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-30)
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 4000) }));

  try {
    const upstream = await fetch(DEEPSEEK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "system", content: systemPrompt }, ...safeMessages],
        temperature: 0.7,
        max_tokens: 2200,
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
