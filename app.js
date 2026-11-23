/* ===================================================================
   GHAD AI — Frontend Application
   =================================================================== */

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ===================== I18N ===================== */
const I18N = {
  en: {
    brandTagline: "Lesson Planner", navDashboard: "Dashboard", navLesson: "AI Lesson Generator", navAssistant: "AI Teaching Assistant", navAssessment: "Assessment Generator", navMethodology: "Teaching Methodologies", navResources: "Educational Resources", navSettings: "Settings",
    welcome: "Welcome to GHAD AI", welcomeSub: "Your intelligent teaching companion for Rwanda's Competence-Based Curriculum.",
    cardLesson: "AI Lesson Generator", cardLessonDesc: "Create complete, REB-aligned lesson plans in seconds.",
    cardAssistant: "AI Teaching Assistant", cardAssistantDesc: "Ask any educational question and get expert guidance.",
    cardAssessment: "Assessment Generator", cardAssessmentDesc: "Generate quizzes, tests and marking guides instantly.",
    cardMethodology: "Teaching Methodologies", cardMethodologyDesc: "Discover learner-centred methods for your topic.",
    rebBanner: "Built for Rwanda's Competence-Based Curriculum · REB aligned",
    lessonTitle: "GHAD AI Lesson Generator", lessonSub: "Enter a few details and let AI build your complete lesson plan.",
    subject: "Subject", classGrade: "Class / Grade", lessonTopic: "Lesson Topic", duration: "Duration (min)", unitTitle: "Unit Title", learners: "Number of Learners", extraInstructions: "Additional Instructions", generateLesson: "✦ Generate Lesson Plan", lessonResult: "Generated Lesson Plan", copy: "Copy",
    assistantTitle: "AI Teaching Assistant", assistantSub: "Ask any question about teaching, classroom management or curriculum.", assistantWelcome: "Hello! I'm your GHAD teaching assistant. Ask me anything about teaching in Rwanda's CBC.", chatPh: "Type your question...", send: "Send",
    assessmentTitle: "AI Assessment Generator", assessmentSub: "Generate quizzes, tests and marking guides for any topic.", topic: "Topic", numQuestions: "Number of Questions", difficulty: "Difficulty", questionTypes: "Question Types",
    difficultyEasy: "Easy", difficultyMedium: "Medium", difficultyHard: "Hard", qMixed: "Mixed", qMCQ: "Multiple Choice", qTF: "True / False", qShort: "Short Answer", generateAssessment: "▤ Generate Assessment", assessmentResult: "Generated Assessment",
    methodologyTitle: "AI Teaching Methodology Assistant", methodologySub: "Get recommended teaching methods for your subject and topic.", generateMethodology: "◇ Recommend Methods", methodologyResult: "Recommended Methodologies",
    resourcesTitle: "Educational Resources", resourcesSub: "Curated links and materials for Rwandan teachers.", resREB: "Rwanda Education Board — official curriculum and syllabi.", resMINEDUC: "Ministry of Education — policies and guidelines.", resElearning: "Digital resources and interactive lessons.", resKhan: "Free practice exercises and instructional videos.",
    settingsTitle: "Settings", settingsSub: "Customise your GHAD AI experience.", language: "Language", theme: "Theme", themeAuto: "Auto", themeLight: "Light", themeDark: "Dark", settingsNote: "GHAD AI uses Google Gemini to generate content. Your API key is stored securely on the server.",
    lessonTopicPh: "e.g. Fractions", unitTitlePh: "e.g. Numbers and Operations", learnersPh: "e.g. 45", extraPh: "Any special requirements...", topicPh: "e.g. Multiplication",
    subjMath: "Mathematics", subjEnglish: "English", subjKiny: "Kinyarwanda", subjFrench: "French", subjScience: "Science & Elementary Technology", subjSocial: "Social Studies",
    generating: "Generating...", errorPrefix: "Error: ", copied: "Copied to clipboard.", failedToCopy: "Could not copy.", networkError: "Network error."
  },
  rw: {
    brandTagline: "Gutegura Isomo", navDashboard: "Imbonerahamwe", navLesson: "Kora Isomo na AI", navAssistant: "Umufasha w'Umwarimu", navAssessment: "Kora Isuzuma", navMethodology: "Uburyo bwo Kwigisha", navResources: "Ibikoresho by'Uburezi", navSettings: "Igenamiterere",
    welcome: "Murakaza kuri GHAD AI", welcomeSub: "Umufasha wawe w'ubwenge mu kwigisha mu nteganyanyigisho y'u Rwanda ishingiye ku bushobozi.",
    cardLesson: "Kora Isomo na AI", cardLessonDesc: "Kora gahunda y'isomo yuzuye ihuye na REB mu masegonda.",
    cardAssistant: "Umufasha w'Umwarimu", cardAssistantDesc: "Baza ikibazo cyose cy'uburezi ubone inama z'umuhanga.",
    cardAssessment: "Kora Isuzuma", cardAssessmentDesc: "Kora ibizamini n'uburyo bwo kubisuzuma ako kanya.",
    cardMethodology: "Uburyo bwo Kwigisha", cardMethodologyDesc: "Menya uburyo bwo kwigisha bushingiye ku munyeshuri.",
    rebBanner: "Yakorewe integanyanyigisho y'u Rwanda ishingiye ku bushobozi · Ihuza na REB",
    lessonTitle: "GHAD AI — Kora Isomo", lessonSub: "Shyiramo amakuru make gusa AI ikore gahunda y'isomo yuzuye.",
    subject: "Isomo", classGrade: "Umwaka", lessonTopic: "Insanganyamatsiko y'Isomo", duration: "Igihe (iminota)", unitTitle: "Umutwe", learners: "Umubare w'Abanyeshuri", extraInstructions: "Amabwiriza y'inyongera", generateLesson: "✦ Kora Gahunda y'Isomo", lessonResult: "Gahunda y'Isomo Yakozwe", copy: "Koporora",
    assistantTitle: "Umufasha w'Umwarimu", assistantSub: "Baza ikibazo cyose ku bijyanye no kwigisha.", assistantWelcome: "Muraho! Ndi umufasha wawe wa GHAD. Mbaza ikibazo cyose ku bijyanye no kwigisha mu Rwanda.", chatPh: "Andika ikibazo cyawe...", send: "Ohereza",
    assessmentTitle: "Kora Isuzuma na AI", assessmentSub: "Kora ibizamini n'uburyo bwo kubisuzuma.", topic: "Insanganyamatsiko", numQuestions: "Umubare w'Ibibazo", difficulty: "Urwego", questionTypes: "Ubwoko bw'Ibibazo",
    difficultyEasy: "Byoroshye", difficultyMedium: "Biringaniye", difficultyHard: "Bigoye", qMixed: "Bivanze", qMCQ: "Guhitamo", qTF: "Yego / Oya", qShort: "Insubizo Ngufi", generateAssessment: "▤ Kora Isuzuma", assessmentResult: "Isuzuma Ryakozwe",
    methodologyTitle: "Umufasha w'Uburyo bwo Kwigisha", methodologySub: "Bona uburyo bwo kwigisha bukwiye isomo yawe.", generateMethodology: "◇ Tanga Uburyo", methodologyResult: "Uburyo Bwasabwe",
    resourcesTitle: "Ibikoresho by'Uburezi", resourcesSub: "Amahuza n'ibikoresho byatoranyijwe.", resREB: "Ikigo gishinzwe uburezi mu Rwanda.", resMINEDUC: "Minisiteri y'Uburezi.", resElearning: "Ibikoresho by'ikoranabuhanga.", resKhan: "Imyitozo y'ubuntu n'amasomo.",
    settingsTitle: "Igenamiterere", settingsSub: "Hindura uko GHAD AI ikora kuri wowe.", language: "Ururimi", theme: "Uburyo bw'Amabara", themeAuto: "Byikora", themeLight: "Umucyo", themeDark: "Umwijima", settingsNote: "GHAD AI ikoresha Google Gemini. Urufunguzo rwa API rubikwa kuri seriveri.",
    lessonTopicPh: "urugero: Imice", unitTitlePh: "urugero: Imibare", learnersPh: "urugero: 45", extraPh: "Ibindi byifuzo...", topicPh: "urugero: Gukuba",
    subjMath: "Imibare", subjEnglish: "Icyongereza", subjKiny: "Ikinyarwanda", subjFrench: "Igifaransa", subjScience: "Siyansi", subjSocial: "Amasomo Mbonezamubano",
    generating: "Birakorwa...", errorPrefix: "Ikosa: ", copied: "Byakoporowe.", failedToCopy: "Ntibyakunze.", networkError: "Ikibazo cy'umurongo."
  },
  fr: {
    brandTagline: "Planificateur", navDashboard: "Tableau de bord", navLesson: "Générateur de leçons", navAssistant: "Assistant pédagogique", navAssessment: "Générateur d'évaluations", navMethodology: "Méthodologies", navResources: "Ressources", navSettings: "Paramètres",
    welcome: "Bienvenue sur GHAD AI", welcomeSub: "Votre compagnon pédagogique intelligent pour le curriculum du Rwanda.",
    cardLesson: "Générateur de leçons", cardLessonDesc: "Créez des plans de leçon en quelques secondes.",
    cardAssistant: "Assistant pédagogique", cardAssistantDesc: "Posez toute question éducative.",
    cardAssessment: "Générateur d'évaluations", cardAssessmentDesc: "Générez des quiz et des guides de correction.",
    cardMethodology: "Méthodologies", cardMethodologyDesc: "Découvrez des méthodes centrées sur l'apprenant.",
    rebBanner: "Conçu pour le curriculum du Rwanda · Aligné sur le REB",
    lessonTitle: "Générateur de leçons GHAD", lessonSub: "Saisissez quelques détails et laissez l'IA travailler.",
    subject: "Matière", classGrade: "Classe", lessonTopic: "Sujet", duration: "Durée (min)", unitTitle: "Titre de l'unité", learners: "Apprenants", extraInstructions: "Instructions", generateLesson: "✦ Générer", lessonResult: "Plan généré", copy: "Copier",
    assistantTitle: "Assistant pédagogique", assistantSub: "Posez toute question sur l'enseignement.", assistantWelcome: "Bonjour ! Je suis votre assistant GHAD.", chatPh: "Tapez votre question...", send: "Envoyer",
    assessmentTitle: "Générateur d'évaluations", assessmentSub: "Générez des quiz pour tout sujet.", topic: "Sujet", numQuestions: "Nombre de questions", difficulty: "Difficulté", questionTypes: "Types",
    difficultyEasy: "Facile", difficultyMedium: "Moyen", difficultyHard: "Difficile", qMixed: "Mixte", qMCQ: "Choix multiples", qTF: "Vrai / Faux", qShort: "Réponse courte", generateAssessment: "▤ Générer", assessmentResult: "Évaluation générée",
    methodologyTitle: "Méthodologie IA", methodologySub: "Obtenez des méthodes recommandées.", generateMethodology: "◇ Recommander", methodologyResult: "Méthodologies",
    resourcesTitle: "Ressources éducatives", resourcesSub: "Liens pour les enseignants.", resREB: "Curriculum officiel.", resMINEDUC: "Politiques.", resElearning: "Ressources numériques.", resKhan: "Exercices gratuits.",
    settingsTitle: "Paramètres", settingsSub: "Personnalisez votre expérience.", language: "Langue", theme: "Thème", themeAuto: "Auto", themeLight: "Clair", themeDark: "Sombre", settingsNote: "GHAD AI utilise Google Gemini.",
    lessonTopicPh: "ex. Fractions", unitTitlePh: "ex. Nombres", learnersPh: "ex. 45", extraPh: "Exigences...", topicPh: "ex. Multiplication",
    subjMath: "Mathématiques", subjEnglish: "Anglais", subjKiny: "Kinyarwanda", subjFrench: "Français", subjScience: "Sciences", subjSocial: "Sciences sociales",
    generating: "Génération...", errorPrefix: "Erreur : ", copied: "Copié.", failedToCopy: "Échec.", networkError: "Erreur réseau."
  }
};

let LANG = localStorage.getItem("ghad_lang") || "en";
let THEME = localStorage.getItem("ghad_theme") || "auto";

function t(key) { return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key; }

function applyLanguage() {
  document.documentElement.lang = LANG;
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (I18N[LANG] && I18N[LANG][key]) el.textContent = I18N[LANG][key];
  });
  $$("[data-i18n-ph]").forEach((el) => {
    const key = el.dataset.i18nPh;
    if (I18N[LANG] && I18N[LANG][key]) el.placeholder = I18N[LANG][key];
  });
}

function applyTheme() {
  if (THEME === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", THEME);
}

function switchView(viewId) {
  $$(".view").forEach((v) => v.classList.remove("active"));
  const target = document.getElementById("view-" + viewId);
  if (target) target.classList.add("active");
  $$(".nav-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === viewId));
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeSidebar() { $("#sidebar").classList.remove("open"); }

function toast(message, type = "success") {
  const container = $("#toastContainer");
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0"; el.style.transition = "opacity .3s";
    setTimeout(() => el.remove(), 320);
  }, 4000);
}

async function copyText(text) {
  try { await navigator.clipboard.writeText(text); toast(t("copied")); } 
  catch { toast(t("failedToCopy"), "error"); }
}

async function callAPI(endpoint, body) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    let msg = `Request failed (${res.status})`;
    try { const err = await res.json(); if (err.error) msg = err.error; } catch {}
    throw new Error(msg);
  }
  const data = await res.json();
  return data.content || "";
}

async function generateLesson() {
  const btn = $("#generateLesson"), output = $("#lessonOutput"), body = $("#lessonBody");
  const payload = {
    subject: $("#lessonSubject").value, class: $("#lessonClass").value, topic: $("#lessonTopic").value.trim(),
    duration: parseInt($("#lessonDuration").value, 10) || 40, unit: $("#lessonUnit").value.trim(),
    learners: $("#lessonLearners").value.trim(), extra: $("#lessonExtra").value.trim(), language: LANG,
  };
  if (!payload.topic) { toast("Please enter a lesson topic.", "error"); return; }
  btn.disabled = true; btn.innerHTML = `<span class="spinner"></span> ${t("generating")}`; output.style.display = "none";
  try {
    const content = await callAPI("/api/lesson", payload);
    body.textContent = content; output.style.display = "block"; output.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (err) { toast(t("errorPrefix") + err.message, "error"); } 
  finally { btn.disabled = false; btn.textContent = t("generateLesson"); }
}

let chatHistory = [];
async function sendChat() {
  const input = $("#chatInput"), text = input.value.trim();
  if (!text) return;
  input.value = "";
  addChatMsg(text, "user");
  chatHistory.push({ role: "user", content: text });
  const typingEl = addTyping();
  try {
    const content = await callAPI("/api/assistant", { messages: chatHistory, language: LANG });
    removeTyping(typingEl); addChatMsg(content, "ai"); chatHistory.push({ role: "assistant", content });
  } catch (err) { removeTyping(typingEl); addChatMsg(t("errorPrefix") + err.message, "ai"); }
}

function addChatMsg(text, role) {
  const container = $("#chatMessages");
  const div = document.createElement("div");
  div.className = `chat-msg ${role}`;
  div.innerHTML = `<div class="msg-avatar">${role === "ai" ? "G" : "You"}</div><div class="msg-bubble">${escapeHTML(text)}</div>`;
  container.appendChild(div); container.scrollTop = container.scrollHeight; return div;
}

function addTyping() {
  const container = $("#chatMessages");
  const div = document.createElement("div");
  div.className = "chat-msg ai";
  div.innerHTML = `<div class="msg-avatar">G</div><div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  container.appendChild(div); container.scrollTop = container.scrollHeight; return div;
}

function removeTyping(el) { if (el && el.parentNode) el.remove(); }
function escapeHTML(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

async function generateAssessment() {
  const btn = $("#generateAssessment"), output = $("#assessmentOutput"), body = $("#assessmentBody");
  const payload = {
    subject: $("#assessSubject").value, class: $("#assessClass").value, topic: $("#assessTopic").value.trim(),
    count: parseInt($("#assessCount").value, 10), difficulty: $("#assessDifficulty").value, type: $("#assessType").value, language: LANG,
  };
  if (!payload.topic) { toast("Please enter a topic.", "error"); return; }
  btn.disabled = true; btn.innerHTML = `<span class="spinner"></span> ${t("generating")}`; output.style.display = "none";
  try {
    const content = await callAPI("/api/assessment", payload);
    body.textContent = content; output.style.display = "block"; output.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (err) { toast(t("errorPrefix") + err.message, "error"); } 
  finally { btn.disabled = false; btn.textContent = t("generateAssessment"); }
}

async function generateMethodology() {
  const btn = $("#generateMethodology"), output = $("#methodologyOutput"), body = $("#methodologyBody");
  const payload = { subject: $("#methodSubject").value, class: $("#methodClass").value, topic: $("#methodTopic").value.trim(), language: LANG };
  if (!payload.topic) { toast("Please enter a topic.", "error"); return; }
  btn.disabled = true; btn.innerHTML = `<span class="spinner"></span> ${t("generating")}`; output.style.display = "none";
  try {
    const content = await callAPI("/api/methodology", payload);
    body.textContent = content; output.style.display = "block"; output.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (err) { toast(t("errorPrefix") + err.message, "error"); } 
  finally { btn.disabled = false; btn.textContent = t("generateMethodology"); }
}

function init() {
  $("#langSelect").value = LANG; $("#settingsLang").value = LANG; $("#themeSelect").value = THEME; $("#settingsTheme").value = THEME;
  
  const updateLang = (e) => { LANG = e.target.value; localStorage.setItem("ghad_lang", LANG); $("#settingsLang").value = LANG; $("#langSelect").value = LANG; applyLanguage(); };
  $("#langSelect").addEventListener("change", updateLang); $("#settingsLang").addEventListener("change", updateLang);

  const updateTheme = (e) => { THEME = e.target.value; localStorage.setItem("ghad_theme", THEME); $("#settingsTheme").value = THEME; $("#themeSelect").value = THEME; applyTheme(); };
  $("#themeSelect").addEventListener("change", updateTheme); $("#settingsTheme").addEventListener("change", updateTheme);

  $("#menuToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $$(".nav-btn").forEach((btn) => btn.addEventListener("click", () => switchView(btn.dataset.view)));
  $$(".feature-card").forEach((card) => card.addEventListener("click", () => switchView(card.dataset.view)));

  $("#generateLesson").addEventListener("click", generateLesson);
  $("#copyLesson").addEventListener("click", () => copyText($("#lessonBody").textContent));
  $("#sendChat").addEventListener("click", sendChat);
  $("#chatInput").addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChat(); } });
  $("#generateAssessment").addEventListener("click", generateAssessment);
  $("#copyAssessment").addEventListener("click", () => copyText($("#assessmentBody").textContent));
  $("#generateMethodology").addEventListener("click", generateMethodology);
  $("#copyMethodology").addEventListener("click", () => copyText($("#methodologyBody").textContent));

  document.addEventListener("click", (e) => {
    const sidebar = $("#sidebar"), toggle = $("#menuToggle");
    if (window.innerWidth <= 860 && sidebar.classList.contains("open") && !sidebar.contains(e.target) && !toggle.contains(e.target)) closeSidebar();
  });

  applyLanguage(); applyTheme();
}

init();
