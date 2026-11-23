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
  const introMin = Math.max(5, Math.round(dur * 0.125));
  const conclMin = Math.max(5, Math.round(dur * 0.125));
  const devMin = dur - introMin - conclMin;

  const prompt = `You are an experienced Rwandan Master Teacher and Curriculum Specialist aligned with the Rwanda Education Board (REB) and NESA Competence-Based Curriculum (CBC).

Generate an authentic, classroom-ready REB Lesson Plan in ${langName} using the exact details below:
- Subject: ${subject}
- Class: ${grade}
- Unit Title: ${unit || "[Specify exact REB Unit Title for this topic]"}
- Lesson Title / Topic: ${topic}
- Duration: ${dur} minutes (${introMin} min Introduction, ${devMin} min Development, ${conclMin} min Conclusion)
- Class Size: ${learners || "45"}
- Special Educational Needs / Additional Instructions: ${extra || "None specified (do NOT invent disabilities or special-needs learners unless stated here)."}

STRICT FORMATTING RULES:
1. Do NOT use raw Markdown characters such as #, ##, ###, **, *, or backticks. Use clean plain text with CAPITALIZED SECTION HEADERS, clear labels, and clean Unicode box/column separators or numbered steps so it reads like an official printed REB document.
2. Follow the official REB CBC Lesson Plan structure in this exact order:

SECTION 1: ADMINISTRATIVE DETAILS
- School Name: ________________________
- Teacher's Name: _____________________
- Term: ______   Date: ___/___/2026   Subject: ${subject}   Class: ${grade}
- Unit No. & Title: ${unit || "[REB Unit Title]"}
- Key Unit Competence: [State the exact REB Key Unit Competence for ${grade} ${subject}]
- Lesson Title: ${topic}
- Duration: ${dur} minutes   Class Size: ${learners || "45"}
- Special Educational Needs: ${extra || "None"}

SECTION 2: LESSON OBJECTIVES & COMPETENCES
- Instructional Objective: Write ONE complete REB-standard SMART objective starting with: "Through [learning activity/materials], learners will be able to [measurable action verb] ${topic} [standard/accuracy]."
- Knowledge and Understanding:
- Skills:
- Attitudes and Values:
- Generic Competences Addressed: (e.g., Critical thinking, Communication, Cooperation and interpersonal management, Lifelong learning)
- Cross-Cutting Issues Addressed: (e.g., Peace and values education, Gender education, Environment and sustainability, Inclusive education — only relevant ones)
- Teaching and Learning Materials (TLMs): (Practical, locally available Rwandan classroom materials and REB Pupil's Book / Teacher's Guide)

SECTION 3: LESSON DEVELOPMENT
Present each stage clearly with:
- Stage & Timing
- Teacher's Activities
- Learner's Activities
- Generic Competences & Cross-Cutting Issues Integrated

Include:
1. INTRODUCTION (${introMin} minutes): Review of prerequisite knowledge and warm-up activity connecting to ${topic}.
2. DEVELOPMENT (${devMin} minutes): Step-by-step learner-centred discovery, demonstration, guided group/pair work, and presentation of findings.
3. CONCLUSION (${conclMin} minutes): Summary of key concepts, formative assessment questions/exercises with expected answers, and homework.

SECTION 4: TEACHER SELF-EVALUATION
- Leave a clean blank reflection prompt for the teacher to fill in after teaching (strengths, challenges, way forward).

Write concisely, practically, and accurately in ${langName}.`;

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
        .replace(/[#*`]/g, "")
        .trim() || "No response generated.";

    return res.status(200).json({ content });
  } catch (err) {
    return res.status(502).json({ error: "Failed to reach AI service." });
  }
}
