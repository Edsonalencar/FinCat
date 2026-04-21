/* ======================
   Animated hero counters
   ====================== */

function animateCount(el, from, to, duration, formatter) {
  const start = performance.now();
  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = from + (to - from) * eased;
    el.textContent = formatter ? formatter(v) : Math.round(v).toLocaleString('pt-BR');
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// Saldo counter (hero)
const saldoEl = document.getElementById('saldo-val');
if (saldoEl) {
  animateCount(saldoEl, 0, 4218, 1400, v => Math.round(v).toLocaleString('pt-BR'));
}

// Daily float counter
const dailyFloat = document.getElementById('daily-float');
if (dailyFloat) {
  animateCount(dailyFloat, 0, 68, 1200);
}
const dailyVal = document.getElementById('daily-val');
if (dailyVal) {
  animateCount(dailyVal, 0, 68, 1200);
}

// Projection float counter
const projVal = document.getElementById('proj-value');
if (projVal) {
  animateCount(projVal, 0, 742, 1600);
}

/* ======================
   Gentle floating cards + phone
   ====================== */
(function floatCards() {
  const els = [
    { el: document.querySelector('.float-projection'), amp: 6, dur: 4200, phase: 0 },
    { el: document.querySelector('.float-daily'), amp: 8, dur: 3800, phase: 1000 },
    { el: document.querySelector('.float-whats'), amp: 5, dur: 4500, phase: 500 },
  ];
  const start = performance.now();
  function tick(now) {
    const t = now - start;
    els.forEach(it => {
      if (!it.el) return;
      const y = Math.sin((t + it.phase) / it.dur * Math.PI * 2) * it.amp;
      it.el.style.transform = `translateY(${y}px)`;
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();


/* ======================
   Projection SVG chart — historical + projected
   ====================== */
(function projChart() {
  const chart = document.getElementById('proj-chart');
  if (!chart) return;
  const W = 520, H = 260;
  const pad = { l: 0, r: 20, t: 30, b: 30 };

  // 30 days — index 0..29 (abr)
  // historical: 0..20 (21 days of real data)
  // projection: 20..29 (forecast)
  const history = [
    6200, 6180, 6140, 6000, 5900,
    5750, 5480, 5250, 5180, 5080,
    4950, 4820, 4790, 4720, 4650,
    4580, 4510, 4420, 4350, 4280, 4218
  ];
  // projected continuation (mild descent ending positive)
  const projection = [4218, 4100, 3950, 3820, 3680, 3520, 3380, 3150, 2940, 2730];
  // To show nicer end balance, we treat "projection at end" ≈ +742 relative; chart is the absolute saldo line.

  const allValues = history.concat(projection.slice(1));
  const max = Math.max(...allValues) * 1.05;
  const min = Math.min(...allValues) * 0.85;

  const N = 30;
  function x(i) { return pad.l + (i / (N - 1)) * (W - pad.l - pad.r); }
  function y(v) { return pad.t + (1 - (v - min) / (max - min)) * (H - pad.t - pad.b); }

  // historical path
  let hp = `M ${x(0)} ${y(history[0])}`;
  for (let i = 1; i < history.length; i++) hp += ` L ${x(i)} ${y(history[i])}`;
  let haFull = hp + ` L ${x(history.length - 1)} ${H - pad.b} L ${x(0)} ${H - pad.b} Z`;

  // projection path (starts at last historical point)
  const pStart = history.length - 1;
  let pp = `M ${x(pStart)} ${y(projection[0])}`;
  for (let i = 1; i < projection.length; i++) pp += ` L ${x(pStart + i)} ${y(projection[i])}`;
  let paFull = pp + ` L ${x(pStart + projection.length - 1)} ${H - pad.b} L ${x(pStart)} ${H - pad.b} Z`;

  const histLine = document.getElementById('hist-line');
  const histArea = document.getElementById('hist-area');
  const projLine = document.getElementById('proj-line');
  const projArea = document.getElementById('proj-area');
  const endDot = document.getElementById('proj-end');
  const endRing = document.getElementById('proj-end-ring');
  const todayLine = document.getElementById('today-line');
  const todayLbl = document.getElementById('today-label');

  histLine.setAttribute('d', hp);
  histArea.setAttribute('d', haFull);

  const todayX = x(pStart);
  todayLine.setAttribute('x1', todayX);
  todayLine.setAttribute('x2', todayX);
  todayLbl.setAttribute('x', todayX);

  // animate drawing of hist line
  const histLen = histLine.getTotalLength();
  histLine.style.strokeDasharray = histLen;
  histLine.style.strokeDashoffset = histLen;
  histLine.getBoundingClientRect();
  histLine.style.transition = 'stroke-dashoffset 1.2s ease-out';
  histLine.style.strokeDashoffset = '0';

  // reveal projection after delay
  setTimeout(() => {
    projLine.setAttribute('d', pp);
    projArea.setAttribute('d', paFull);
    const projLen = projLine.getTotalLength();
    projLine.style.strokeDasharray = `6 5`; // keep dashed pattern
    projArea.style.opacity = '0';
    projArea.style.transition = 'opacity .8s ease';
    requestAnimationFrame(() => { projArea.style.opacity = '0.45'; });

    // end dot animation
    const endX = x(pStart + projection.length - 1);
    const endY = y(projection[projection.length - 1]);
    endDot.setAttribute('cx', endX);
    endDot.setAttribute('cy', endY);
    endRing.setAttribute('cx', endX);
    endRing.setAttribute('cy', endY);
    // pulse
    let pulseT = 0;
    function pulse() {
      pulseT += 0.04;
      const r = 12 + Math.sin(pulseT) * 4;
      endRing.setAttribute('r', r.toFixed(2));
      endRing.setAttribute('opacity', 0.3 + Math.sin(pulseT) * 0.2);
      requestAnimationFrame(pulse);
    }
    pulse();
  }, 1100);
})();


/* ======================
   Daily sim (interactive)
   ====================== */
(function sim() {
  const metaSlider = document.getElementById('sim-meta');
  const fixSlider = document.getElementById('sim-fix');
  if (!metaSlider) return;

  const metaVal = document.getElementById('sim-meta-val');
  const fixVal = document.getElementById('sim-fix-val');
  const amount = document.getElementById('sim-amount');
  const amountCents = document.getElementById('sim-amount-cents');
  const status = document.getElementById('sim-status');
  const fill = document.getElementById('sim-fill');
  const barMax = document.getElementById('sim-bar-max');

  const INCOME = 6200;
  const SALDO = 3840;
  const DAYS_LEFT = 21;

  function fmt(n) {
    return Math.round(n).toLocaleString('pt-BR');
  }

  function recalc() {
    const meta = parseInt(metaSlider.value, 10);
    const fix = parseInt(fixSlider.value, 10);
    metaVal.textContent = fmt(meta);
    fixVal.textContent = fmt(fix);

    // disposable for the rest of month = saldo - fix remaining - meta
    const disposable = Math.max(0, SALDO - (fix * 0.35) - meta);
    const daily = disposable / DAYS_LEFT;
    const maxDaily = 250;
    const pct = Math.min(100, (daily / maxDaily) * 100);

    const reais = Math.floor(daily);
    const cents = Math.round((daily - reais) * 100);

    amount.textContent = reais.toLocaleString('pt-BR');
    amountCents.textContent = String(cents).padStart(2, '0');

    fill.style.width = pct + '%';
    fill.classList.remove('over');
    barMax.textContent = `R$ ${fmt(maxDaily)} / dia`;

    if (daily < 30) {
      status.className = 'sim-status over';
      status.innerHTML = '⚠️ Apertado · considere reduzir a meta';
      fill.classList.add('over');
    } else if (daily < 80) {
      status.className = 'sim-status warn';
      status.innerHTML = '◐ No limite · possível, mas atento';
    } else {
      status.className = 'sim-status ok';
      status.innerHTML = '✓ Dentro do plano · dá pra guardar';
    }
  }

  metaSlider.addEventListener('input', recalc);
  fixSlider.addEventListener('input', recalc);
  recalc();
})();


/* ======================
   WhatsApp conversation — plays on scroll into view
   ====================== */
(function whats() {
  const body = document.getElementById('chat-body');
  const frame = document.getElementById('chat-frame');
  if (!body) return;

  const script = [
    { type: 'me', text: 'almoço 32,90', delay: 600 },
    { type: 'typing', delay: 900 },
    { type: 'bot', text: 'Registrei ✓', delay: 500 },
    { type: 'receipt', data: { categoria: 'Alimentação 🍔', valor: 'R$ 32,90', hoje: 'R$ 68,40' }, delay: 800 },
    { type: 'bot', text: 'Você ainda tem <b>R$ 35,50</b> no seu limite de hoje.', delay: 1200 },
    { type: 'me', text: 'uber 18', delay: 900 },
    { type: 'typing', delay: 700 },
    { type: 'bot', text: 'Registrei em <b>Transporte 🚗</b> — R$ 18,00', delay: 500 },
  ];

  let played = false;
  function time() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  }

  async function play() {
    if (played) return;
    played = true;
    body.innerHTML = '';
    let typingEl = null;
    for (const step of script) {
      await new Promise(r => setTimeout(r, step.delay));
      if (typingEl) { typingEl.remove(); typingEl = null; }

      if (step.type === 'typing') {
        typingEl = document.createElement('div');
        typingEl.className = 'bubble bubble-bot';
        typingEl.style.width = 'fit-content';
        typingEl.innerHTML = '<span class="typing"><span></span><span></span><span></span></span>';
        body.appendChild(typingEl);
      } else if (step.type === 'me') {
        const b = document.createElement('div');
        b.className = 'bubble bubble-me';
        b.innerHTML = `${step.text} <span class="bubble-time">${time()} ✓✓</span>`;
        body.appendChild(b);
      } else if (step.type === 'bot') {
        const b = document.createElement('div');
        b.className = 'bubble bubble-bot';
        b.innerHTML = `${step.text} <span class="bubble-time">${time()}</span>`;
        body.appendChild(b);
      } else if (step.type === 'receipt') {
        const b = document.createElement('div');
        b.className = 'bubble bubble-bot';
        b.innerHTML = `
          <div class="bubble-receipt">
            <div style="font-weight:600;margin-bottom:4px;">💸 Lançado</div>
            <div class="bubble-receipt-row"><span>Categoria</span><span>${step.data.categoria}</span></div>
            <div class="bubble-receipt-row"><span>Valor</span><span>${step.data.valor}</span></div>
            <div class="bubble-receipt-row"><span>Gasto hoje</span><span>${step.data.hoje}</span></div>
          </div>
          <span class="bubble-time">${time()}</span>`;
        body.appendChild(b);
      }
      frame.scrollTop = frame.scrollHeight;
      body.scrollTop = body.scrollHeight;
    }
    // replay after a pause
    setTimeout(() => { played = false; play(); }, 5000);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) play(); });
  }, { threshold: 0.3 });
  io.observe(frame);
})();


/* ======================
   FAQ accordion
   ====================== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});


/* ======================
   Reveal on scroll
   ====================== */
const revealEls = document.querySelectorAll('section > .wrap > *, section > .wrap');
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
// Not adding .reveal class globally to avoid jank; section-level already feels good.
