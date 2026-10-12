// ---- Editable settings ----
const ROLES = ["Web Developer", "Problem Solver", "Lifelong Learner"];

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar background on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const setMenu = (open) => {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
};
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Typing animation
const typed = document.getElementById("typed");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce) {
  typed.textContent = ROLES.join(" | ");
} else {
  let r = 0, c = 0, del = false;
  (function tick() {
    const word = ROLES[r];
    c += del ? -1 : 1;
    typed.textContent = word.slice(0, c);
    let delay = del ? 45 : 90;
    if (!del && c === word.length) { del = true; delay = 1400; }
    else if (del && c === 0) { del = false; r = (r + 1) % ROLES.length; delay = 400; }
    setTimeout(tick, delay);
  })();
}

// Fade-in sections + animate skill bars when visible
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    e.target.querySelectorAll(".bar i").forEach((b) => (b.style.width = b.dataset.level + "%"));
    io.unobserve(e.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Contact form: works with Netlify Forms or Formspree; otherwise opens the mail app
const form = document.getElementById("form");
const status = document.getElementById("status");
form.addEventListener("submit", async (e) => {
  const action = form.getAttribute("action") || "";
  if (!action.startsWith("http")) return; // mailto fallback: let the browser handle it
  e.preventDefault();
  try {
    const res = await fetch(action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error();
    status.textContent = "Message sent. Thank you!";
    form.reset();
  } catch {
    status.style.color = "#fca5a5";
    status.textContent = "Message could not be sent. Please email me directly.";
  }
});
