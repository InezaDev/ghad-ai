(function () {
  function $(selector) {
    return document.querySelector(selector);
  }

  function $$(selector) {
    return document.querySelectorAll(selector);
  }

  var I18N = {
    en: {
      brandTagline: "Lesson Planner",
      navHome: "Home Page",
      navDashboard: "Dashboard",
      navLesson: "AI Lesson Generator",
      navAssistant: "AI Teaching Assistant",
      navAssessment: "Assessment Generator",
      navMethodology: "Teaching Methodologies",
      navResources: "Educational Resources",
      navSettings: "Settings",
      navFeatures: "Features",
      navHow: "How It Works",
      navCurriculum: "REB CBC",
      launchApp: "Open Workspace ->",
      heroHeadline: "Plan Smarter Lessons in 3D Clarity for Every Rwandan Classroom.",
      ctaCreateLesson: "Create Lesson Plan",
      ctaExplore: "Explore Dashboard",
      statLevels: "All Primary & Secondary Levels",
      statAligned: "Competence-Based Ready",
      eyebrowTools: "AI TEACHING SUITE",
      featuresHeading: "Four 3D-Crafted Tools Built for Teachers",
      featuresSub: "Click any card to jump straight into that tool inside your GHAD AI workspace.",
      openTool: "Launch Tool ->",
      eyebrowSteps: "SIMPLE WORKFLOW",
      howHeading: "From Topic to Classroom Ready in 3 Steps",
      step1Title: "Choose Subject & Class",
      step1Desc: "Select P1 through S6, your subject, language (English, Kinyarwanda, or French), and topic.",
      step2Title: "Generate with Gemini AI",
      step2Desc: "GHAD AI structures competences, cross-cutting issues, learner activities, and marking guides.",
      step3Title: "Copy, Print & Teach",
      step3Desc: "Copy your formatted plan with one click and walk into class confident and prepared.",
      ctaBannerTitle: "Ready to Transform Your Lesson Preparation?",
      ctaBannerSub: "Enter the interactive workspace now with no sign-up barrier, built for Rwandan educators.",
      welcome: "Welcome to GHAD AI",
      welcomeSub: "Your intelligent teaching companion for Rwanda's Competence-Based Curriculum.",
      cardLesson: "AI Lesson Generator",
      cardLessonDesc: "Create complete, REB-aligned lesson plans in seconds.",
      cardAssistant: "AI Teaching Assistant",
      cardAssistantDesc: "Ask any educational question and get expert guidance.",
      cardAssessment: "Assessment Generator",
      cardAssessmentDesc: "Generate quizzes, tests and marking guides instantly.",
      cardMethodology: "Teaching Methodologies",
      cardMethodologyDesc: "Discover learner-centred methods for your topic.",
      rebBanner: "Built for Rwanda's Competence-Based Curriculum - REB aligned",
      lessonTitle: "GHAD AI Lesson Generator",
      lessonSub: "Enter a few details and let AI build your complete lesson plan.",
      subject: "Subject",
      classGrade: "Class / Grade",
      lessonTopic: "Lesson Topic",
      duration: "Duration (min)",
      unitTitle: "Unit Title",
      learners: "Number of Learners",
      extraInstructions: "Additional Instructions",
      generateLesson: "Generate Lesson Plan",
      lessonResult: "Generated Lesson Plan",
      copy: "Copy",
      assistantTitle: "AI Teaching Assistant",
      assistantSub: "Ask any question about teaching, classroom management or curriculum.",
      assistantWelcome: "Hello! I am your GHAD teaching assistant. Ask me anything about teaching in Rwanda's CBC.",
      chatPh: "Type your question...",
      send: "Send",
      assessmentTitle: "AI Assessment Generator",
      assessmentSub: "Generate quizzes, tests and marking guides for any topic.",
      topic: "Topic",
      numQuestions: "Number of Questions",
      difficulty: "Difficulty",
      questionTypes: "Question Types",
      difficultyEasy: "Easy",
      difficultyMedium: "Medium",
      difficultyHard: "Hard",
      qMixed: "Mixed",
      qMCQ: "Multiple Choice",
      qTF: "True / False",
      qShort: "Short Answer",
      generateAssessment: "Generate Assessment",
      assessmentResult: "Generated Assessment",
      methodologyTitle: "AI Teaching Methodology Assistant",
      methodologySub: "Get recommended teaching methods for your subject and topic.",
      generateMethodology: "Recommend Methods",
      methodologyResult: "Recommended Methodologies",
      resourcesTitle: "Educational Resources",
      resourcesSub: "Curated links and materials for Rwandan teachers.",
      resREB: "Rwanda Education Board - official curriculum and syllabi.",
      resMINEDUC: "Ministry of Education - policies and guidelines.",
      resElearning: "Digital resources and interactive lessons.",
      resKhan: "Free practice exercises and instructional videos.",
      settingsTitle: "Settings",
      settingsSub: "Customise your GHAD AI experience.",
      language: "Language",
      theme: "Theme",
      themeAuto: "Auto",
      themeLight: "Light",
      themeDark: "Dark",
      settingsNote: "GHAD AI uses Google Gemini to generate content. Your API key is stored securely on the server.",
      lessonTopicPh: "e.g. Fractions",
      unitTitlePh: "e.g. Numbers and Operations",
      learnersPh: "e.g. 45",
      extraPh: "Any special requirements...",
      topicPh: "e.g. Multiplication",
      subjMath: "Mathematics",
      subjEnglish: "English",
      subjKiny: "Kinyarwanda",
      subjFrench: "French",
      subjScience: "Science & Elementary Technology",
      subjSocial: "Social Studies",
      generating: "Generating...",
      errorPrefix: "Error: ",
      copied: "Copied to clipboard.",
      failedToCopy: "Could not copy.",
      networkError: "Network error."
    },
    rw: {
      brandTagline: "Gutegura Isomo",
      navHome: "Ahabanza",
      navDashboard: "Imbonerahamwe",
      navLesson: "Kora Isomo na AI",
      navAssistant: "Umufasha w'Umwarimu",
      navAssessment: "Kora Isuzuma",
      navMethodology: "Uburyo bwo Kwigisha",
      navResources: "Ibikoresho by'Uburezi",
      navSettings: "Igenamiterere",
      navFeatures: "Ibikubiyemo",
      navHow: "Uko Bikora",
      navCurriculum: "REB CBC",
      launchApp: "Injira muri Sisitemu ->",
      heroHeadline: "Tegura Amasomo mu Buryo Bwiza bwa 3D ku Bwarimu bose mu Rwanda.",
      ctaCreateLesson: "Tegura Isomo",
      ctaExplore: "Reba Imbonerahamwe",
      statLevels: "Amashuri Abanza n'Ayisumbuye",
      statAligned: "Bihuye na REB CBC",
      eyebrowTools: "IBIKORESHO BYA AI",
      featuresHeading: "Ibikoresho 4 bya 3D byagenewe Abarimu",
      featuresSub: "Kanda ku gakarita ako ari ko kose utangire gukoresha GHAD AI.",
      openTool: "Tangira ->",
      eyebrowSteps: "INTAMBWE ZOROSHYE",
      howHeading: "Kuva ku Mutwe w'Isomo kugeza mu Ishuri mu Ntambwe 3",
      step1Title: "Hitamo Isomo n'Umwaka",
      step1Desc: "Hitamo kuva P1 kugeza S6, ururimi (Icyongereza, Ikinyarwanda, Igifaransa) n'insanganyamatsiko.",
      step2Title: "Koresha Gemini AI",
      step2Desc: "GHAD AI itegura ubushobozi, ibikorwa by'abanyeshuri n'ibisubizo by'isuzuma.",
      step3Title: "Koporora Wigishe",
      step3Desc: "Koporora gahunda y'isomo mu kanya gato winjire mu ishuri witeguye neza.",
      ctaBannerTitle: "Witeguye Kunoza Imitegurire y'Amasomo Yawe?",
      ctaBannerSub: "Injira nonaha nta kiguzi cyangwa kwiyandikisha bigusabwa.",
      welcome: "Murakaza kuri GHAD AI",
      welcomeSub: "Umufasha wawe w'ubwenge mu kwigisha mu nteganyanyigisho y'u Rwanda ishingiye ku bushobozi.",
      cardLesson: "Kora Isomo na AI",
      cardLessonDesc: "Kora gahunda y'isomo yuzuye ihuye na REB mu masegonda.",
      cardAssistant: "Umufasha w'Umwarimu",
      cardAssistantDesc: "Baza ikibazo cyose cy'uburezi ubone inama z'umuhanga.",
      cardAssessment: "Kora Isuzuma",
      cardAssessmentDesc: "Kora ibizamini n'uburyo bwo kubisuzuma ako kanya.",
      cardMethodology: "Uburyo bwo Kwigisha",
      cardMethodologyDesc: "Menya uburyo bwo kwigisha bushingiye ku munyeshuri.",
      rebBanner: "Yakorewe integanyanyigisho y'u Rwanda ishingiye ku bushobozi - Ihuza na REB",
      lessonTitle: "GHAD AI - Kora Isomo",
      lessonSub: "Shyiramo amakuru make gusa AI ikore gahunda y'isomo yuzuye.",
      subject: "Isomo",
      classGrade: "Umwaka",
      lessonTopic: "Insanganyamatsiko y'Isomo",
      duration: "Igihe (iminota)",
      unitTitle: "Umutwe",
      learners: "Umubare w'Abanyeshuri",
      extraInstructions: "Amabwiriza y'inyongera",
      generateLesson: "Kora Gahunda y'Isomo",
      lessonResult: "Gahunda y'Isomo Yakozwe",
      copy: "Koporora",
      assistantTitle: "Umufasha w'Umwarimu",
      assistantSub: "Baza ikibazo cyose ku bijyanye no kwigisha.",
      assistantWelcome: "Muraho! Ndi umufasha wawe wa GHAD. Mbaza ikibazo cyose ku bijyanye no kwigisha mu Rwanda.",
      chatPh: "Andika ikibazo cyawe...",
      send: "Ohereza",
      assessmentTitle: "Kora Isuzuma na AI",
      assessmentSub: "Kora ibizamini n'uburyo bwo kubisuzuma.",
      topic: "Insanganyamatsiko",
      numQuestions: "Umubare w'Ibibazo",
      difficulty: "Urwego",
      questionTypes: "Ubwoko bw'Ibibazo",
      difficultyEasy: "Byoroshye",
      difficultyMedium: "Biringaniye",
      difficultyHard: "Bigoye",
      qMixed: "Bivanze",
      qMCQ: "Guhitamo",
      qTF: "Yego / Oya",
      qShort: "Insubizo Ngufi",
      generateAssessment: "Kora Isuzuma",
      assessmentResult: "Isuzuma Ryakozwe",
      methodologyTitle: "Umufasha w'Uburyo bwo Kwigisha",
      methodologySub: "Bona uburyo bwo kwigisha bukwiye isomo yawe.",
      generateMethodology: "Tanga Uburyo",
      methodologyResult: "Uburyo Bwasabwe",
      resourcesTitle: "Ibikoresho by'Uburezi",
      resourcesSub: "Amahuza n'ibikoresho byatoranyijwe.",
      resREB: "Ikigo gishinzwe uburezi mu Rwanda.",
      resMINEDUC: "Minisiteri y'Uburezi.",
      resElearning: "Ibikoresho by'ikoranabuhanga.",
      resKhan: "Imyitozo y'ubuntu n'amasomo.",
      settingsTitle: "Igenamiterere",
      settingsSub: "Hindura uko GHAD AI ikora kuri wowe.",
      language: "Ururimi",
      theme: "Uburyo bw'Amabara",
      themeAuto: "Byikora",
      themeLight: "Umucyo",
      themeDark: "Umwijima",
      settingsNote: "GHAD AI ikoresha Google Gemini. Urufunguzo rwa API rubikwa kuri seriveri.",
      lessonTopicPh: "urugero: Imice",
      unitTitlePh: "urugero: Imibare",
      learnersPh: "urugero: 45",
      extraPh: "Ibindi byifuzo...",
      topicPh: "urugero: Gukuba",
      subjMath: "Imibare",
      subjEnglish: "Icyongereza",
      subjKiny: "Ikinyarwanda",
      subjFrench: "Igifaransa",
      subjScience: "Siyansi",
      subjSocial: "Amasomo Mbonezamubano",
      generating: "Birakorwa...",
      errorPrefix: "Ikosa: ",
      copied: "Byakoporowe.",
      failedToCopy: "Ntibyakunze.",
      networkError: "Ikibazo cy'umurongo."
    },
    fr: {
      brandTagline: "Planificateur",
      navHome: "Accueil",
      navDashboard: "Tableau de bord",
      navLesson: "Generateur de lecons",
      navAssistant: "Assistant pedagogique",
      navAssessment: "Generateur d'evaluations",
      navMethodology: "Methodologies",
      navResources: "Ressources",
      navSettings: "Parametres",
      navFeatures: "Fonctionnalites",
      navHow: "Comment ca marche",
      navCurriculum: "REB CBC",
      launchApp: "Ouvrir l'espace ->",
      heroHeadline: "Planifiez vos cours en 3D pour chaque classe au Rwanda.",
      ctaCreateLesson: "Creer une lecon",
      ctaExplore: "Explorer le tableau",
      statLevels: "Primaire & Secondaire (P1-S6)",
      statAligned: "Aligne REB CBC",
      eyebrowTools: "SUITE IA PEDAGOGIQUE",
      featuresHeading: "Quatre outils 3D concus pour les enseignants",
      featuresSub: "Cliquez sur une carte pour ouvrir directement l'outil dans votre espace GHAD AI.",
      openTool: "Lancer l'outil ->",
      eyebrowSteps: "METHODE SIMPLE",
      howHeading: "Du sujet a la salle de classe en 3 etapes",
      step1Title: "Choisissez la matiere et la classe",
      step1Desc: "Selectionnez de P1 a S6, la langue (Anglais, Kinyarwanda ou Francais) et le sujet.",
      step2Title: "Generez avec Gemini AI",
      step2Desc: "GHAD AI structure les competences, activites des eleves et guides de correction.",
      step3Title: "Copiez et enseignez",
      step3Desc: "Copiez votre plan en un clic et entrez en classe parfaitement prepare.",
      ctaBannerTitle: "Pret a transformer votre preparation de cours ?",
      ctaBannerSub: "Accedez immediatement a l'espace interactif concu pour les enseignants rwandais.",
      welcome: "Bienvenue sur GHAD AI",
      welcomeSub: "Votre compagnon pedagogique intelligent pour le curriculum du Rwanda.",
      cardLesson: "Generateur de lecons",
      cardLessonDesc: "Creez des plans de lecon en quelques secondes.",
      cardAssistant: "Assistant pedagogique",
      cardAssistantDesc: "Posez toute question educative.",
      cardAssessment: "Generateur d'evaluations",
      cardAssessmentDesc: "Generez des quiz et des guides de correction.",
      cardMethodology: "Methodologies",
      cardMethodologyDesc: "Decouvrez des methodes centrees sur l'apprenant.",
      rebBanner: "Concu pour le curriculum du Rwanda - Aligne sur le REB",
      lessonTitle: "Generateur de lecons GHAD",
      lessonSub: "Saisissez quelques details et laissez l'IA travailler.",
      subject: "Matiere",
      classGrade: "Classe",
      lessonTopic: "Sujet",
      duration: "Duree (min)",
      unitTitle: "Titre de l'unite",
      learners: "Apprenants",
      extraInstructions: "Instructions",
      generateLesson: "Generer",
      lessonResult: "Plan genere",
      copy: "Copier",
      assistantTitle: "Assistant pedagogique",
      assistantSub: "Posez toute question sur l'enseignement.",
      assistantWelcome: "Bonjour ! Je suis votre assistant GHAD.",
      chatPh: "Tapez votre question...",
      send: "Envoyer",
      assessmentTitle: "Generateur d'evaluations",
      assessmentSub: "Generez des quiz pour tout sujet.",
      topic: "Sujet",
      numQuestions: "Nombre de questions",
      difficulty: "Difficulte",
      questionTypes: "Types",
      difficultyEasy: "Facile",
      difficultyMedium: "Moyen",
      difficultyHard: "Difficile",
      qMixed: "Mixte",
      qMCQ: "Choix multiples",
      qTF: "Vrai / Faux",
      qShort: "Reponse courte",
      generateAssessment: "Generer",
      assessmentResult: "Evaluation generee",
      methodologyTitle: "Methodologie IA",
      methodologySub: "Obtenez des methodes recommandees.",
      generateMethodology: "Recommander",
      methodologyResult: "Methodologies",
      resourcesTitle: "Ressources educatives",
      resourcesSub: "Liens pour les enseignants.",
      resREB: "Curriculum officiel.",
      resMINEDUC: "Politiques.",
      resElearning: "Ressources numeriques.",
      resKhan: "Exercices gratuits.",
      settingsTitle: "Parametres",
      settingsSub: "Personnalisez votre experience.",
      language: "Langue",
      theme: "Theme",
      themeAuto: "Auto",
      themeLight: "Clair",
      themeDark: "Sombre",
      settingsNote: "GHAD AI utilise Google Gemini.",
      lessonTopicPh: "ex. Fractions",
      unitTitlePh: "ex. Nombres",
      learnersPh: "ex. 45",
      extraPh: "Exigences...",
      topicPh: "ex. Multiplication",
      subjMath: "Mathematiques",
      subjEnglish: "Anglais",
      subjKiny: "Kinyarwanda",
      subjFrench: "Francais",
      subjScience: "Sciences",
      subjSocial: "Sciences sociales",
      generating: "Generation...",
      errorPrefix: "Erreur : ",
      copied: "Copie.",
      failedToCopy: "Echec.",
      networkError: "Erreur reseau."
    }
  };

  var LANG = localStorage.getItem("ghad_lang") || "en";
  var THEME = localStorage.getItem("ghad_theme") || "auto";
  var chatHistory = [];

  function t(key) {
    return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
  }

  function applyLanguage() {
    document.documentElement.lang = LANG;
    $$("[data-i18n]").forEach(function (el) {
      var key = el.dataset.i18n;
      if (I18N[LANG] && I18N[LANG][key]) {
        el.textContent = I18N[LANG][key];
      }
    });
    $$("[data-i18n-ph]").forEach(function (el) {
      var key = el.dataset.i18nPh;
      if (I18N[LANG] && I18N[LANG][key]) {
        el.placeholder = I18N[LANG][key];
      }
    });
  }

  function applyTheme() {
    if (THEME === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", THEME);
    }
  }

  function openWorkspace(viewId) {
    var landing = $("#landingPage");
    var workspace = $("#workspaceApp");
    if (landing) landing.style.display = "none";
    if (workspace) workspace.style.display = "flex";
    switchView(viewId || "dashboard");
  }

  function showLandingPage() {
    var landing = $("#landingPage");
    var workspace = $("#workspaceApp");
    if (workspace) workspace.style.display = "none";
    if (landing) landing.style.display = "block";
    closeSidebar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function switchView(viewId) {
    $$(".view").forEach(function (v) {
      v.classList.remove("active");
    });
    var target = document.getElementById("view-" + viewId);
    if (target) target.classList.add("active");
    $$(".nav-btn[data-view]").forEach(function (b) {
      b.classList.toggle("active", b.dataset.view === viewId);
    });
    closeSidebar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeSidebar() {
    var sidebar = $("#sidebar");
    if (sidebar) sidebar.classList.remove("open");
  }

  function init3DTilt() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    $$("[data-tilt]").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var rx = ((y / rect.height) - 0.5) * -10;
        var ry = ((x / rect.width) - 0.5) * 10;

        card.style.setProperty("--mx", ((x / rect.width) * 100) + "%");
        card.style.setProperty("--my", ((y / rect.height) * 100) + "%");
        card.style.transform = "perspective(1000px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg) translateY(-4px)";
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  function toast(message, type) {
    var container = $("#toastContainer");
    if (!container) return;
    var el = document.createElement("div");
    el.className = "toast " + (type || "success");
    el.textContent = message;
    container.appendChild(el);
    setTimeout(function () {
      el.style.opacity = "0";
      el.style.transition = "opacity .3s";
      setTimeout(function () {
        if (el.parentNode) el.remove();
      }, 320);
    }, 4000);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        toast(t("copied"));
      }).catch(function () {
        toast(t("failedToCopy"), "error");
      });
    } else {
      toast(t("failedToCopy"), "error");
    }
  }

  function callAPI(endpoint, body) {
    return fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(function (res) {
      if (!res.ok) {
        return res.json().catch(function () { return {}; }).then(function (err) {
          throw new Error(err.error || ("Request failed (" + res.status + ")"));
        });
      }
      return res.json();
    }).then(function (data) {
      return data.content || "";
    });
  }

  function generateLesson() {
    var btn = $("#generateLesson");
    var output = $("#lessonOutput");
    var body = $("#lessonBody");
    if (!btn || !output || !body) return;

    var subjEl = $("#lessonSubject");
    var classEl = $("#lessonClass");
    var topicEl = $("#lessonTopic");
    var durEl = $("#lessonDuration");
    var unitEl = $("#lessonUnit");
    var learnersEl = $("#lessonLearners");
    var extraEl = $("#lessonExtra");

    var payload = {
      subject: subjEl ? subjEl.value : "Mathematics",
      class: classEl ? classEl.value : "P1",
      topic: topicEl ? topicEl.value.trim() : "",
      duration: parseInt(durEl ? durEl.value : 40, 10) || 40,
      unit: unitEl ? unitEl.value.trim() : "",
      learners: learnersEl ? learnersEl.value.trim() : "",
      extra: extraEl ? extraEl.value.trim() : "",
      language: LANG
    };

    if (!payload.topic) {
      toast("Please enter a lesson topic.", "error");
      return;
    }

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> ' + t("generating");
    output.style.display = "none";

    callAPI("/api/lesson", payload).then(function (content) {
      body.textContent = content;
      output.style.display = "block";
      output.scrollIntoView({ behavior: "smooth", block: "start" });
    }).catch(function (err) {
      toast(t("errorPrefix") + err.message, "error");
    }).finally(function () {
      btn.disabled = false;
      btn.textContent = t("generateLesson");
    });
  }

  function sendChat() {
    var input = $("#chatInput");
    if (!input) return;
    var text = input.value.trim();
    if (!text) return;
    input.value = "";
    addChatMsg(text, "user");
    chatHistory.push({ role: "user", content: text });
    var typingEl = addTyping();

    callAPI("/api/assistant", { messages: chatHistory, language: LANG }).then(function (content) {
      removeTyping(typingEl);
      addChatMsg(content, "ai");
      chatHistory.push({ role: "assistant", content: content });
    }).catch(function (err) {
      removeTyping(typingEl);
      addChatMsg(t("errorPrefix") + err.message, "ai");
    });
  }

  function escapeHTML(s) {
    return String(s)
      .replace(/&/g, "&")
      .replace(/</g, "<")
      .replace(/>/g, ">")
      .replace(/"/g, """);
  }

  function addChatMsg(text, role) {
    var container = $("#chatMessages");
    if (!container) return null;
    var div = document.createElement("div");
    div.className = "chat-msg " + role;
    div.innerHTML = '<div class="msg-avatar">' + (role === "ai" ? "G" : "You") + '</div><div class="msg-bubble">' + escapeHTML(text) + "</div>";
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  }

  function addTyping() {
    var container = $("#chatMessages");
    if (!container) return null;
    var div = document.createElement("div");
    div.className = "chat-msg ai";
    div.innerHTML = '<div class="msg-avatar">G</div><div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  }

  function removeTyping(el) {
    if (el && el.parentNode) el.remove();
  }

  function generateAssessment() {
    var btn = $("#generateAssessment");
    var output = $("#assessmentOutput");
    var body = $("#assessmentBody");
    if (!btn || !output || !body) return;

    var subjEl = $("#assessSubject");
    var classEl = $("#assessClass");
    var topicEl = $("#assessTopic");
    var countEl = $("#assessCount");
    var diffEl = $("#assessDifficulty");
    var typeEl = $("#assessType");

    var payload = {
      subject: subjEl ? subjEl.value : "Mathematics",
      class: classEl ? classEl.value : "P1",
      topic: topicEl ? topicEl.value.trim() : "",
      count: parseInt(countEl ? countEl.value : 10, 10) || 10,
      difficulty: diffEl ? diffEl.value : "medium",
      type: typeEl ? typeEl.value : "mixed",
      language: LANG
    };

    if (!payload.topic) {
      toast("Please enter a topic.", "error");
      return;
    }

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> ' + t("generating");
    output.style.display = "none";

    callAPI("/api/assessment", payload).then(function (content) {
      body.textContent = content;
      output.style.display = "block";
      output.scrollIntoView({ behavior: "smooth", block: "start" });
    }).catch(function (err) {
      toast(t("errorPrefix") + err.message, "error");
    }).finally(function () {
      btn.disabled = false;
      btn.textContent = t("generateAssessment");
    });
  }

  function generateMethodology() {
    var btn = $("#generateMethodology");
    var output = $("#methodologyOutput");
    var body = $("#methodologyBody");
    if (!btn || !output || !body) return;

    var subjEl = $("#methodSubject");
    var classEl = $("#methodClass");
    var topicEl = $("#methodTopic");

    var payload = {
      subject: subjEl ? subjEl.value : "Mathematics",
      class: classEl ? classEl.value : "P1",
      topic: topicEl ? topicEl.value.trim() : "",
      language: LANG
    };

    if (!payload.topic) {
      toast("Please enter a topic.", "error");
      return;
    }

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> ' + t("generating");
    output.style.display = "none";

    callAPI("/api/methodology", payload).then(function (content) {
      body.textContent = content;
      output.style.display = "block";
      output.scrollIntoView({ behavior: "smooth", block: "start" });
    }).catch(function (err) {
      toast(t("errorPrefix") + err.message, "error");
    }).finally(function () {
      btn.disabled = false;
      btn.textContent = t("generateMethodology");
    });
  }

  function setVal(selector, value) {
    var el = $(selector);
    if (el) el.value = value;
  }

  function on(selector, event, handler) {
    var el = $(selector);
    if (el) el.addEventListener(event, handler);
  }

  function init() {
    setVal("#langSelect", LANG);
    setVal("#settingsLang", LANG);
    setVal("#landingLangSelect", LANG);
    setVal("#themeSelect", THEME);
    setVal("#settingsTheme", THEME);

    function updateLang(e) {
      LANG = e.target.value;
      localStorage.setItem("ghad_lang", LANG);
      setVal("#settingsLang", LANG);
      setVal("#langSelect", LANG);
      setVal("#landingLangSelect", LANG);
      applyLanguage();
    }

    on("#langSelect", "change", updateLang);
    on("#settingsLang", "change", updateLang);
    on("#landingLangSelect", "change", updateLang);

    function updateTheme(e) {
      THEME = e.target.value;
      localStorage.setItem("ghad_theme", THEME);
      setVal("#settingsTheme", THEME);
      setVal("#themeSelect", THEME);
      applyTheme();
    }

    on("#themeSelect", "change", updateTheme);
    on("#settingsTheme", "change", updateTheme);

    on("#menuToggle", "click", function () {
      var sidebar = $("#sidebar");
      if (sidebar) sidebar.classList.toggle("open");
    });

    on("#generateLesson", "click", generateLesson);
    on("#copyLesson", "click", function () {
      var body = $("#lessonBody");
      if (body) copyText(body.textContent);
    });

    on("#sendChat", "click", sendChat);
    on("#chatInput", "keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendChat();
      }
    });

    on("#generateAssessment", "click", generateAssessment);
    on("#copyAssessment", "click", function () {
      var body = $("#assessmentBody");
      if (body) copyText(body.textContent);
    });

    on("#generateMethodology", "click", generateMethodology);
    on("#copyMethodology", "click", function () {
      var body = $("#methodologyBody");
      if (body) copyText(body.textContent);
    });

    document.addEventListener("click", function (e) {
      var target = e.target;
      var launchEl = target.closest ? target.closest("[data-launch]") : null;
      if (launchEl) {
        e.preventDefault();
        openWorkspace(launchEl.getAttribute("data-launch") || "dashboard");
        return;
      }

      var homeEl = target.closest ? target.closest("#backToHomeBtn") : null;
      if (homeEl) {
        e.preventDefault();
        showLandingPage();
        return;
      }

      var viewEl = target.closest ? target.closest(".nav-btn[data-view], .feature-card[data-view]") : null;
      if (viewEl) {
        e.preventDefault();
        switchView(viewEl.getAttribute("data-view"));
        return;
      }

      var sidebar = $("#sidebar");
      var toggle = $("#menuToggle");
      if (
        sidebar &&
        toggle &&
        window.innerWidth <= 860 &&
        sidebar.classList.contains("open") &&
        !sidebar.contains(target) &&
        !toggle.contains(target)
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
})();
