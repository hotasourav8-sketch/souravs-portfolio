// ─── PARTICLES ───
const container = document.getElementById('particles');
for (let i = 0; i < 40; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 4 + 1;
  p.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${Math.random() * 100}%;
    animation-duration: ${Math.random() * 15 + 10}s;
    animation-delay: ${Math.random() * 10}s;
    opacity: ${Math.random() * 0.5 + 0.1};
  `;
  container.appendChild(p);
}

// ─── NAVBAR: scroll shrink ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll(
  '.glass-card, .timeline-card, .section-title, .section-tag, ' +
  '.hero-badge, .hero-sub, .hero-cta, .contact-sub, .ref-note'
);

reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ─── ACTIVE NAV LINK HIGHLIGHT ───
const sections  = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--cyan)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ─── SMOOTH CURSOR GLOW on hover ───
document.querySelectorAll('.glass-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    card.style.background =
      `radial-gradient(circle at ${x}% ${y}%, rgba(0,212,255,0.08) 0%, rgba(255,255,255,0.02) 60%)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

