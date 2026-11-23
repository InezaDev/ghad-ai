document.addEventListener('DOMContentLoaded', () => {
'use strict';
const $ = (id) => document.getElementById(id);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const safe = (el, fn) => { if (el && typeof fn === 'function') fn(el); };
const e = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
const ed = (t) => '<div contenteditable="true">' + t + '</div>';
const DOT = '.....................';

/* ================= TRANSLATIONS (EN | RW | FR) ================= */
const D = {}; const IX = { rw: 0, fr: 1 }; let LG = 'en';
try { LG = localStorage.getItem('ghad_lang') || 'en'; } catch (_) {}
String.raw`Lesson Planner|Umugenga w'Isomo|Planificateur de leçons
AI Assistant|Umufasha wa AI|Assistant IA
Assessment|Ibipimo|Évaluation
Methodology|Uburyo|Méthodologie
My Plans|Ibipimo byanjye|Mes plans
Settings|Igenamiterere|Paramètres
Competence-Based Curriculum · REB format|Integanyanyigisho ishingiye ku bushobozi · Uburyo bwa REB|Curriculum par compétences · Format REB
Plan your lesson in minutes|Tegura isomo ryawe mu minota mike|Préparez votre leçon en quelques minutes
AI-powered, for every teacher in our school, all subjects, in the official REB lesson plan format.|Byifashishijwe AI, kuri buri mwarimu wo mu ishuri ryacu, mu masomo yose, mu buryo bwa REB bwo gutegura isomo.|Propulsé par l'IA, pour tous les enseignants de notre école, toutes matières, au format officiel REB.
1 · Fill in the lesson details|1 · Uzuza amakuru y'isomo|1 · Remplissez les détails de la leçon
2 · Press Generate — the AI writes the plan|2 · Kanda Kora — AI yandika umwanzuro|2 · Appuyez sur Générer — l'IA rédige le plan
3 · Edit, save and print|3 · Hindura, bika kandi usohore|3 · Modifiez, enregistrez et imprimez
✨ Start a lesson plan|✨ Tangira gutegura isomo|✨ Commencer un plan de leçon
💬 Ask the AI assistant|💬 Baza umufasha wa AI|💬 Demander à l'assistant IA
Lesson Planner|Umugenga w'Isomo|Planificateur de leçons
AI writes the full REB CBC plan table.|AI yandika imbonerahamwe yuzuye ya REB CBC.|L'IA rédige le tableau REB CBC complet.
Ask anything, with saved chat history.|Baza icyo aricyo cyose, ibiganiro bibikwa.|Posez vos questions, l'historique est enregistré.
Generate quizzes and test items.|Kora ibibazo by'ibipimo.|Générez des quiz et des questions.
Learner-centred teaching strategies.|Uburyo bw'igishirwa ku banyeshuri.|Stratégies centrées sur l'apprenant.
← Home|← Ahabanza|← Accueil
🏫 Identification|🏫 Imyirondoro|🏫 Identification
📚 Curriculum and objective|📚 Integanyanyigisho n'intego|📚 Programme et objectif
🎯 Delivery|🎯 Uko isomo rizatangwa|🎯 Déroulement
School name|Izina ry'ishuri|Nom de l'école
Teacher's name|Izina ry'umwarimu|Nom de l'enseignant
Term|Igihembwe|Trimestre
Date|Itariki|Date
Subject|Isomo|Matière
Class|Umwaka|Classe
Unit No|Umutwe No|Unité N°
Lesson No (e.g. 2 of 5)|Isomo No (urugero 2 kuri 5)|Leçon N° (ex. 2 sur 5)
Duration (min)|Igihe (iminota)|Durée (min)
Class size|Umubare w'abanyeshuri|Effectif de la classe
Minutes for each step (leave empty to let the AI/app divide them).|Iminota ya buri gika (reka ubusa AI/porogaramu ikagabanye).|Minutes de chaque étape (laissez vide pour un partage automatique).
Introduction (min)|Intangiriro (iminota)|Introduction (min)
Development (min)|Iterambere (iminota)|Développement (min)
Conclusion (min)|Umusozo (iminota)|Conclusion (min)
Special Educational Needs (type and number of learners)|Ibyifuzo byihariye mu myigire (ubwoko n'umubare w'abanyeshuri)|Besoins éducatifs spéciaux (type et nombre d'apprenants)
SEN: how these learners will be accommodated|Uko abo banyeshuri bazafashwa|BES : comment ces apprenants seront accompagnés
Unit title|Umutwe|Titre de l'unité
Title of the lesson|Insanganyamatsiko y'isomo|Titre de la leçon
Instructional objective — leave empty and the AI will write it (condition, who, action, content, standard).|Intego y'isomo — reka ubusa AI ayandike (imimerere, uwo bireba, igikorwa, ibikubiyemo, igipimo).|Objectif pédagogique — laissez vide et l'IA le rédigera (condition, qui, action, contenu, critère).
1. Condition|1. Imimerere|1. Condition
3. Action (verb)|3. Igikorwa (inshinga)|3. Action (verbe)
4. Content|4. Ibikubiyemo|4. Contenu
5. Standard|5. Igipimo|5. Critère
Plan for this class|Aho isomo rizabera|Lieu de la classe
Learning materials (comma separated)|Ibikoresho by'isomo (utandukanyije n'akabago)|Matériel d'apprentissage (séparé par des virgules)
References|Ibitabo n'ibindi byifashishijwe|Références
✨ Leave Introduction / Development / Conclusion empty and the AI will write all teacher and learner activities for you. Anything you type yourself is kept.|✨ Reka Intangiriro / Iterambere / Umusozo ubusa AI aguhe ibikorwa by'umwarimu n'abanyeshuri. Icyo wanditse wewe kirabikwa.|✨ Laissez Introduction / Développement / Conclusion vides et l'IA rédigera les activités. Ce que vous tapez est conservé.
✨ Generate lesson plan|✨ Kora imbonerahamwe y'isomo|✨ Générer le plan de leçon
New blank plan|Imbonerahamwe nshya|Nouveau plan vierge
💾 Save plan|💾 Bika|💾 Enregistrer
🖨️ Print / Save PDF|🖨️ Sohora / Bika PDF|🖨️ Imprimer / Enregistrer en PDF
Top|Hejuru|Haut
Tip: tap any box in the plan to edit it, including the minutes.|Inama: kanda ahantu hose mu mbonerahamwe kugira ngo uhahindure, harimo n'iminota.|Astuce : touchez une case du plan pour la modifier, y compris les minutes.
➕ New chat|➕ Ikiganiro gishya|➕ Nouvelle discussion
🗑️ Delete history|🗑️ Siba amateka|🗑️ Supprimer l'historique
Your chats are saved on this device.|Ibiganiro byawe bibikwa kuri iki gikoresho.|Vos discussions sont enregistrées sur cet appareil.
Type your question…|Andika ikibazo cyawe…|Tapez votre question…
Send|Ohereza|Envoyer
Questions|Ibibazo|Questions
Difficulty|Ikomeye|Difficulté
Easy|Byoroshye|Facile
Medium|Hagati|Moyen
Hard|Bikomeye|Difficile
Type|Ubwoko|Type
Multiple Choice|Hitamo Igisubizo|Choix Multiple
Short Answer|Igisubizo Gike|Réponse Courte
Mixed|Cyavuyemo|Mixte
✨ Generate Assessment|✨ Kora Ikipimo|✨ Générer l'Évaluation
✨ Generate Methodology|✨ Kora Uburyo|✨ Générer la Méthodologie
Assessment|Ibipimo|Évaluation
Methodology|Uburyo|Méthodologie
📋 Copy|📋 Koporora|📋 Copier
My lesson plans|Imbonerahamwe z'amasomo yanjye|Mes plans de leçon
Plans are saved in this browser on this device.|Imbonerahamwe zibikwa muri iyi browser kuri iki gikoresho.|Les plans sont enregistrés dans ce navigateur sur cet appareil.
Language|Ururimi|Langue
Theme|Imiterere|Thème
🗑️ Delete all saved plans & chats|🗑️ Siba ibipimo byose n'ibiganiro|🗑️ Supprimer tous les plans et discussions
Made for teachers. Your saved plans stay on this device.|Byakozwe ku bw'abarimu. Imbonerahamwe wabitse zigumana kuri iki gikoresho.|Conçu pour les enseignants. Vos plans enregistrés restent sur cet appareil.
Open|Fungura|Ouvrir
Delete|Siba|Supprimer
No saved plans yet.|Nta mbonerahamwe irabikwa.|Aucun plan enregistré.
Generate your first plan, then press Save plan.|Kora imbonerahamwe yawe ya mbere, hanyuma ukande Bika.|Générez votre premier plan, puis appuyez sur Enregistrer.
Delete this plan?|Siba iyi mbonerahamwe?|Supprimer ce plan ?
Could not save in this browser.|Kubika muri iyi browser ntibyakunze.|Enregistrement impossible dans ce navigateur.
Note: the steps total {0} min but the lesson duration is {1} min.|Icyitonderwa: ibice byose bifite iminota {0} ariko isomo rimara iminota {1}.|Remarque : les étapes totalisent {0} min mais la durée de la leçon est de {1} min.
LESSON PLAN|IMBONERAHAMWE Y'ISOMO|PLAN DE LEÇON
School Name:|Izina ry'ishuri:|Nom de l'école :
Teacher's name:|Izina ry'umwarimu:|Nom de l'enseignant :
Term|Igihembwe|Trimestre
Date|Itariki|Date
Subject|Isomo|Matière
Class|Umwaka|Classe
Unit N°|Umutwe No|Unité N°
Lesson N°|Isomo No|Leçon N°
Duration / Class size|Igihe / Umubare w'abanyeshuri|Durée / Effectif
{0} min / {1} learners|iminota {0} / abanyeshuri {1}|{0} min / {1} apprenants
{0} min|iminota {0}|{0} min
Type of special educational needs to be catered for in this lesson and numbers of learners in each category|Ubwoko bw'ibyifuzo byihariye bizitabwaho muri iri somo n'umubare w'abanyeshuri muri buri cyiciro|Types de besoins éducatifs spéciaux pris en compte dans cette leçon et nombre d'apprenants par catégorie
Accommodation:|Uko bazafashwa:|Adaptation :
Unit title|Umutwe|Titre de l'unité
Key unit competence|Ubushobozi shingiro bw'umutwe|Compétence clé de l'unité
Title of the lesson|Insanganyamatsiko y'isomo|Titre de la leçon
Instructional objectives|Intego z'isomo|Objectifs pédagogiques
Plan of this class (location: in / outside)|Aho isomo rizabera (mu ishuri / hanze)|Lieu de la classe (à l'intérieur / à l'extérieur)
Learning materials (for all learners)|Ibikoresho by'isomo (ku banyeshuri bose)|Matériel d'apprentissage (pour tous les apprenants)
Timing for each step|Igihe cya buri gika|Durée de chaque étape
Description of teaching and learning activities|Ibisobanuro by'ibikorwa byo kwigisha no kwiga|Description des activités d'enseignement et d'apprentissage
Generic competence and cross-cutting issues to be addressed + a short explanation|Ubushobozi rusange n'ingingo zambukiranya amasomo zigomba kwitabwaho + ibisobanuro bigufi|Compétences génériques et thèmes transversaux à développer + une brève explication
Teacher's activity|Ibikorwa by'umwarimu|Activités de l'enseignant
Learner's activity|Ibikorwa by'umunyeshuri|Activités de l'apprenant
Introduction|Intangiriro|Introduction
Development|Iterambere|Développement
Conclusion|Umusozo|Conclusion
Teacher's self-evaluation|Isuzuma ry'umwarimu ku isomo|Auto-évaluation de l'enseignant
{0}, {1} will be able to {2} {3} {4}.|{0}, {1} bazashobora {2} {3} {4}.|{0}, {1} seront capables de {2} {3} {4}.
Techniques: {0}. Resources: {1}. Learners work in small groups. Location: {2}.|Uburyo: {0}. Ibikoresho: {1}. Abanyeshuri bakorera mu matsinda mato. Aho bizabera: {2}.|Techniques : {0}. Ressources : {1}. Les apprenants travaillent en petits groupes. Lieu : {2}.
group discussion, questions and answers, demonstration|ikiganiro mu matsinda, ibibazo n'ibisubizo, kwerekana|discussion en groupe, questions-réponses, démonstration
learners|abanyeshuri|les apprenants
the lesson|isomo|la leçon
Inside|Mu ishuri|À l'intérieur
Outside|Hanze|À l'extérieur
Copied!|Byakopiwe!|Copié !
Copy failed — please copy manually|Koporora byaranze — koporora wenyine|Échec de la copie — copiez manuellement
Please fill subject, class and topic|Uzuza isomo, icyiciro n'insanganyamatsiko|Veuillez remplir matière, classe et sujet
Failed: network error|Byaranze: ikosa ryo mu mubare|Échec : erreur réseau
Lesson plan generated|Umwanzuro w'isomo wakozwe|Plan de leçon généré
Assessment generated|Ikipimo cyakozwe|Évaluation générée
Methodology generated|Uburyo bwakozwe|Méthodologie générée
⏳ Generating…|⏳ Birimo gukorwa…|⏳ Génération…
⚠️ Sorry, I could not reach the server. Please try again.|⚠️ Nyamuneka ntago nshobora kugera kuri seriveri. Ongera ugerageze.|⚠️ Désolé, impossible de joindre le serveur. Réessayez.
Hello! I'm your GHAD AI assistant. How can I help with your lesson today?|Muraho! Ndi umufasha wawe wa GHAD AI. Nabafasha iki ku isomo ryanyu uyu munsi?|Bonjour ! Je suis votre assistant GHAD AI. Comment puis-je aider votre leçon aujourd'hui ?
New chat started.|Ikiganiro gishya gitangiye.|Nouvelle discussion commencée.
Chat history deleted.|Amateka y'ibiganiro yasibwe.|Historique supprimé.
All saved data deleted.|Amakuru yose yabitswe yasibwe.|Toutes les données supprimées.
Delete all saved plans and chats?|Siba ibipimo byose n'ibiganiro byabitswe ?|Supprimer tous les plans et discussions enregistrés ?
The AI is writing your lesson plan…|AI irandika umwanzuro w'isomo ryawe…|L'IA rédige votre plan de leçon…`.split('\n').forEach(l => {
  const p = l.split('|');
  if (p.length === 3) { const f = (x) => x.trim().replace(/\\n/g, '\n'); D[f(p[0])] = [f(p[1]), f(p[2])]; }
});
const t = (s, ...a) => {
  let r = s; const x = D[s];
  if (LG !== 'en' && x && x[IX[LG]]) r = x[IX[LG]];
  return r.replace(/\{(\d)\}/g, (m, k) => a[k] === undefined ? '' : a[k]);
};

/* ================= i18n apply (static UI) ================= */
function applyLang() {
  document.documentElement.lang = LG;
  $$('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (el.__o === undefined) el.__o = el.textContent;
    if (D[el.__o]) el.textContent = LG === 'en' ? el.__o : t(el.__o);
    else el.textContent = el.__o;
  });
  $$('[data-i18n-ph]').forEach((el) => {
    if (el.__p === undefined) el.__p = el.placeholder;
    el.placeholder = LG === 'en' ? el.__p : (D[el.__p] ? t(el.__p) : el.__p);
  });
}

/* ================= Toasts ================= */
function toast(msg, type) {
  const c = $('toastContainer'); if (!c) return;
  const el = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  el.textContent = msg; c.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 350); }, 3000);
}

/* ================= Lang / Theme ================= */
function setLang(v) {
  LG = ['en', 'rw', 'fr'].includes(v) ? v : 'en';
  try { localStorage.setItem('ghad_lang', LG); } catch (_) {}
  ['lang', 'langWs', 'langSet'].forEach((id) => { const s = $(id); if (s) s.value = LG; });
  applyLang(); renderLib(); renderChat();
}
function setTheme(v) {
  try { localStorage.setItem('ghad_theme', v); } catch (_) {}
  if (v === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', v);
  ['theme', 'themeSet'].forEach((id) => { const s = $(id); if (s) s.value = v; });
}
['lang', 'langWs', 'langSet'].forEach((id) => safe($(id), (el) => el.addEventListener('change', () => setLang(el.value))));
['theme', 'themeSet'].forEach((id) => safe($(id), (el) => el.addEventListener('change', () => setTheme(el.value))));

/* ================= Views ================= */
const VIEWS = ['lesson', 'assistant', 'assessment', 'methodology', 'library', 'settings'];
function openWorkspace(v) {
  const l = $('landingPage'), w = $('workspaceApp');
  if (l) l.style.display = 'none';
  if (w) { w.hidden = false; w.style.display = 'block'; }
  showView(v || 'lesson');
}
function goHome() {
  const l = $('landingPage'), w = $('workspaceApp');
  if (w) w.hidden = true;
  if (l) { l.style.display = 'block'; window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
function showView(name) {
  if (!VIEWS.includes(name)) name = 'lesson';
  $$('.view').forEach((v) => v.classList.toggle('active', v.id === 'view-' + name));
  $$('.tab').forEach((b) => b.classList.toggle('active', b.dataset.view === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
$$('[data-launch]').forEach((el) => el.addEventListener('click', () => openWorkspace(el.getAttribute('data-launch'))));
$$('.tab[data-view]').forEach((el) => el.addEventListener('click', () => showView(el.getAttribute('data-view'))));
safe($('backToHomeBtn'), (el) => el.addEventListener('click', goHome));
safe($('menuToggle'), (el) => el.addEventListener('click', () => {
  const tabs = $('tabs'); if (tabs) tabs.scrollIntoView({ behavior: 'smooth' });
}));

/* ================= 3D tilt ================= */
if (!window.matchMedia('(hover: none)').matches) {
  $$('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (ev) => {
      const r = card.getBoundingClientRect(); if (!r.width) return;
      const px = (ev.clientX - r.left) / r.width - .5, py = (ev.clientY - r.top) / r.height - .5;
      card.style.transform = 'perspective(900px) rotateY(' + (px * 8).toFixed(2) + 'deg) rotateX(' + (-py * 8).toFixed(2) + 'deg) translateZ(6px)';
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

/* ================= Copy ================= */
function copyText(text) {
  const done = () => toast(t('Copied!'), 'success');
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done).catch(() => fbCopy(text, done));
  else fbCopy(text, done);
}
function fbCopy(text, done) {
  try {
    const ta = document.createElement('textarea'); ta.value = text;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); done();
  } catch (_) { toast(t('Copy failed — please copy manually'), 'error'); }
}

/* ================= API ================= */
async function postJSON(url, payload) {
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  if (!res.ok) throw new Error('Server error (' + res.status + ')');
  const data = await res.json();
  if (typeof data === 'string') return data;
  return data.output || data.result || data.text || data.message || data.content || data.lesson || data.assessment || data.methodology || data.reply || data.answer || JSON.stringify(data, null, 2);
}

/* ================= Subject helpers (from your pasted code) ================= */
const PRE = { 'English': 'role play, pair work, songs and games, questions and answers', 'Kinyarwanda': 'role play, pair work, storytelling, questions and answers', 'Kiswahili': 'role play, pair work, songs, questions and answers', 'French': 'role play, pair work, songs, questions and answers', 'Mathematics': 'problem solving, demonstration, group work, questions and answers', 'Science and Elementary Technology': 'observation, practical work, group work, questions and answers', 'Creative Arts': 'observation, practical work, group work, questions and answers', 'Physical Education': 'observation, practical work, group work, questions and answers', 'Religious Education': 'storytelling, group discussion, questions and answers' };
const DEF_TECH = 'group discussion, questions and answers, demonstration';
const subjRaw = () => $('subject').value === 'Other' ? ($('subjo').value || 'Other') : $('subject').value;
const subjT = () => t(subjRaw());
safe($('subject'), (el) => el.addEventListener('change', () => { $('subjo').style.display = el.value === 'Other' ? 'block' : 'none'; }));
const cat = () => { const v = $('subject').value; return v === 'Mathematics' ? 'm' : ['English', 'Kinyarwanda', 'Kiswahili', 'French'].includes(v) ? 'l' : ['Science and Elementary Technology', 'Creative Arts', 'Physical Education'].includes(v) ? 's' : 'g'; };

function sp(tot, w) { const r = []; let u = 0; const sw = w.reduce((x, y) => x + y, 0); w.forEach((x, k) => { const m = k === w.length - 1 ? tot - u : Math.max(1, Math.round(tot * x / sw)); r.push(m); u += m; }); return r; }
const L = (arr, m) => arr.map((x, k) => (m && m[k] ? t('{0} min', m[k]) + '\n' : '') + (k + 1) + '. ' + x).join('\n');

/* ================= AI prompt & parser ================= */
const MARKERS = ['OBJECTIVE', 'KUC', 'INTRO_TEACHER', 'INTRO_LEARNERS', 'DEV_TEACHER', 'DEV_LEARNERS', 'ASSESSMENT', 'SUMMARY', 'ASSIGNMENT', 'GENERIC_INTRO', 'GENERIC_DEV', 'GENERIC_CONCL', 'TECHNIQUES'];
function parseAI(text) {
  const out = {};
  MARKERS.forEach((m) => { out[m] = ''; });
  const re = /\[([A-Z_]+)\]/g; let m; const found = [];
  while ((m = re.exec(text)) !== null) found.push({ key: m[1], idx: m.index, end: m.index + m[0].length });
  found.forEach((f, i) => {
    if (MARKERS.includes(f.key)) {
      const next = found[i + 1] ? found[i + 1].idx : text.length;
      out[f.key] = text.slice(f.end, next).trim();
    }
  });
  return out;
}
function buildCBCPrompt(f) {
  return [
    'You are an expert Rwandan CBC teacher-trainer. Write everything in ' + (LG === 'rw' ? 'Kinyarwanda' : LG === 'fr' ? 'French' : 'English') + '.',
    'A teacher needs a complete competence-based lesson plan in the official REB (elearning.reb.rw) format.',
    'Lesson data: Subject: ' + f.subject + '; Class: ' + f.cls + '; Unit No: ' + (f.unit || 'N/A') + '; Unit title: ' + (f.utitle || f.topic) + '; Lesson title: ' + (f.ltitle || f.topic) + '; Duration: ' + f.dur + ' minutes; Class size: ' + (f.size || 'N/A') + '; SEN: ' + (f.sen || 'none') + '; Materials: ' + (f.mat || 'standard materials') + '; Location: ' + f.loc + '.',
    (f.kuc ? 'Key unit competence (use this): ' + f.kuc : ''),
    (f.objective ? 'Instructional objective (use this): ' + f.objective : ''),
    'Write the plan using EXACTLY these section markers, each on its own line, with content after it. Use numbered lines "1. ..." inside activity sections.',
    '[KUC] key unit competence sentence (skip if given above)',
    '[OBJECTIVE] instructional objective: "Given ..., learners will be able to ... by ..." (condition, who, action, content, standard)',
    '[INTRO_TEACHER] 3 numbered teacher activities for the introduction (start each with "To ..."): greet/check attendance, review previous lesson, introduce the topic and objective',
    '[INTRO_LEARNERS] 3 matching numbered learner activities (say if individual, in pairs, in groups or whole class)',
    '[DEV_TEACHER] 4 numbered teacher activities for development, using CBC learner-centred techniques suitable for ' + f.subject + ' (present materials and guiding questions, organise group work, move around and support learners with special needs, invite presentations and summarise)',
    '[DEV_LEARNERS] 4 matching numbered learner activities',
    '[ASSESSMENT] 2-3 short individual assessment test items related to the objective, one per line',
    '[SUMMARY] key points to write on the board',
    '[ASSIGNMENT] a suitable homework task',
    '[GENERIC_INTRO] generic competences + cross-cutting issues for the introduction, 1-2 lines',
    '[GENERIC_DEV] generic competences + cross-cutting issues for development (cooperation, critical thinking, inclusive education, gender equality...), 2-3 lines',
    '[GENERIC_CONCL] generic competences + cross-cutting issues for the conclusion, 1-2 lines',
    '[TECHNIQUES] teaching techniques and methods used, comma separated',
    'Be professional, realistic and ready to submit. No extra commentary outside the markers.'
  ].filter(Boolean).join('\n');
}

/* ================= Build the REB plan table ================= */
function buildPlan(f, ai) {
  const dur = +f.dur || 40;
  let mv = [+f.min1 || 0, +f.min2 || 0, +f.min3 || 0];
  const W = [15, 70, 15];
  const fx = mv.reduce((x, y) => x + y, 0);
  const fr = [0, 1, 2].filter((k) => !mv[k]);
  if (fr.length) { const rs = sp(Math.max(fr.length, dur - fx), fr.map((k) => W[k])); fr.forEach((k, j) => mv[k] = rs[j]); }
  const [i, d, a] = mv;

  const lines = (s) => (s || '').split('\n').map((x) => x.trim()).filter(Boolean).map((x) => x.replace(/^\d+[.)]\s*/, ''));
  const iT = lines(ai.INTRO_TEACHER), iL = lines(ai.INTRO_LEARNERS);
  const dT = lines(ai.DEV_TEACHER), dL = lines(ai.DEV_LEARNERS);
  const intro = iT.length ? L(iT) : '1. To greet learners and check attendance.\n2. To ask review questions linked to the previous lesson (whole class).\n3. To introduce the topic "' + (f.ltitle || f.topic) + '" and state the objective.';
  const introL = iL.length ? L(iL) : '1. To greet the teacher.\n2. To answer review questions (whole class).\n3. To listen and ask questions about the new topic.';
  const dev = dT.length ? L(dT) : '1. To present the learning materials and ask guiding questions.\n2. To organise learners in small groups and give clear instructions.\n3. To move around, guide learners and support those with special needs.\n4. To invite learners to present findings, correct them and summarise.';
  const devL = dL.length ? L(dL) : '1. To observe the materials and answer the questions (whole class).\n2. To form groups and listen to instructions.\n3. To carry out the task in small groups.\n4. To present findings, ask questions and copy the summary.';
  const assessment = ai.ASSESSMENT || '1. Short individual written task based on the objective.\n2. Oral questions to check understanding.';
  const summary = ai.SUMMARY || ('Key points about "' + (f.ltitle || f.topic) + '".');
  const assignment = ai.ASSIGNMENT || 'Exercise related to the lesson in the pupils\' book.';
  const gi = ai.GENERIC_INTRO || 'Communication: learners express ideas when answering review questions.';
  const gd = ai.GENERIC_DEV || 'Cooperation, critical thinking and inclusive education: every learner, including those with SEN, participates in group work.';
  const ga = ai.GENERIC_CONCL || 'Critical thinking: learners apply what they learned.\nCross-cutting: inclusive education (feedback to every learner).';
  const tech = ai.TECHNIQUES || PRE[f.subject] || DEF_TECH;
  const obj = ai.OBJECTIVE || (f.objective || '');
  const kuc = ai.KUC || f.kuc || '';
  const sum = t('Techniques: {0}. Resources: {1}. Learners work in small groups. Location: {2}.', tech, f.mat || t('the lesson'), f.loc);
  const sen = e(f.sen || DOT) + (f.senacc ? '\n' + t('Accommodation:') + ' ' + e(f.senacc) : '');
  const d0 = f.date ? f.date.split('-').reverse().join('/') : '....../....../20......';
  const fill = (v) => v ? e(v) : '<span class="dot">' + DOT + '</span>';
  const edf = (v) => ed(v ? e(v) : '<span class="dot">' + DOT + '</span>');

  $('plan').innerHTML =
    '<tr><td colspan="7" style="text-align:center"><b>' + t('LESSON PLAN') + '</b></td></tr>' +
    '<tr><td colspan="7"><b>' + t('School Name:') + '</b> ' + edf(f.school) + ' &nbsp; <b>' + t("Teacher's name:") + '</b> ' + edf(f.teacher) + '</td></tr>' +
    '<tr><th>' + t('Term') + '</th><th>' + t('Date') + '</th><th>' + t('Subject') + '</th><th>' + t('Class') + '</th><th>' + t('Unit N°') + '</th><th>' + t('Lesson N°') + '</th><th>' + t('Duration / Class size') + '</th></tr>' +
    '<tr><td>' + fill(f.term) + '</td><td>' + d0 + '</td><td>' + fill(subjT()) + '</td><td>' + fill(f.cls) + '</td><td>' + fill(f.unit) + '</td><td>' + fill(f.lesson) + '</td><td>' + t('{0} min / {1} learners', dur, f.size || DOT) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('Type of special educational needs to be catered for in this lesson and numbers of learners in each category') + '</td><td colspan="5">' + ed(sen) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('Unit title') + '</td><td colspan="5">' + edf(f.utitle) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('Key unit competence') + '</td><td colspan="5">' + edf(kuc) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('Title of the lesson') + '</td><td colspan="5">' + edf(f.ltitle || f.topic) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('Instructional objectives') + '</td><td colspan="5">' + edf(obj) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('Plan of this class (location: in / outside)') + '</td><td colspan="5">' + ed(f.loc) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('Learning materials (for all learners)') + '</td><td colspan="5">' + edf(f.mat) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('References') + '</td><td colspan="5">' + edf(f.ref) + '</td></tr>' +
    '<tr><th rowspan="3">' + t('Timing for each step') + '</th><th colspan="4" style="text-align:center">' + t('Description of teaching and learning activities') + '</th><th colspan="2" rowspan="3">' + t('Generic competence and cross-cutting issues to be addressed + a short explanation') + '</th></tr>' +
    '<tr><td colspan="4">' + ed(sum) + '</td></tr>' +
    '<tr><th colspan="2">' + t("Teacher's activity") + '</th><th colspan="2">' + t("Learner's activity") + '</th></tr>' +
    '<tr><td class="lb">' + t('Introduction') + '<br><span contenteditable="true">' + t('{0} min', i) + '</span></td><td colspan="2">' + ed(intro) + '</td><td colspan="2">' + ed(introL) + '</td><td colspan="2">' + ed(gi) + '</td></tr>' +
    '<tr><td class="lb">' + t('Development') + '<br><span contenteditable="true">' + t('{0} min', d) + '</span></td><td colspan="2">' + ed(dev) + '</td><td colspan="2">' + ed(devL) + '</td><td colspan="2">' + ed(gd) + '</td></tr>' +
    '<tr><td class="lb">' + t('Conclusion') + '<br><span contenteditable="true">' + t('{0} min', a) + '</span></td><td colspan="2">' + ed(assessment + '\n\nSummary: ' + summary + '\n\nAssignment: ' + assignment) + '</td><td colspan="2">' + ed('1. To answer the questions or do the task individually and correct their work.\n2. To name the key points together, read them aloud and copy them.\n3. To write down the assignment and do the exercise at home.') + '</td><td colspan="2">' + ed(ga) + '</td></tr>' +
    '<tr><td class="lb">' + t("Teacher's self-evaluation") + '</td><td colspan="6">' + ed('') + '<br><br></td></tr>';

  $('tot').textContent = (i + d + a) === dur ? '' : t('Note: the steps total {0} min but the lesson duration is {1} min.', i + d + a, dur);
  $('out').style.display = 'block';
  $('out').scrollIntoView({ behavior: 'smooth' });
}

/* ================= Saved plans library ================= */
const K = 'ghad_plans'; let cur = null;
const fields = () => Array.from(document.querySelectorAll('#form input,#form textarea,#form select'));
function getAll() { try { return JSON.parse(localStorage.getItem(K) || '[]'); } catch (_) { return []; } }
function putAll(a) { try { localStorage.setItem(K, JSON.stringify(a)); return true; } catch (_) { return false; } }
function savePlan() {
  const all = getAll(), f = {}; fields().forEach((x) => { f[x.id] = x.value; });
  const r = { id: cur || String(Date.now()), title: $('ltitle').value || '-', subject: subjRaw(), cls: $('cls').value || '-', upd: new Date().toLocaleDateString(), f, plan: $('plan').innerHTML };
  const k = all.findIndex((p) => p.id === r.id); if (k >= 0) all[k] = r; else all.unshift(r); cur = r.id;
  if (!putAll(all)) toast(t('Could not save in this browser.'), 'error'); else toast(t('💾 Save plan') + ' ✓', 'success');
  renderLib();
}
function loadPlan(id) {
  const p = getAll().find((x) => x.id === id); if (!p) return;
  fields().forEach((x) => { if (p.f[x.id] !== undefined) x.value = p.f[x.id]; });
  if ($('subject').value === 'Other') $('subjo').style.display = 'block';
  $('plan').innerHTML = p.plan; $('out').style.display = 'block'; cur = p.id;
  showView('lesson'); $('out').scrollIntoView({ behavior: 'smooth' });
}
function delPlan(id) {
  if (!confirm(t('Delete this plan?'))) return;
  putAll(getAll().filter((x) => x.id !== id)); if (cur === id) cur = null; renderLib();
}
function renderLib() {
  const lib = $('lib'); if (!lib) return;
  const a = getAll();
  lib.innerHTML = a.length ? a.map((p) =>
    '<div class="row"><div><b>' + e(p.title) + '</b><br><span class="mut">' + e(p.subject) + ' · ' + e(p.cls) + ' · ' + e(p.upd) + '</span></div><div><button class="o sm" data-open="' + p.id + '">' + t('Open') + '</button><button class="o sm danger" data-del="' + p.id + '">' + t('Delete') + '</button></div></div>'
  ).join('') : '<div class="empty">📝<br>' + t('No saved plans yet.') + '<br>' + t('Generate your first plan, then press Save plan.') + '</div>';
  lib.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => loadPlan(b.dataset.open)));
  lib.querySelectorAll('[data-del]').forEach((b) => b.addEventListener('click', () => delPlan(b.dataset.del)));
}

/* ================= AI lesson generation ================= */
const busy = (btn, on) => { if (!btn) return; if (on) { btn.dataset.o = btn.textContent; btn.textContent = t('⏳ Generating…'); btn.disabled = true; } else { btn.textContent = btn.dataset.o || btn.textContent; btn.disabled = false; } };
function collectForm() {
  return {
    school: $('school').value, teacher: $('teacher').value, term: $('term').value, date: $('date').value,
    subject: $('subject').value, cls: $('cls').value, unit: $('unit').value, lesson: $('lesson').value,
    dur: $('dur').value, size: $('size').value, min1: $('min1').value, min2: $('min2').value, min3: $('min3').value,
    sen: $('sen').value, senacc: $('senacc').value, utitle: $('utitle').value, ltitle: $('ltitle').value,
    o1: $('o1').value, o3: $('o3').value, o4: $('o4').value, o5: $('o5').value,
    loc: $('loc').value, mat: $('mat').value, ref: $('ref').value
  };
}
function formObjective(f) {
  const parts = [f.o1, 'learners', f.o3, f.o4, f.o5];
  if (!f.o1 && !f.o3) return '';
  return t('{0}, {1} will be able to {2} {3} {4}.', f.o1 || '', 'learners', f.o3 || '', f.o4 || '', f.o5 || '').replace(/^, /, '');
}
safe($('genBtn'), (btn) => btn.addEventListener('click', async () => {
  const f = collectForm();
  if (!f.subject || !f.cls || !f.ltitle) { toast(t('Please fill subject, class and topic'), 'error'); return; }
  f.topic = f.ltitle; f.kuc = ''; f.objective = formObjective(f);
  busy(btn, true);
  toast(t('The AI is writing your lesson plan…'));
  try {
    const raw = await postJSON('/api/lesson', {
      language: LG, type: 'lesson_plan_reb', form: f, prompt: buildCBCPrompt(f)
    });
    const ai = parseAI(raw);
    buildPlan(f, ai);
    toast(t('Lesson plan generated'), 'success');
  } catch (err) {
    // offline fallback: still build a professional plan from the form
    buildPlan(f, parseAI(''));
    toast((t('Failed: network error')) + (err && err.message ? ' — ' + err.message : '') + ' (default plan used)', 'error');
  } finally { busy(btn, false); }
}));
safe($('saveBtn'), (el) => el.addEventListener('click', savePlan));
safe($('printBtn'), (el) => el.addEventListener('click', () => window.print()));
safe($('topBtn'), (el) => el.addEventListener('click', () => $('out').scrollIntoView({ behavior: 'smooth' })));
safe($('newBtn'), (el) => el.addEventListener('click', () => {
  cur = null;
  ['date', 'unit', 'lesson', 'sen', 'senacc', 'utitle', 'ltitle', 'o1', 'o3', 'o4', 'o5', 'mat', 'ref', 'min1', 'min2', 'min3'].forEach((k) => { const el = $(k); if (el) el.value = ''; });
  $('out').style.display = 'none'; window.scrollTo({ top: 0, behavior: 'smooth' });
}));

/* ================= AI CHAT with history ================= */
const CK = 'ghad_chats'; let chatId = null;
function getChats() { try { return JSON.parse(localStorage.getItem(CK) || '[]'); } catch (_) { return []; } }
function putChats(a) { try { localStorage.setItem(CK, JSON.stringify(a)); } catch (_) {} }
function currentChat() {
  const all = getChats(); let c = all.find((x) => x.id === chatId);
  if (!c) { c = { id: String(Date.now()), msgs: [] }; all.unshift(c); putChats(all); chatId = c.id; }
  return c;
}
function renderChat() {
  const box = $('chatMessages'); if (!box) return;
  const c = currentChat();
  box.innerHTML = '';
  if (!c.msgs.length) {
    const div = document.createElement('div');
    div.className = 'chat-msg bot';
    div.textContent = t("Hello! I'm your GHAD AI assistant. How can I help with your lesson today?");
    box.appendChild(div); return;
  }
  c.msgs.forEach((m) => {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + (m.role === 'user' ? 'user' : 'bot');
    div.textContent = m.text; box.appendChild(div);
  });
  box.scrollTop = box.scrollHeight;
}
async function sendChat() {
  const input = $('chatInput'), btn = $('sendChat');
  if (!input) return;
  const text = (input.value || '').trim(); if (!text) return;
  const c = currentChat();
  c.msgs.push({ role: 'user', text }); putChats(getChats()); renderChat();
  input.value = ''; if (btn) btn.disabled = true;
  try {
    const reply = await postJSON('/api/assistant', { language: LG, message: text, history: c.msgs.slice(-10) });
    c.msgs.push({ role: 'bot', text: reply });
  } catch (_) {
    c.msgs.push({ role: 'bot', text: t('⚠️ Sorry, I could not reach the server. Please try again.') });
  } finally {
    putChats(getChats()); renderChat();
    if (btn) btn.disabled = false; input.focus();
  }
}
safe($('sendChat'), (btn) => btn.addEventListener('click', sendChat));
safe($('chatInput'), (el) => el.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); sendChat(); } }));
safe($('newChatBtn'), (btn) => btn.addEventListener('click', () => { chatId = null; currentChat(); renderChat(); toast(t('New chat started.'), 'success'); }));
safe($('delChatBtn'), (btn) => btn.addEventListener('click', () => {
  if (!confirm(t('Delete this plan?').replace('plan', 'chat history'))) { /* still confirm */ }
  try { localStorage.removeItem(CK); } catch (_) {}
  chatId = null; renderChat(); toast(t('Chat history deleted.'), 'success');
}));

/* ================= Assessment & Methodology (AI) ================= */
function mdToText(s) { return String(s); }
safe($('generateAssessment'), (btn) => btn.addEventListener('click', async () => {
  const v = (id) => { const el = $(id); return el ? el.value : ''; };
  const p = { language: LG, subject: v('assessSubject'), class: v('assessClass'), topic: v('assessTopic'), count: v('assessCount') || '5', difficulty: v('assessDifficulty') || 'medium', type: v('assessType') || 'mcq' };
  if (!p.subject || !p.class || !p.topic) { toast(t('Please fill subject, class and topic'), 'error'); return; }
  busy(btn, true);
  try {
    const text = await postJSON('/api/assessment', p);
    const out = $('assessmentOutput'), body = $('assessmentBody');
    if (out && body) { body.textContent = mdToText(text); out.classList.remove('hidden'); out.dataset.raw = text; }
    toast(t('Assessment generated'), 'success');
  } catch (err) { toast(t('Failed: network error'), 'error'); } finally { busy(btn, false); }
}));
safe($('copyAssessment'), (btn) => btn.addEventListener('click', () => { const o = $('assessmentOutput'); if (o && o.dataset.raw) copyText(o.dataset.raw); }));
safe($('generateMethodology'), (btn) => btn.addEventListener('click', async () => {
  const v = (id) => { const el = $(id); return el ? el.value : ''; };
  const p = { language: LG, subject: v('methodSubject'), class: v('methodClass'), topic: v('methodTopic') };
  if (!p.subject || !p.class || !p.topic) { toast(t('Please fill subject, class and topic'), 'error'); return; }
  busy(btn, true);
  try {
    const text = await postJSON('/api/methodology', p);
    const out = $('methodologyOutput'), body = $('methodologyBody');
    if (out && body) { body.textContent = mdToText(text); out.classList.remove('hidden'); out.dataset.raw = text; }
    toast(t('Methodology generated'), 'success');
  } catch (err) { toast(t('Failed: network error'), 'error'); } finally { busy(btn, false); }
}));
safe($('copyMethodology'), (btn) => btn.addEventListener('click', () => { const o = $('methodologyOutput'); if (o && o.dataset.raw) copyText(o.dataset.raw); }));

/* ================= Settings: clear all ================= */
safe($('clearAllBtn'), (btn) => btn.addEventListener('click', () => {
  if (!confirm(t('Delete all saved plans and chats?'))) return;
  try { localStorage.removeItem(K); localStorage.removeItem(CK); localStorage.removeItem('ghad_prof'); } catch (_) {}
  cur = null; chatId = null; renderLib(); renderChat(); toast(t('All saved data deleted.'), 'success');
}));

/* ================= Teacher profile memory ================= */
const PK = 'ghad_prof';
try { const p = JSON.parse(localStorage.getItem(PK) || '{}'); ['school', 'teacher'].forEach((k) => { if (p[k] && $(k)) $(k).value = p[k]; }); } catch (_) {}
['school', 'teacher'].forEach((k) => safe($(k), (el) => el.addEventListener('input', () => {
  try { localStorage.setItem(PK, JSON.stringify({ school: $('school').value, teacher: $('teacher').value })); } catch (_) {}
})));

/* ================= Init ================= */
try {
  const th = localStorage.getItem('ghad_theme') || 'auto'; setTheme(th);
} catch (_) { setTheme('auto'); }
setLang(LG);
renderLib();
try { const all = getChats(); if (all.length) chatId = all[0].id; } catch (_) {}
renderChat();
});
