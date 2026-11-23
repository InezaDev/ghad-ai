const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const I18N = {
  en: {
    brandTagline: "Lesson Planner", navHome: "Home Page", navDashboard: "Dashboard", navLesson: "AI Lesson Generator", navAssistant: "AI Teaching Assistant", navAssessment: "Assessment Generator", navMethodology: "Teaching Methodologies", navResources: "Educational Resources", navSettings: "Settings",
    navFeatures: "Features", navHow: "How It Works", navCurriculum: "REB CBC", launchApp: "Open Workspace →",
    heroHeadline: "Plan Smarter Lessons in 3D Clarity for Every Rwandan Classroom.",
    ctaCreateLesson: "✦ Create Lesson Plan", ctaExplore: "Explore Dashboard",
    statLevels: "All Primary & Secondary Levels", statAligned: "Competence-Based Ready",
    eyebrowTools: "AI TEACHING SUITE", featuresHeading: "Four 3D-Crafted Tools Built for Teachers", featuresSub: "Click any card to jump straight into that tool inside your GHAD AI workspace.", openTool: "Launch Tool →",
    eyebrowSteps: "SIMPLE WORKFLOW", howHeading: "From Topic to Classroom Ready in 3 Steps",
    step1Title: "Choose Subject & Class", step1Desc: "Select P1 through S6, your subject, language (English, Kinyarwanda, or French), and topic.",
    step2Title: "Generate with Gemini AI", step2Desc: "GHAD AI structures competences, cross-cutting issues, learner activities, and marking guides.",
    step3Title: "Copy, Print & Teach", step3Desc: "Copy your formatted plan with one click and walk into class confident and prepared.",
    ctaBannerTitle: "Ready to Transform Your Lesson Preparation?", ctaBannerSub: "Enter the interactive workspace now—no sign-up barrier, built for Rwandan educators.",
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
    brandTagline: "Gutegura Isomo", navHome: "Ahabanza", navDashboard: "Imbonerahamwe", navLesson: "Kora Isomo na AI", navAssistant: "Umufasha w'Umwarimu", navAssessment: "Kora Isuzuma", navMethodology: "Uburyo bwo Kwigisha", navResources: "Ibikoresho by'Uburezi", navSettings: "Igenamiterere",
    navFeatures: "Ibikubiyemo", navHow: "Uko Bikora", navCurriculum: "REB CBC", launchApp: "Injira muri Sisitemu →",
    heroHeadline: "Tegura Amasomo mu Buryo Bwiza bwa 3D ku Bwarimu bose mu Rwanda.",
    ctaCreateLesson: "✦ Tegura Isomo", ctaExplore: "Reba Imbonerahamwe",
    statLevels: "Amashuri Abanza n'Ayisumbuye", statAligned: "Bihuye na REB CBC",
    eyebrowTools: "IBIKORESHO BYA AI", featuresHeading: "Ibikoresho 4 bya 3D byagenewe Abarimu", featuresSub: "Kanda ku gakarita ako ari ko kose utangire gukoresha GHAD AI.", openTool: "Tangira →",
    eyebrowSteps: "INTAMBWE ZOROSHYE", howHeading: "Kuva ku Mutwe w'Isomo kugeza mu Ishuri mu Ntambwe 3",
    step1Title: "Hitamo Isomo n'Umwaka", step1Desc: "Hitamo kuva P1 kugeza S6, ururimi (Icyongereza, Ikinyarwanda, Igifaransa) n'insanganyamatsiko.",
    step2Title: "Koresha Gemini AI", step2Desc: "GHAD AI itegura ubushobozi, ibikorwa by'abanyeshuri n'ibisubizo by'isuzuma.",
    step3Title: "Koporora Wigishe", step3Desc: "Koporora gahunda y'isomo mu kanya gato winjire mu ishuri witeguye neza.",
    ctaBannerTitle: "Witeguye Kunoza Imitegurire y'Amasomo Yawe?", ctaBannerSub: "Injira nonaha nta kiguzi cyangwa kwiyandikisha bigusabwa.",
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
    brandTagline: "Planificateur", navHome: "Accueil", navDashboard: "Tableau de bord", navLesson: "Générateur de leçons", navAssistant: "Assistant pédagogique", navAssessment: "Générateur d'évaluations", navMethodology: "Méthodologies", navResources: "Ressources", navSettings: "Paramètres",
    navFeatures: "Fonctionnalités", navHow: "Comment ça marche", navCurriculum: "REB CBC", launchApp: "Ouvrir l'espace →",
    heroHeadline: "Planifiez vos cours en 3D pour chaque classe au Rwanda.",
    ctaCreateLesson: "✦ Créer une leçon", ctaExplore: "Explorer le tableau",
    statLevels: "Primaire & Secondaire (P1–S6)", statAligned: "Aligné REB CBC",
    eyebrowTools: "SUITE IA PÉDAGOGIQUE", featuresHeading: "Quatre outils 3D conçus pour les enseignants", featuresSub: "Cliquez sur une carte pour ouvrir directement l'outil dans votre espace GHAD AI.", openTool: "Lancer l'outil →",
    eyebrowSteps: "MÉTHODE SIMPLE", howHeading: "Du sujet à la salle de classe en 3 étapes",
    step1Title: "Choisissez la matière et la classe", step1Desc: "Sélectionnez de P1 à S6, la langue (Anglais, Kinyarwanda ou Français) et le sujet.",
    step2Title: "Générez avec Gemini AI", step2Desc: "GHAD AI structure les compétences, activités des élèves et guides de correction.",
    step3Title: "Copiez et enseignez", step3Desc: "Copiez votre plan en un clic et entrez en classe parfaitement préparé.",
    ctaBannerTitle: "Prêt à transformer votre préparation de cours ?", ctaBannerSub: "Accédez immédiatement à l'espace interactif conçu pour les enseignants rwandais.",
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

function openWorkspace(viewId = "dashboard") {
  const landing = $("#landingPage");
  const workspace = $("#workspaceApp");
  if (landing) landing.style.display = "none";
  if (workspace) workspace.style.display = "flex";
  switchView(viewId);
}

function showLandingPage() {
  const landing = $("#landingPage");
  const workspace = $("#workspaceApp");
  if (workspace) workspace.style.display = "none";
  if (landing) landing.style.display = "block";
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function switchView(viewId) {
  $$(".view").forEach((v) => v.classList.remove("active"));
  const target = document.getElementById("view-" + viewId);
  if (target) target.classList.add("active");
  $$(".nav-btn[data-view]").forEach((b) => b.classList.toggle("active", b.dataset.view === viewId));
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeSidebar() {
  const sidebar = $("#sidebar");
  if (sidebar) sidebar.classList.remove("open");
}

function init3DTilt() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  $$("[data-tilt]").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -10;
      const ry = ((x / rect.width) - 0.5) * 10;

      card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
      card.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function toast(message, type = "success") {
  const container = $("#toastContainer");
  if (!container) return;
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
  if (!btn || !output || !body) return;
  const payload = {
    subject: $("#lessonSubject")?.value || "Mathematics",
    class: $("#lessonClass")?.value || "P1",
    topic: $("#lessonTopic")?.value.trim() || "",
    duration: parseInt($("#lessonDuration")?.value, 10) || 40,
    unit: $("#lessonUnit")?.value.trim() || "",
    learners: $("#lessonLearners")?.value.trim() || "",
    extra: $("#lessonExtra")?.value.trim() || "",
    language: LANG,
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
  const input = $("#chatInput");
  if (!input) return;
  const text = input.value.trim();
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
  if (!container) return null;
  const div = document.createElement("div");
  div.className = `chat-msg ${role}`;
  div.innerHTML = `<div class="msg-avatar">${role === "ai" ? "G" : "You"}</div><div class="msg-bubble">${escapeHTML(text)}</div>`;
  container.appendChild(div); container.scrollTop = container.scrollHeight; return div;
}

function addTyping() {
  const container = $("#chatMessages");
  if (!container) return null;
  const div = document.createElement("div");
  div.className = "chat-msg ai";
  div.innerHTML = `<div class="msg-avatar">G</div><div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  container.appendChild(div); container.scrollTop = container.scrollHeight; return div;
}

function removeTyping(el) { if (el && el.parentNode) el.remove(); }
function escapeHTML(s) { return String(s).replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, """); }

async function generateAssessment() {
  const btn = $("#generateAssessment"), output = $("#assessmentOutput"), body = $("#assessmentBody");
  if (!btn || !output || !body) return;
  const payload = {
    subject: $("#assessSubject")?.value || "Mathematics",
    class: $("#assessClass")?.value || "P1",
    topic: $("#assessTopic")?.value.trim() || "",
    count: parseInt($("#assessCount")?.value, 10) || 10,
    difficulty: $("#assessDifficulty")?.value || "medium",
    type: $("#assessType")?.value || "mixed",
    language: LANG,
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
  if (!btn || !output || !body) return;
  const payload = {
    subject: $("#methodSubject")?.value || "Mathematics",
    class: $("#methodClass")?.value || "P1",
    topic: $("#methodTopic")?.value.trim() || "",
    language: LANG,
  };
  if (!payload.topic) { toast("Please enter a topic.", "error"); return; }
  btn.disabled = true; btn.innerHTML = `<span class="spinner"></span> ${t("generating")}`; output.style.display = "none";
  try {
    const content = await callAPI("/api/methodology", payload);
    body.textContent = content; output.style.display = "block"; output.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (err) { toast(t("errorPrefix") + err.message, "error"); }
  finally { btn.disabled = false; btn.textContent = t("generateMethodology"); }
}

function setVal(selector, value) {
  const el = $(selector);
  if (el) el.value = value;
}

function on(selector, event, handler) {
  const el = $(selector);
  if (el) el.addEventListener(event, handler);
}

function init() {
  setVal("#langSelect", LANG);
  setVal("#settingsLang", LANG);
  setVal("#landingLangSelect", LANG);
  setVal("#themeSelect", THEME);
  setVal("#settingsTheme", THEME);

  const updateLang = (e) => {
    LANG = e.target.value;
    localStorage.setItem("ghad_lang", LANG);
    setVal("#settingsLang", LANG);
    setVal("#langSelect", LANG);
    setVal("#landingLangSelect", LANG);
    applyLanguage();
  };

  on("#langSelect", "change", updateLang);
  on("#settingsLang", "change", updateLang);
  on("#landingLangSelect", "change", updateLang);

  const updateTheme = (e) => {
    THEME = e.target.value;
    localStorage.setItem("ghad_theme", THEME);
    setVal("#settingsTheme", THEME);
    setVal("#themeSelect", THEME);
    applyTheme();
  };

  on("#themeSelect", "change", updateTheme);
  on("#settingsTheme", "change", updateTheme);

  $$("[data-launch]").forEach((el) => {
    el.addEventListener("click", () => openWorkspace(el.dataset.launch));
  });
  on("#backToHomeBtn", "click", showLandingPage);

  on("#menuToggle", "click", () => {
    const sidebar = $("#sidebar");
    if (sidebar) sidebar.classList.toggle("open");
  });

  $$(".nav-btn[data-view]").forEach((btn) =>
    btn.addEventListener("click", () => switchView(btn.dataset.view))
  );
  $$(".feature-card").forEach((card) =>
    card.addEventListener("click", () => switchView(card.dataset.view))
  );

  on("#generateLesson", "click", generateLesson);
  on("#copyLesson", "click", () => {
    const body = $("#lessonBody");
    if (body) copyText(body.textContent);
  });

  on("#sendChat", "click", sendChat);
  on("#chatInput", "keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendChat();
    }
  });

  on("#generateAssessment", "click", generateAssessment);
  on("#copyAssessment", "click", () => {
    const body = $("#assessmentBody");
    if (body) copyText(body.textContent);
  });

  on("#generateMethodology", "click", generateMethodology);
  on("#copyMethodology", "click", () => {
    const body = $("#methodologyBody");
    if (body) copyText(body.textContent);
  });

  document.addEventListener("click", (e) => {
    const sidebar = $("#sidebar");
    const toggle = $("#menuToggle");
    if (
      sidebar &&
      toggle &&
      window.innerWidth <= 860 &&
      sidebar.classList.contains("open") &&
      !sidebar.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      closeSidebar();
    }
  });

  applyLanguage();
  applyTheme();
  init3DTilt();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
