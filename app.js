document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ---------- Helpers ---------- */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const safe = (el, fn) => { if (el && typeof fn === 'function') fn(el); };

  const state = { lang: 'en', theme: 'auto' };
  const langName = { en: 'English', rw: 'Kinyarwanda', fr: 'French' };

  /* ---------- Toasts ---------- */
  function toast(msg, type) {
    const container = $('#toastContainer');
    if (!container) return;
    const t = document.createElement('div');
    t.className = 'toast' + (type ? ' ' + type : '');
    t.textContent = msg;
    container.appendChild(t);
    setTimeout(() => {
      t.classList.add('out');
      setTimeout(() => t.remove(), 350);
    }, 3200);
  }

  /* ---------- View switching ---------- */
  const VIEWS = ['dashboard', 'lesson', 'assistant', 'assessment', 'methodology', 'resources', 'settings'];

  function showView(name) {
    if (!VIEWS.includes(name)) name = 'dashboard';
    $$('.view').forEach((v) => v.classList.toggle('active', v.id === 'view-' + name));
    $$('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.view === name));
    const workspace = $('#workspaceApp');
    if (workspace) workspace.classList.remove('sidebar-open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openWorkspace(viewName) {
    const landing = $('#landingPage');
    const workspace = $('#workspaceApp');
    if (landing) landing.hidden = true;
    if (workspace) {
      workspace.hidden = false;
      workspace.style.display = 'flex';
    }
    showView(viewName || 'dashboard');
  }

  function goHome() {
    const landing = $('#landingPage');
    const workspace = $('#workspaceApp');
    if (workspace) workspace.hidden = true;
    if (landing) {
      landing.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* ---------- Language / Theme ---------- */
  function setLang(lang) {
    if (!['en', 'rw', 'fr'].includes(lang)) lang = 'en';
    state.lang = lang;
    ['landingLangSelect', 'langSelect', 'settingsLang'].forEach((id) => {
      const sel = document.getElementById(id);
      if (sel) sel.value = lang;
    });
    document.documentElement.lang = lang === 'rw' ? 'rw' : lang;
  }

  function setTheme(theme) {
    if (!['auto', 'light', 'dark'].includes(theme)) theme = 'auto';
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    ['themeSelect', 'settingsTheme'].forEach((id) => {
      const sel = document.getElementById(id);
      if (sel) sel.value = theme;
    });
  }

  safe($('#landingLangSelect'), (el) => el.addEventListener('change', () => setLang(el.value)));
  safe($('#langSelect'), (el) => el.addEventListener('change', () => setLang(el.value)));
  safe($('#settingsLang'), (el) => el.addEventListener('change', () => setLang(el.value)));
  safe($('#themeSelect'), (el) => el.addEventListener('change', () => setTheme(el.value)));
  safe($('#settingsTheme'), (el) => el.addEventListener('change', () => setTheme(el.value)));

  /* ---------- Landing launches ---------- */
  $$('[data-launch]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openWorkspace(el.getAttribute('data-launch'));
    });
  });

  /* ---------- In-app navigation ---------- */
  $$('.nav-btn[data-view], .feature-card[data-view]').forEach((el) => {
    el.addEventListener('click', () => showView(el.getAttribute('data-view')));
  });

  safe($('#backToHomeBtn'), (el) => el.addEventListener('click', goHome));
  safe($('#menuToggle'), (el) =>
    el.addEventListener('click', () => {
      const ws = $('#workspaceApp');
      if (ws) ws.classList.toggle('sidebar-open');
    })
  );

  /* ---------- Footer year ---------- */
  safe($('#footerYear'), (el) => { el.textContent = String(new Date().getFullYear()); });

  /* ---------- 3D pointer tilt ---------- */
  $$('[data-tilt]').forEach((card) => {
    if (window.matchMedia('(hover: none)').matches) return; // skip touch devices
    const max = 8;
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform =
        'perspective(900px) rotateY(' + (px * max).toFixed(2) + 'deg) rotateX(' +
        (-py * max).toFixed(2) + 'deg) translateZ(6px)';
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });

  /* ---------- Copy helper ---------- */
  function copyText(text, okMsg) {
    const done = () => toast(okMsg || 'Copied to clipboard', 'success');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }
  function fallbackCopy(text, done) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      done();
    } catch (_) {
      toast('Copy failed — please copy manually', 'error');
    }
  }

  /* ---------- API helper ---------- */
  async function postJSON(url, payload) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Server error (' + res.status + ')');
    const data = await res.json();
    if (typeof data === 'string') return data;
    return data.output || data.result || data.text || data.message ||
      data.content || data.lesson || data.assessment || data.methodology ||
      data.reply || data.answer || JSON.stringify(data, null, 2);
  }

  function renderResult(outId, bodyId, copyBtnId, text) {
    const out = document.getElementById(outId);
    const body = document.getElementById(bodyId);
    if (!out || !body) return;
    body.textContent = text;
    out.classList.remove('hidden');
    body.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    const btn = document.getElementById(copyBtnId);
    if (btn) btn.onclick = () => copyText(text, 'Copied!');
  }

  function setLoading(btn, busy, busyText) {
    if (!btn) return;
    if (busy) {
      btn.dataset.original = btn.textContent;
      btn.textContent = busyText || '⏳ Generating…';
      btn.disabled = true;
    } else {
      btn.textContent = btn.dataset.original || 'Generate';
      btn.disabled = false;
    }
  }

  /* ---------- Lesson generator ---------- */
  safe($('#generateLesson'), (btn) => {
    btn.addEventListener('click', async () => {
      const val = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };
      const payload = {
        language: state.lang,
        subject: val('lessonSubject'),
        class: val('lessonClass'),
        topic: val('lessonTopic'),
        duration: val('lessonDuration') || '40',
        unit: val('lessonUnit'),
        learners: val('lessonLearners') || '40',
        extra: val('lessonExtra')
      };
      if (!payload.subject || !payload.class || !payload.topic) {
        toast('Please fill subject, class and topic', 'error');
        return;
      }
      setLoading(btn, true);
      try {
        const text = await postJSON('/api/lesson', payload);
        renderResult('lessonOutput', 'lessonBody', 'copyLesson', text);
        toast('Lesson plan generated', 'success');
      } catch (err) {
        toast('Failed: ' + (err && err.message ? err.message : 'network error'), 'error');
      } finally {
        setLoading(btn, false);
      }
    });
  });

  /* ---------- Chat assistant ---------- */
  function addChatMsg(role, text) {
    const box = $('#chatMessages');
    if (!box) return null;
    const div = document.createElement('div');
    div.className = 'chat-msg ' + (role === 'user' ? 'user' : 'bot');
    div.textContent = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
    return div;
  }

  async function sendChat() {
    const input = $('#chatInput');
    const btn = $('#sendChat');
    if (!input) return;
    const text = (input.value || '').trim();
    if (!text) return;
    addChatMsg('user', text);
    input.value = '';
    const thinking = addChatMsg('bot', '…thinking');
    if (btn) btn.disabled = true;
    try {
      const reply = await postJSON('/api/assistant', {
        language: state.lang,
        langName: langName[state.lang],
        message: text
      });
      if (thinking && thinking.parentNode) thinking.remove();
      addChatMsg('bot', reply);
    } catch (_) {
      if (thinking && thinking.parentNode) thinking.remove();
      addChatMsg('bot', '⚠️ Sorry, I could not reach the server. Please try again.');
    } finally {
      if (btn) btn.disabled = false;
      input.focus();
    }
  }

  safe($('#sendChat'), (btn) => btn.addEventListener('click', sendChat));
  safe($('#chatInput'), (input) =>
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChat();
      }
    })
  );

  /* ---------- Assessment generator ---------- */
  safe($('#generateAssessment'), (btn) => {
    btn.addEventListener('click', async () => {
      const val = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };
      const payload = {
        language: state.lang,
        subject: val('assessSubject'),
        class: val('assessClass'),
        topic: val('assessTopic'),
        count: val('assessCount') || '5',
        difficulty: val('assessDifficulty') || 'medium',
        type: val('assessType') || 'mcq'
      };
      if (!payload.subject || !payload.class || !payload.topic) {
        toast('Please fill subject, class and topic', 'error');
        return;
      }
      setLoading(btn, true);
      try {
        const text = await postJSON('/api/assessment', payload);
        renderResult('assessmentOutput', 'assessmentBody', 'copyAssessment', text);
        toast('Assessment generated', 'success');
      } catch (err) {
        toast('Failed: ' + (err && err.message ? err.message : 'network error'), 'error');
      } finally {
        setLoading(btn, false);
      }
    });
  });

  /* ---------- Methodology generator ---------- */
  safe($('#generateMethodology'), (btn) => {
    btn.addEventListener('click', async () => {
      const val = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };
      const payload = {
        language: state.lang,
        subject: val('methodSubject'),
        class: val('methodClass'),
        topic: val('methodTopic')
      };
      if (!payload.subject || !payload.class || !payload.topic) {
        toast('Please fill subject, class and topic', 'error');
        return;
      }
      setLoading(btn, true);
      try {
        const text = await postJSON('/api/methodology', payload);
        renderResult('methodologyOutput', 'methodologyBody', 'copyMethodology', text);
        toast('Methodology generated', 'success');
      } catch (err) {
        toast('Failed: ' + (err && err.message ? err.message : 'network error'), 'error');
      } finally {
        setLoading(btn, false);
      }
    });
  });

  /* ---------- Init ---------- */
  const themeInit = $('#themeSelect');
  const langInit = $('#langSelect') || $('#landingLangSelect') || $('#settingsLang');
  if (themeInit) setTheme(themeInit.value);
  if (langInit) setLang(langInit.value);
});
