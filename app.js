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
String.raw`Competence-Based Curriculum · REB format|Integanyanyigisho ishingiye ku bushobozi · Uburyo bwa REB|Curriculum par compétences · Format REB
✦ Official REB CBC format · 3 languages|✦ Uburyo bwa REB CBC · Indimi eshatu|✦ Format officiel REB CBC · 3 langues
Plan your lesson in minutes|Tegura isomo ryawe mu minota mike|Préparez votre leçon en quelques minutes
with the power of AI|ufite imbarutso ya AI|avec la puissance de l'IA
Fill in a few details — subject, class and topic — and the AI writes your complete competence-based lesson plan, ready to edit, save and print.|Uzuza amakuru make — isomo, icyiciro n'insanganyamatsiko — AI ikandika umwanzuro wawe wuzuye w'isomo, witeguye guhindurwa, kubikwa no gusohora.|Remplissez quelques détails — matière, classe et sujet — et l'IA rédige votre plan de leçon complet, prêt à modifier, enregistrer et imprimer.
1 · Fill in a few lesson details|1 · Uzuza amakuru make y'isomo|1 · Remplissez quelques détails
2 · Press Generate — the AI writes everything|2 · Kanda Kora — AI yandika byose|2 · Appuyez sur Générer — l'IA rédige tout
3 · Edit, save and print|3 · Hindura, bika kandi usohore|3 · Modifiez, enregistrez et imprimez
✨ Start a lesson plan|✨ Tangira gutegura isomo|✨ Commencer un plan de leçon
💬 Ask the AI assistant|💬 Baza umufasha wa AI|💬 Demander à l'assistant IA
Languages|Indimi|Langues
All Levels|Amashuri yose|Tous niveaux
Free for teachers|Ku bwarimu ni ubuntu|Gratuit pour les enseignants
Lesson Planner|Umugenga w'Isomo|Planificateur de leçons
AI Assistant|Umufasha wa AI|Assistant IA
Assessment|Ibipimo|Évaluation
Methodology|Uburyo|Méthodologie
My Plans|Ibipimo byanjye|Mes plans
Settings|Igenamiterere|Paramètres
AI writes the full REB CBC plan table.|AI yandika imbonerahamwe yuzuye ya REB CBC.|L'IA rédige le tableau REB CBC complet.
Ask anything, with saved chat history.|Baza icyo aricyo cyose, ibiganiro bibikwa.|Posez vos questions, l'historique est enregistré.
Generate quizzes and test items.|Kora ibibazo by'ibipimo.|Générez des quiz et des questions.
Learner-centred teaching strategies.|Uburyo bw'igishirwa ku banyeshuri.|Stratégies centrées sur l'apprenant.
Open →|Fungura →|Ouvrir →
Built for Rwandan schools|Byakorewe amashuri y'u Rwanda|Conçu pour les écoles rwandaises
Official REB CBC format|Uburyo nyarwanda wa REB CBC|Format officiel REB CBC
3 languages, one click|Indimi eshatu, kanda rimwe|3 langues, un clic
Your data stays yours|Amakuru yawe aguma ari yawe|Vos données restent les vôtres
Made for teachers. Your saved plans stay on this device.|Byakozwe ku bw'abarimu. Imbonerahamwe wabitse zigumana kuri iki gikoresho.|Conçu pour les enseignants. Vos plans enregistrés restent sur cet appareil.
← Home|← Ahabanza|← Accueil
✏️ Just a few things — the AI completes the rest|✏️ Ibintu bike gusa — AI irarangiza|✏️ Quelques éléments — l'IA complète le reste
Optional — leave empty and the AI fills it in|Ibyihariye — reka ubusa AI abikwize|Optionnel — laissez vide, l'IA le remplira
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
Unit title|Umutwe|Titre de l'unité
Title of the lesson (or unit topic)|Insanganyamatsiko y'isomo (cyangwa umutwe)|Titre de la leçon (ou sujet)
Special Educational Needs (type and number of learners)|Ibyifuzo byihariye mu myigire (ubwoko n'umubare w'abanyeshuri)|Besoins éducatifs spéciaux (type et nombre d'apprenants)
Learning materials (comma separated)|Ibikoresho by'isomo (utandukanyije n'akabago)|Matériel d'apprentissage (séparé par des virgules)
Extra instructions for the AI (optional)|Amabwiriza ayongera kuri AI (bitari ngombwa)|Instructions supplémentaires pour l'IA (optionnel)
Type subject|Andika isomo|Saisir la matière
✨ Generate lesson plan|✨ Kora imbonerahamwe y'isomo|✨ Générer le plan de leçon
New blank plan|Imbonerahamwe nshya|Nouveau plan vierge
Lesson plan|Umwanzuro w'isomo|Plan de leçon
💾 Save plan|💾 Bika|💾 Enregistrer
🖨️ Print / Save PDF|🖨️ Sohora / Bika PDF|🖨️ Imprimer / Enregistrer en PDF
Top|Hejuru|Haut
Tip: tap any box in the plan to edit it. Dotted spaces are for you to fill in (school, teacher, date…).|Inama: kanda ahantu hose mu mbonerahamwe kuhindura. Aho toherejwe n'ibyuzamo (ishuri, umwarimu, itariki…).|Astuce : touchez une case pour la modifier. Les pointillés sont à remplir (école, enseignant, date…).
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
References|Ibitabo n'ibindi byifashishijwe|Références
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
Delete chat history?|Siba amateka y'ibiganiro ?|Supprimer l'historique des discussions ?
Plan saved.|Umwanzuro wabitswe.|Plan enregistré.
The AI is writing your lesson plan…|AI irandika umwanzuro w'isomo ryawe…|L'IA rédige votre plan de leçon…
Plan generated with default content (AI unreachable).|Umwanzuro wakozwe n'ibikubiyemo bisanzwe (AI ntiyagera).|Plan généré avec le contenu par défaut (IA inaccessible).
Pupil's Book, teacher's guide, REB syllabus|Igitabo cy'umunyeshuri, igitabo cy'umwarimu, integanyanyigisho ya REB|Livre de l'élève, guide de l'enseignant, programme REB`.split('\n').forEach((l) => {
  const p = l.split('|');
  if (p.length === 3) { const f = (x) => x.trim().replace(/\\n/g, '\n'); D[f(p[0])] = [f(p[1]), f(p[2])]; }
});
const t = (s, ...a) => {
  let r = s; const x = D[s];
  if (LG !== 'en' && x && x[IX[LG]]) r = x[IX[LG]];
  return r.replace(/\{(\d)\}/g, (m, k) => a[k] === undefined ? '' : a[k]);
};

/* ================= i18n apply (data-i18n holds the EN key) ================= */
function applyLang() {
  document.documentElement.lang = LG;
  $$('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = LG === 'en' ? key : (D[key] ? t(key) : key);
  });
  $$('[data-i18n-ph]').forEach((el) => {
    const key = el.getAttribute('data-i18n-ph');
    el.placeholder = LG === 'en' ? key : (D[key] ? t(key) : key);
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

/* ================= API (connect your AI here) ================= */
async function postJSON(url, payload) {
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  if (!res.ok) throw new Error('Server error (' + res.status + ')');
  const data = await res.json();
  if (typeof data === 'string') return data;
  return data.output || data.result || data.text || data.message || data.content || data.reply || data.answer || JSON.stringify(data, null, 2);
}

/* ================= Subject helpers ================= */
const PRE = { 'English': 'role play, pair work, songs and games, questions and answers', 'Kinyarwanda': 'role play, pair work, storytelling, questions and answers', 'Kiswahili': 'role play, pair work, songs, questions and answers', 'French': 'role play, pair work, songs, questions and answers', 'Mathematics': 'problem solving, demonstration, group work, questions and answers', 'Science and Elementary Technology': 'observation, practical work, group work, questions and answers', 'Creative Arts': 'observation, practical work, group work, questions and answers', 'Physical Education': 'observation, practical work, group work, questions and answers', 'Religious Education': 'storytelling, group discussion, questions and answers' };
const DEF_TECH = 'group discussion, questions and answers, demonstration';
const subjRaw = () => $('subject').value === 'Other' ? ($('subjo').value || 'Other') : $('subject').value;
const subjT = () => t(subjRaw());
safe($('subject'), (el) => el.addEventListener('change', () => { $('subjo').style.display = el.value === 'Other' ? 'block' : 'none'; }));

function sp(tot, w) { const r = []; let u = 0; const sw = w.reduce((x, y) => x + y, 0); w.forEach((x, k) => { const m = k === w.length - 1 ? tot - u : Math.max(1, Math.round(tot * x / sw)); r.push(m); u += m; }); return r; }
const L = (arr, m) => arr.map((x, k) => (m && m[k] ? t('{0} min', m[k]) + '\n' : '') + (k + 1) + '. ' + x).join('\n');

/* ================= AI prompt + parser (markers) ================= */
const MARKERS = ['KUC', 'OBJECTIVE', 'INTRO_TEACHER', 'INTRO_LEARNERS', 'DEV_TEACHER', 'DEV_LEARNERS', 'ASSESSMENT', 'SUMMARY', 'ASSIGNMENT', 'GENERIC_INTRO', 'GENERIC_DEV', 'GENERIC_CONCL', 'TECHNIQUES'];
function parseAI(text) {
  const out = {}; MARKERS.forEach((m) => { out[m] = ''; });
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
  const langName = LG === 'rw' ? 'Kinyarwanda' : LG === 'fr' ? 'French' : 'English';
  return [
    'You are an expert Rwandan CBC teacher-trainer. Write everything in ' + langName + '.',
    'Create a COMPLETE competence-based lesson plan in the official REB (elearning.reb.rw) format for this lesson.',
    'Given by the teacher: Subject: ' + f.subject + '; Class: ' + f.cls + '; Lesson title/topic: ' + f.ltitle + '; Duration: ' + f.dur + ' minutes; Class size: ' + (f.size || 'not given') + '; Unit No: ' + (f.unit || 'not given') + '; Unit title: ' + (f.utitle || 'infer it from the lesson title') + '; SEN learners: ' + (f.sen || 'none') + '; Materials: ' + (f.mat || 'choose suitable standard materials') + '.',
    (f.extra ? 'Extra instructions from the teacher: ' + f.extra : ''),
    'Infer everything not given: unit title, key unit competence, instructional objective (5 elements: condition, who, action, content, standard), all activities, assessment items, summary, assignment, generic competences and cross-cutting issues.',
    'Reply with EXACTLY these markers, each on its own line, content after it. Numbered lines "1. ..." inside activity sections. Start teacher activities with "To ...".',
    '[KUC] one-sentence key unit competence',
    '[OBJECTIVE] instructional objective: "Given ..., learners will be able to ... by ..."',
    '[INTRO_TEACHER] 3 numbered introduction teacher activities (greet/attendance, review previous lesson, introduce topic and objective)',
    '[INTRO_LEARNERS] 3 matching numbered learner activities (say if individual, in pairs, in groups or whole class)',
    '[DEV_TEACHER] 4 numbered development teacher activities using CBC learner-centred techniques for this subject (present materials/guiding questions, organise group work, move around and support including SEN learners, invite presentations and summarise)',
    '[DEV_LEARNERS] 4 matching numbered learner activities',
    '[ASSESSMENT] 2-3 short individual test items, one per line',
    '[SUMMARY] key points to write on the board',
    '[ASSIGNMENT] a suitable homework task',
    '[GENERIC_INTRO] generic competences + cross-cutting issues for introduction, 1-2 lines',
    '[GENERIC_DEV] generic competences + cross-cutting issues for development, 2-3 lines',
    '[GENERIC_CONCL] generic competences + cross-cutting issues for conclusion, 1-2 lines',
    '[TECHNIQUES] teaching techniques used, comma separated',
    'Be professional, realistic and ready for submission. No text outside the markers.'
  ].filter(Boolean).join('\n');
}

/* ================= Build the EXACT REB plan table ================= */
function buildPlan(f, ai) {
  const dur = +f.dur || 40;
  const mv = sp(dur, [15, 70, 15]);
  const [i, d, a] = mv;

  const lines = (s) => (s || '').split('\n').map((x) => x.trim()).filter(Boolean).map((x) => x.replace(/^\d+[.)]\s*/, ''));
  const iT = lines(ai.INTRO_TEACHER), iL = lines(ai.INTRO_LEARNERS);
  const dT = lines(ai.DEV_TEACHER), dL = lines(ai.DEV_LEARNERS);
  const topic = f.ltitle || '';
  const intro = iT.length ? L(iT) : '1. To greet learners and check attendance.\n2. To ask review questions linked to the previous lesson (whole class).\n3. To introduce the topic "' + topic + '" and state the objective.';
  const introL = iL.length ? L(iL) : '1. To greet the teacher.\n2. To answer review questions (whole class).\n3. To listen and ask questions about the new topic.';
  const dev = dT.length ? L(dT) : '1. To present the learning materials and ask guiding questions.\n2. To organise learners in small groups and give clear instructions.\n3. To move around, guide learners and support those with special needs.\n4. To invite learners to present findings, correct them and summarise.';
  const devL = dL.length ? L(dL) : '1. To observe the materials and answer the questions (whole class).\n2. To form groups and listen to instructions.\n3. To carry out the task in small groups.\n4. To present findings, ask questions and copy the summary.';
  const assessment = ai.ASSESSMENT || '1. Short individual written task based on the objective.\n2. Oral questions to check understanding.';
  const summary = ai.SUMMARY || ('Key points about "' + topic + '".');
  const assignment = ai.ASSIGNMENT || 'Exercise related to the lesson in the pupils\' book.';
  const gi = ai.GENERIC_INTRO || 'Communication: learners express ideas when answering review questions.';
  const gd = ai.GENERIC_DEV || 'Cooperation, critical thinking and inclusive education: every learner, including those with SEN, participates in group work.';
  const ga = ai.GENERIC_CONCL || 'Critical thinking: learners apply what they learned.\nCross-cutting: inclusive education (feedback to every learner).';
  const tech = ai.TECHNIQUES || PRE[f.subject] || DEF_TECH;
  const obj = ai.OBJECTIVE || '';
  const kuc = ai.KUC || '';
  const sum = t('Techniques: {0}. Resources: {1}. Learners work in small groups. Location: {2}.', tech, f.mat || t('the lesson'), t('Inside'));
  const sen = (f.sen ? e(f.sen) : DOT) + (f.senacc ? '\n' + t('Accommodation:') + ' ' + e(f.senacc) : '');
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
    '<tr><td class="lb" colspan="2">' + t('Title of the lesson') + '</td><td colspan="5">' + edf(topic) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('Instructional objectives') + '</td><td colspan="5">' + edf(obj) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('Plan of this class (location: in / outside)') + '</td><td colspan="5">' + ed(t('Inside')) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('Learning materials (for all learners)') + '</td><td colspan="5">' + edf(f.mat) + '</td></tr>' +
    '<tr><td class="lb" colspan="2">' + t('References') + '</td><td colspan="5">' + edf(t("Pupil's Book, teacher's guide, REB syllabus")) + '</td></tr>' +
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
const fields = () => Array.from(document.querySelectorAll('#form input,#form select'));
function getAll() { try { return JSON.parse(localStorage.getItem(K) || '[]'); } catch (_) { return []; } }
function putAll(a) { try { localStorage.setItem(K, JSON.stringify(a)); return true; } catch (_) { return false; } }
function savePlan() {
  const all = getAll(), f = {}; fields().forEach((x) => { f[x.id] = x.value; });
  const r = { id: cur || String(Date.now()), title: $('ltitle').value || '-', subject: subjRaw(), cls: $('cls').value || '-', upd: new Date().toLocaleDateString(), f, plan: $('plan').innerHTML };
  const k = all.findIndex((p) => p.id === r.id); if (k >= 0) all[k] = r; else all.unshift(r); cur = r.id;
  if (!putAll(all)) toast(t('Could not save in this browser.'), 'error'); else toast(t('Plan saved.'), 'success');
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
const busy = (btn, on) => {
  if (!btn) return;
  if (on) { btn.dataset.o = btn.textContent; btn.textContent = t('⏳ Generating…'); btn.disabled = true; }
  else { btn.textContent = btn.dataset.o || btn.textContent; btn.disabled = false; }
};
safe($('genBtn'), (btn) => btn.addEventListener('click', async () => {
  const f = {
    subject: $('subject').value, cls: $('cls').value, ltitle: $('ltitle').value,
    dur: $('dur').value || '40', size: $('size').value,
    school: $('school').value, teacher: $('teacher').value, term: $('term').value, date: $('date').value,
    unit: $('unit').value, lesson: $('lesson').value, utitle: $('utitle').value,
    sen: $('sen').value, mat: $('mat').value, extra: $('extra').value
  };
  if (!f.subject || !f.cls || !f.ltitle) { toast(t('Please fill subject, class and topic'), 'error'); return; }
  busy(btn, true); toast(t('The AI is writing your lesson plan…'));
  try {
    const raw = await postJSON('/api/lesson', { language: LG, type: 'lesson_plan_reb', form: f, prompt: buildCBCPrompt(f) });
    buildPlan(f, parseAI(raw));
    toast(t('Lesson plan generated'), 'success');
  } catch (err) {
    buildPlan(f, parseAI(''));
    toast(t('Plan generated with default content (AI unreachable).'), 'error');
  } finally { busy(btn, false); }
}));
safe($('saveBtn'), (el) => el.addEventListener('click', savePlan));
safe($('printBtn'), (el) => el.addEventListener('click', () => window.print()));
safe($('topBtn'), (el) => el.addEventListener('click', () => $('out').scrollIntoView({ behavior: 'smooth' })));
safe($('newBtn'), (el) => el.addEventListener('click', () => {
  cur = null;
  ['ltitle', 'size', 'unit', 'lesson', 'utitle', 'sen', 'mat', 'extra'].forEach((k) => { const el = $(k); if (el) el.value = ''; });
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
  if (!confirm(t('Delete chat history?'))) return;
  try { localStorage.removeItem(CK); } catch (_) {}
  chatId = null; renderChat(); toast(t('Chat history deleted.'), 'success');
}));

/* ================= Assessment & Methodology (your AI endpoints) ================= */
const val = (id) => { const el = $(id); return el ? el.value : ''; };
safe($('generateAssessment'), (btn) => btn.addEventListener('click', async () => {
  const p = { language: LG, subject: val('assessSubject'), class: val('assessClass'), topic: val('assessTopic'), count: val('assessCount') || '5', difficulty: val('assessDifficulty') || 'medium', type: val('assessType') || 'mcq' };
  if (!p.subject || !p.class || !p.topic) { toast(t('Please fill subject, class and topic'), 'error'); return; }
  busy(btn, true);
  try {
    const text = await postJSON('/api/assessment', p);
    const out = $('assessmentOutput'), body = $('assessmentBody');
    if (out && body) { body.textContent = text; out.classList.remove('hidden'); out.dataset.raw = text; }
    toast(t('Assessment generated'), 'success');
  } catch (_) { toast(t('Failed: network error'), 'error'); } finally { busy(btn, false); }
}));
safe($('copyAssessment'), (btn) => btn.addEventListener('click', () => { const o = $('assessmentOutput'); if (o && o.dataset.raw) copyText(o.dataset.raw); }));
safe($('generateMethodology'), (btn) => btn.addEventListener('click', async () => {
  const p = { language: LG, subject: val('methodSubject'), class: val('methodClass'), topic: val('methodTopic') };
  if (!p.subject || !p.class || !p.topic) { toast(t('Please fill subject, class and topic'), 'error'); return; }
  busy(btn, true);
  try {
    const text = await postJSON('/api/methodology', p);
    const out = $('methodologyOutput'), body = $('methodologyBody');
    if (out && body) { body.textContent = text; out.classList.remove('hidden'); out.dataset.raw = text; }
    toast(t('Methodology generated'), 'success');
  } catch (_) { toast(t('Failed: network error'), 'error'); } finally { busy(btn, false); }
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
try { setTheme(localStorage.getItem('ghad_theme') || 'auto'); } catch (_) { setTheme('auto'); }
setLang(LG);
renderLib();
try { const all = getChats(); if (all.length) chatId = all[0].id; } catch (_) {}
renderChat();
});
