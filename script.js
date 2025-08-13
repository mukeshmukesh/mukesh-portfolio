// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => navMenu.classList.toggle('show'));
}

// Theme toggle (dark <-> light)
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') root.classList.add('light');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
}

// Animated counters on the hero
function animateCounters() {
  document.querySelectorAll('.count').forEach(el => {
    const target = +el.dataset.target;
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(timer); }
      el.textContent = cur.toString();
    }, 20);
  });
}
if (document.querySelector('.count')) animateCounters();

// Fun Corner
const out = document.getElementById('funOutput');
const rollDiceBtn = document.getElementById('rollDice');
const flipCoinBtn = document.getElementById('flipCoin');
const partyBtn = document.getElementById('party');

if (rollDiceBtn && out) {
  rollDiceBtn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 6) + 1;
    out.textContent = `🎲 You rolled a ${n}!`;
  });
}
if (flipCoinBtn && out) {
  flipCoinBtn.addEventListener('click', () => {
    const side = Math.random() < 0.5 ? 'Heads' : 'Tails';
    out.textContent = `🪙 ${side}!`;
  });
}
if (partyBtn && out) {
  partyBtn.addEventListener('click', () => {
    out.textContent = '🎉 Confetti time!';
    confettiBurst();
  });
}

// Minimal confetti without libs
function confettiBurst() {
  const n = 60;
  for (let i = 0; i < n; i++) {
    const piece = document.createElement('span');
    piece.textContent = '✦';
    piece.style.position = 'fixed';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.top = '-2vh';
    piece.style.fontSize = (Math.random() * 18 + 10) + 'px';
    piece.style.transition = 'transform 1.8s ease, opacity 2s';
    piece.style.zIndex = 9999;
    document.body.appendChild(piece);
    requestAnimationFrame(() => {
      piece.style.transform = `translateY(${100 + Math.random() * 40}vh) rotate(${Math.random()*720-360}deg)`;
      piece.style.opacity = '0';
    });
    setTimeout(() => piece.remove(), 2000);
  }
}

// Newsletter / Contact fake handlers (no backend)
function subscribeNews(form) {
  const msg = document.getElementById('newsMsg');
  msg.textContent = 'Thanks! You are on the list. (This demo stores nothing.)';
  form.reset();
}
function fakeSend(form) {
  const msg = document.getElementById('contactMsg');
  msg.textContent = 'Message queued. (Demo: no server involved.)';
  form.reset();
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
