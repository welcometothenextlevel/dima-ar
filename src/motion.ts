// Scroll-driven motion layer. Runs only after hydration; the prerendered
// HTML never depends on it, so content stays visible without JavaScript.
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(pointer: fine)").matches;
function header() {
  const el = document.querySelector<HTMLElement>("[data-header]");
  if (!el) return;
  let last = scrollY;
  let ticking = false;
  const bar = el.querySelector<HTMLElement>(".scroll-progress");
  function update() {
    const y = scrollY;
    el!.classList.toggle("is-scrolled", y > 24);
    if (bar) {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    }
    if (document.documentElement.classList.contains("menu-open")) {
      el!.classList.remove("is-hidden");
    } else if (y > last + 6 && y > 160) el!.classList.add("is-hidden");
    else if (y < last - 6 || y < 160) el!.classList.remove("is-hidden");
    last = y;
    ticking = false;
  }
  addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}
function reveal() {
  const targets = new Set<Element>();
  document
    .querySelectorAll("main section, .footer-top > div, .footer-links nav")
    .forEach((section) => {
      if (section.classList.contains("hero")) return;
      [...section.children].forEach((child, i) => {
        if (child.hasAttribute("data-stagger")) {
          [...child.children].forEach((c) => targets.add(c));
          return;
        }
        if (!(child as HTMLElement).style.getPropertyValue("--i"))
          (child as HTMLElement).style.setProperty(
            "--i",
            String(Math.min(i, 6)),
          );
        targets.add(child);
      });
    });
  document
    .querySelectorAll(
      "[data-stagger] > *, .gallery > .project, .faq-list > details",
    )
    .forEach((c) => targets.add(c));
  if (reduced || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  targets.forEach((t) => {
    t.setAttribute("data-reveal", "");
    io.observe(t);
  });
}
function parallax() {
  if (reduced) return;
  const imgs = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
  if (!imgs.length) return;
  let ticking = false;
  function update() {
    const vh = innerHeight;
    imgs.forEach((img) => {
      const box = (img.parentElement || img).getBoundingClientRect();
      if (box.bottom < 0 || box.top > vh) return;
      const progress = (box.top + box.height / 2 - vh / 2) / vh;
      img.style.setProperty("--py", (progress * -8).toFixed(2) + "%");
    });
    ticking = false;
  }
  addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  addEventListener("resize", update);
  update();
}
function counters() {
  const els = document.querySelectorAll<HTMLElement>("[data-count]");
  if (!els.length || reduced || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const el = e.target as HTMLElement;
      const end = Number(el.dataset.count);
      const decimals = Number(el.dataset.decimals || 0);
      const start = performance.now();
      const dur = 1400;
      function frame(now: number) {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = (end * eased).toFixed(decimals).replace(".", ",");
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  });
  els.forEach((el) => io.observe(el));
}
function glow() {
  if (!fine || reduced) return;
  document.querySelectorAll<HTMLElement>("[data-glow]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty(
        "--mx",
        ((e.clientX - r.left) / r.width) * 100 + "%",
      );
      el.style.setProperty(
        "--my",
        ((e.clientY - r.top) / r.height) * 100 + "%",
      );
      el.classList.add("has-glow");
    });
    el.addEventListener("pointerleave", () => el.classList.remove("has-glow"));
  });
}
function magnetic() {
  if (!fine || reduced) return;
  document.querySelectorAll<HTMLElement>(".button").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.transform = `translate(${x * 6}px, ${y * 6}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });
}
export function initMotion() {
  document.documentElement.classList.add("js");
  header();
  reveal();
  parallax();
  counters();
  glow();
  magnetic();
  requestAnimationFrame(() =>
    document.documentElement.classList.add("is-ready"),
  );
}
