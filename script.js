/* =========================================================
   YOGESHWAR NAGPURE — PORTFOLIO
   script.js
   Everything editable lives in the CONFIG + *_DATA blocks
   below. Nothing further down needs to change to update
   content — replace placeholders (YOUR_...) with real values.
   ========================================================= */

/* ---------------------------------------------------------
   1. CONFIG — edit these first
   --------------------------------------------------------- */
const CONFIG = {
  whatsappNumber: "919764988350",     // country code + number, digits only
  resumePdfPath: "assets/Yogeshwar_Nagpure_Resume.pdf", // drop your resume PDF into /assets and update this
  githubUsername: "Yogeshnagpure10",
};

/* ---------------------------------------------------------
   2. SKILLS — color-coded to the page's 5-stop stack gradient
   --------------------------------------------------------- */
const SKILLS_DATA = [
  {
    name: "Frontend",
    color: "var(--stack-1)",
    skills: [
      { name: "HTML & CSS", pct: 90 },
      { name: "JavaScript", pct: 82 },
      { name: "React.js / Angular", pct: 72 },
    ],
  },
  {
    name: "Backend & API",
    color: "var(--stack-2)",
    skills: [
      { name: "Core Java / OOP / Java 8+", pct: 90 },
      { name: "Spring / Spring Boot / MVC", pct: 85 },
      { name: "REST API & Microservices", pct: 80 },
      { name: "Multithreading & Collections", pct: 78 },
    ],
  },
  {
    name: "Database",
    color: "var(--stack-3)",
    skills: [
      { name: "SQL / MySQL", pct: 85 },
      { name: "JDBC", pct: 80 },
      { name: "Spring Data JPA / Hibernate", pct: 78 },
      { name: "Redis", pct: 62 },
    ],
  },
  {
    name: "Security & Cloud",
    color: "var(--stack-4)",
    skills: [
      { name: "Spring Security / JWT", pct: 75 },
      { name: "Docker", pct: 68 },
      { name: "AWS Basics", pct: 60 },
      { name: "Kafka", pct: 58 },
      { name: "CI/CD", pct: 62 },
    ],
  },
  {
    name: "Tools & Practice",
    color: "var(--stack-5)",
    skills: [
      { name: "Git & GitHub", pct: 88 },
      { name: "Maven / Gradle", pct: 78 },
      { name: "JUnit / Mockito", pct: 72 },
      { name: "Postman", pct: 80 },
      { name: "Linux Basics", pct: 65 },
      { name: "System Design", pct: 60 },
    ],
  },
];

/* Ring carousel — core technologies shown as rotating chips */
const RING_ITEMS = ["Java", "Spring", "REST", "SQL", "JWT", "Docker", "Git", "Kafka"];

/* ---------------------------------------------------------
   3. EXPERIENCE — sample placeholder entries (data-driven)
   --------------------------------------------------------- */
const EXPERIENCE_DATA = [
  {
    role: "Full Stack Java Developer",
    company: "Worth Technology Pvt. Ltd",
    type: "Full-time",
    dates: "March-2026 — Present",
    logoText: "C1",
    description: "Working across the stack to build and maintain web applications, from REST APIs in Spring Boot down to the MySQL schema behind them.",
    points: [
      "Built and maintained REST APIs consumed by a React front end",
      "Wrote unit and integration tests with JUnit and Mockito",
      "Collaborated with the team on code reviews and Git workflows",
    ],
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
  },
  {
    role: "Java Developer Intern",
    company: "Infotek Software System Pvt. Ltd",
    type: "Internship",
    dates: "April-2025 — March-2026",
    logoText: "C2",
    description: "Learned production Java development practices while contributing small features and fixes under senior developer guidance.",
    points: [
      "Implemented CRUD modules using Spring Data JPA and Hibernate",
      "Fixed bugs and wrote Postman test collections for internal APIs",
      "Paired on refactors to improve code readability",
    ],
    tags: ["Java", "Hibernate", "JPA", "Postman"],
  },
  {
    role: "Software Development Intern",
    company: "Mentore Solution",
    type: "Internship",
    dates: "Jun-2024 — April-2025",
    logoText: "C3",
    description: "First hands-on experience shipping code in a team environment, focused on front-end features and small backend tasks.",
    points: [
      "Built responsive UI components with HTML, CSS and JavaScript",
      "Assisted with basic SQL queries and data cleanup tasks",
      "Practiced Git branching and pull-request workflows",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Git"],
  },
];
/* ---------------------------------------------------------
   4. PROJECTS — 7 professional project entries
   --------------------------------------------------------- */

const PROJECTS_DATA = [

  {
    id: 1,
    title: "Library Management System",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    tech: ["Java", "Spring Boot", "MySQL"],
    description:
      "A full-stack library management system for managing books, students, issue and return operations, and library records.",
    role: "Full Stack Developer",
    duration: "3 Months",
    keyFeature: "Book issue, return and student management",
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 2,
    title: "Spring Boot REST API",
    category: "Backend / API",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    tech: ["Spring Boot", "REST API", "JWT"],
    description:
      "A secure REST API designed for frontend and external application integration with authentication and role-based access.",
    role: "Backend Developer",
    duration: "2 Months",
    keyFeature: "JWT authentication and RESTful services",
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 3,
    title: "Modern Web Dashboard",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
    tech: ["React.js", "JavaScript", "CSS"],
    description:
      "A responsive and interactive web dashboard designed to present application data through clean UI components and reusable frontend modules.",
    role: "Frontend Developer",
    duration: "2 Months",
    keyFeature: "Responsive dashboard with reusable components",
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 4,
    title: "Database Management Application",
    category: "Database",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=85",
    tech: ["MySQL", "JDBC", "Hibernate"],
    description:
      "A database-driven application focused on efficient data storage, retrieval, relationships, and transaction management.",
    role: "Java Developer",
    duration: "1.5 Months",
    keyFeature: "CRUD operations and relational database design",
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 5,
    title: "Microservices Application",
    category: "Microservices",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tech: ["Spring Cloud", "Docker", "Kafka"],
    description:
      "A distributed application architecture demonstrating independent services, containerization, service communication, and event-driven processing.",
    role: "Backend Developer",
    duration: "3 Months",
    keyFeature: "Independent services with event-driven communication",
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 6,
    title: "Enterprise Full Stack Application",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    tech: ["Java", "Angular", "PostgreSQL"],
    description:
      "An enterprise-style full-stack application combining a Java backend with an Angular frontend and PostgreSQL database.",
    role: "Full Stack Developer",
    duration: "4 Months",
    keyFeature: "End-to-end frontend, backend and database integration",
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 7,
    title: "Java Testing & Build Automation",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    tech: ["Java", "Maven", "JUnit"],
    description:
      "A Java development project demonstrating automated builds, dependency management, unit testing, and maintainable application development.",
    role: "Java Developer",
    duration: "1 Month",
    keyFeature: "Automated testing and Maven-based build management",
    githubUrl: "",
    liveUrl: "",
  },

];

/* ---------------------------------------------------------
   Utilities
   --------------------------------------------------------- */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initMobileNav();
  initScrollSpyAndProgress();
  initReveals();
  renderSkills();
  renderRing();
  renderExperience();
  initProjectsCarousel();
  initGitHubCard();
  initContactForm();
  initResumeModal();
  initBackToTop();
  $("#footerYear").textContent = new Date().getFullYear();
});

/* ---------------------------------------------------------
   Header shrink + scroll progress + scroll-spy
   --------------------------------------------------------- */
function initHeaderScroll() {
  const header = $("#siteHeader");
  window.addEventListener("scroll", () => {
    header.style.background = window.scrollY > 12 ? "rgba(18,16,38,0.92)" : "rgba(18,16,38,0.72)";
  }, { passive: true });
}

function initScrollSpyAndProgress() {
  const bar = $("#scrollProgress");
  const sections = $$("main section[id]");
  const navLinks = $$(".nav__link[data-nav]");

  function onScroll() {
    const doc = document.documentElement;
    const scrollTop = window.scrollY;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (scrollTop / max) * 100 : 0;
    bar.style.width = pct + "%";

    let currentId = sections[0]?.id;
    const offset = 90;
    for (const sec of sections) {
      if (sec.getBoundingClientRect().top - offset <= 0) currentId = sec.id;
    }
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + currentId);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------------------------------------------------
   Mobile hamburger menu
   --------------------------------------------------------- */
function initMobileNav() {
  const btn = $("#hamburgerBtn");
  const nav = $("#siteNav");

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });

  $$(".nav__link, .nav__cta", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------
   Reveal-on-scroll (Intersection Observer)
   --------------------------------------------------------- */
function initReveals() {
  const targets = $$("[data-reveal]");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach((t) => io.observe(t));
}

/* ---------------------------------------------------------
   Skills — categorized progress bars
   --------------------------------------------------------- */
function renderSkills() {
  const grid = $("#skillsGrid");
  grid.innerHTML = SKILLS_DATA.map((cat, i) => `
    <div class="skill-cat" style="--i:${i}" data-reveal>
      <div class="skill-cat__head">
        <span class="skill-cat__dot" style="background:${cat.color}"></span>
        <span class="skill-cat__name">${cat.name}</span>
      </div>
      ${cat.skills.map((s) => `
        <div class="skill">
          <div class="skill__top">
            <span class="skill__name">${s.name}</span>
            <span class="skill__pct">${s.pct}%</span>
          </div>
          <div class="skill__track">
            <div class="skill__fill" data-pct="${s.pct}" style="background:${cat.color}"></div>
          </div>
        </div>
      `).join("")}
    </div>
  `).join("");

  // re-observe newly injected cards for reveal
  $$(".skill-cat", grid).forEach((el) => {
    if (prefersReducedMotion) { el.classList.add("is-visible"); }
  });
  initReveals();

  // animate bar fills once visible
  const fills = $$(".skill__fill", grid);
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    fills.forEach((f) => (f.style.width = f.dataset.pct + "%"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.width = fill.dataset.pct + "%";
          io.unobserve(fill);
        }
      });
    }, { threshold: 0.4 });
    fills.forEach((f) => io.observe(f));
  }
}

/* ---------------------------------------------------------
   Rotating ring carousel of core technologies
   --------------------------------------------------------- */
function renderRing() {
  const track = $("#ringTrack");
  const ring = $("#skillRing");
  const n = RING_ITEMS.length;

  track.innerHTML = RING_ITEMS.map((item) => {
    return `<div class="ring__item"><span class="ring__item-inner">${item}</span></div>`;
  }).join("");

  // fix positioning using JS since translate % is relative to element size, not container
  function positionItems() {
    const size = ring.clientWidth;
    const r = size / 2 - 30;
    $$(".ring__item", track).forEach((el, i) => {
      const angle = (360 / n) * i * (Math.PI / 180);
      const x = r * Math.sin(angle);
      const y = -r * Math.cos(angle);
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
  positionItems();
  window.addEventListener("resize", positionItems);

  // pause rotation on hover/touch
  ["mouseenter", "focusin", "touchstart"].forEach((evt) =>
    ring.addEventListener(evt, () => (ring.dataset.paused = "true"), { passive: true })
  );
  ["mouseleave", "focusout", "touchend"].forEach((evt) =>
    ring.addEventListener(evt, () => (ring.dataset.paused = "false"), { passive: true })
  );
}

/* ---------------------------------------------------------
   Experience timeline
   --------------------------------------------------------- */
function renderExperience() {
  const list = $("#timelineList");
  list.innerHTML = EXPERIENCE_DATA.map((exp) => `
    <div class="timeline-item">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="exp-card">
        <div class="exp-card__top">
          <div class="exp-card__id">
            <div class="exp-card__logo" aria-hidden="true">${exp.logoText}</div>
            <div>
              <div class="exp-card__role">${exp.role}</div>
              <div class="exp-card__company">${exp.company}</div>
            </div>
          </div>
          <div class="exp-card__badges">
            ${exp.type === "Internship" ? '<span class="badge badge-intern">Internship</span>' : '<span class="badge">Full-time</span>'}
            <span class="badge badge-dates">${exp.dates}</span>
          </div>
        </div>
        <p class="exp-card__desc">${exp.description}</p>
        <ul class="exp-card__points">
          ${exp.points.map((p) => `<li>${p}</li>`).join("")}
        </ul>
        <div class="exp-card__tags">
          ${exp.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

/* ---------------------------------------------------------
   Projects carousel — flip cards, drag/swipe, arrows, autoplay
   --------------------------------------------------------- */
function initProjectsCarousel() {
  const track = $("#carouselTrack");
  const viewport = $("#carouselViewport");
  const dotsWrap = $("#carouselDots");
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");

  track.innerHTML = PROJECTS_DATA.map((p) => `
    <div class="project-card" data-id="${p.id}">
      <div class="project-card__inner">
        <div class="project-card__face project-card__front">
          <div class="project-card__img">
            <img src="${p.image}" alt="${p.title} preview" loading="lazy">
            <span class="project-card__cat">${p.category}</span>
          </div>
          <div class="project-card__body">
            <div class="project-card__title">${p.title}</div>
            <div class="project-card__tech">
              ${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
            <div class="project-card__hint">↻ tap to flip</div>
          </div>
        </div>
        <div class="project-card__face project-card__back">
          <div class="project-card__back-title">${p.title}</div>
          <div class="project-card__back-desc">${p.description}</div>
          <div class="project-card__meta">
            <div><span>Role</span>${p.role}</div>
            <div><span>Duration</span>${p.duration}</div>
            <div style="grid-column:1/-1;"><span>Key feature</span>${p.keyFeature}</div>
          </div>
          <div class="project-card__back-actions">
            <a href="${p.githubUrl || "#"}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm btn-block ${p.githubUrl ? "" : "is-disabled"}" ${p.githubUrl ? "" : 'aria-disabled="true" tabindex="-1"'}>GitHub</a>
            <a href="${p.liveUrl || "#"}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-block ${p.liveUrl ? "" : "is-disabled"}" ${p.liveUrl ? "" : 'aria-disabled="true" tabindex="-1"'}>Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  const cards = $$(".project-card", track);

  // flip on click (but not when the click originated from a drag)
  let dragMoved = false;
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (dragMoved) return;
      if (e.target.closest("a")) return; // let links work without flipping
      card.classList.toggle("is-flipped");
    });
  });

  function cardsPerView() {
    const w = window.innerWidth;
    if (w <= 760) return 1;
    if (w <= 1080) return 2;
    return 3;
  }

  let index = 0;
  let autoplayTimer = null;

  function totalPages() {
    return Math.max(1, cards.length - cardsPerView() + 1);
  }

  function renderDots() {
    const pages = totalPages();
    dotsWrap.innerHTML = Array.from({ length: pages }, (_, i) =>
      `<button class="carousel__dot ${i === index ? "is-active" : ""}" aria-label="Go to project ${i + 1}"></button>`
    ).join("");
    $$(".carousel__dot", dotsWrap).forEach((dot, i) => {
      dot.addEventListener("click", () => goTo(i));
    });
  }

  function update() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 22;
    track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
    $$(".carousel__dot", dotsWrap).forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  function goTo(i) {
    const pages = totalPages();
    index = ((i % pages) + pages) % pages;
    update();
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  prevBtn.addEventListener("click", () => { prev(); restartAutoplay(); });
  nextBtn.addEventListener("click", () => { next(); restartAutoplay(); });

  function startAutoplay() {
    if (prefersReducedMotion) return;
    stopAutoplay();
    autoplayTimer = setInterval(next, 4200);
  }
  function stopAutoplay() { if (autoplayTimer) clearInterval(autoplayTimer); }
  function restartAutoplay() { startAutoplay(); }

  viewport.addEventListener("mouseenter", stopAutoplay);
  viewport.addEventListener("mouseleave", startAutoplay);

  // drag / swipe support (mouse + touch)
  let startX = 0;
  let isDown = false;
  let startTranslate = 0;

  function getTranslateX() {
    const style = window.getComputedStyle(track);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41;
  }

  function pointerDown(x) {
    isDown = true;
    dragMoved = false;
    startX = x;
    startTranslate = getTranslateX();
    track.style.transition = "none";
    viewport.classList.add("is-dragging");
    stopAutoplay();
  }
  function pointerMove(x) {
    if (!isDown) return;
    const delta = x - startX;
    if (Math.abs(delta) > 6) dragMoved = true;
    track.style.transform = `translateX(${startTranslate + delta}px)`;
  }
  function pointerUp(x) {
    if (!isDown) return;
    isDown = false;
    viewport.classList.remove("is-dragging");
    track.style.transition = "";
    const delta = x - startX;
    if (delta < -60) next();
    else if (delta > 60) prev();
    else update();
    restartAutoplay();
    setTimeout(() => (dragMoved = false), 50);
  }

  viewport.addEventListener("mousedown", (e) => pointerDown(e.clientX));
  window.addEventListener("mousemove", (e) => pointerMove(e.clientX));
  window.addEventListener("mouseup", (e) => pointerUp(e.clientX));

  viewport.addEventListener("touchstart", (e) => pointerDown(e.touches[0].clientX), { passive: true });
  viewport.addEventListener("touchmove", (e) => pointerMove(e.touches[0].clientX), { passive: true });
  viewport.addEventListener("touchend", (e) => pointerUp(e.changedTouches[0].clientX));

  window.addEventListener("resize", () => {
    index = Math.min(index, totalPages() - 1);
    renderDots();
    update();
  });

  renderDots();
  update();
  startAutoplay();
}

/* ---------------------------------------------------------
   GitHub profile card — public REST API with graceful fallback
   --------------------------------------------------------- */
async function initGitHubCard() {
  const card = $("#githubCard");
  const username = CONFIG.githubUsername;
  const fallback = $("#ghFallback");

  const looksLikePlaceholder = !username || username.startsWith("YOUR_");
  if (looksLikePlaceholder) {
    showGhFallback("Add your GitHub username in CONFIG inside script.js to load live stats.");
    return;
  }

  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
    if (!res.ok) throw new Error("GitHub API error: " + res.status);
    const user = await res.json();

    $("#ghAvatar").src = user.avatar_url;
    $("#ghAvatar").alt = `${user.login} on GitHub`;
    $("#ghAvatar").classList.remove("skeleton");
    $("#ghName").textContent = user.name || user.login;
    $("#ghLogin").textContent = "@" + user.login;
    $("#ghBio").textContent = user.bio || "Building software, one commit at a time.";
    $("#ghRepos").textContent = user.public_repos ?? "–";
    $("#ghFollowers").textContent = user.followers ?? "–";
    $("#ghFollowing").textContent = user.following ?? "–";

    // best-effort repo list; failures here don't break the card
    try {
      const repoRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=4`);
      if (repoRes.ok) {
        const repos = await repoRes.json();
        $("#ghRepoList").innerHTML = repos.slice(0, 4).map((r) => `
          <div class="repo-row">
            <span class="repo-row__name">${r.name}</span>
            <span class="repo-row__stars">★ ${r.stargazers_count}</span>
          </div>
        `).join("");
      }
    } catch (_) { /* repo list is optional, ignore quietly */ }

  } catch (err) {
    showGhFallback("Couldn't load live GitHub stats right now (rate limit, network issue, or username not found).");
  }

  function showGhFallback(msg) {
    fallback.textContent = msg;
    fallback.classList.add("is-visible");
    $("#ghAvatar").classList.remove("skeleton");
    $("#ghName").textContent = username && !looksLikePlaceholder ? username : "GitHub Profile";
    $("#ghLogin").textContent = "@" + (username || "Yogeshnagpure10");
    $("#ghBio").textContent = "Live stats unavailable — visit the profile directly.";
    $("#ghRepos").textContent = "–";
    $("#ghFollowers").textContent = "–";
    $("#ghFollowing").textContent = "–";
  }
}

/* ---------------------------------------------------------
   Contact form — validation + WhatsApp deep link
   --------------------------------------------------------- */
function initContactForm() {
  const form = $("#contactForm");
  const status = $("#formStatus");

  const validators = {
    fieldName: (v) => v.trim().length > 0,
    fieldEmail: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    fieldPhone: (v) => v.trim() === "" || /^[0-9+\-\s()]{7,20}$/.test(v.trim()),
    fieldSubject: (v) => v.trim().length > 0,
    fieldMessage: (v) => v.trim().length > 0,
  };

  function validateField(input) {
    const field = input.closest(".field");
    const valid = validators[input.id] ? validators[input.id](input.value) : true;
    field.classList.toggle("has-error", !valid);
    return valid;
  }

  $$("input, textarea", form).forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.closest(".field").classList.contains("has-error")) validateField(input);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.classList.remove("is-success", "is-error");

    const inputs = $$("input, textarea", form);
    const allValid = inputs.map(validateField).every(Boolean);

    if (!allValid) {
      status.textContent = "Please fix the highlighted fields above.";
      status.classList.add("is-error");
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const messageLines = [
      `New portfolio message`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      `Subject: ${data.subject}`,
      `Message: ${data.message}`,
    ].filter(Boolean);

    const waNumber = CONFIG.whatsappNumber.replace(/\D/g, "");
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(messageLines.join("\n"))}`;

    // NOTE: this opens a pre-filled WhatsApp chat — it does not itself
    // guarantee delivery. To send email directly, wire this form up to
    // a backend or an email-sending service (e.g. Formspree, EmailJS
    // with a server-side key) instead of exposing secrets here.
    window.open(waUrl, "_blank", "noopener,noreferrer");

    status.textContent = "Message prepared successfully — continue sending it from WhatsApp.";
    status.classList.add("is-success");
    form.reset();
  });
}

/* ---------------------------------------------------------
   Resume modal
   --------------------------------------------------------- */
function initResumeModal() {
  const modal = $("#resumeModal");
  const body = $("#resumeModalBody");
  const openBtn = $("#openResumeBtn");
  const closeBtn = $("#closeResumeBtn");
  let lastFocused = null;

  function open() {
    lastFocused = document.activeElement;
    const path = CONFIG.resumePdfPath;
    const looksLikePlaceholder = path.includes("YOUR_RESUME_PDF");
    body.innerHTML = looksLikePlaceholder
      ? `<div class="modal__fallback">Add your resume PDF to <code>/assets</code> and set <code>resumePdfPath</code> in <code>CONFIG</code> (script.js) to preview it here.</div>`
      : `<iframe src="${path}" title="Resume PDF preview"></iframe>`;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function close() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    body.innerHTML = "";
    if (lastFocused) lastFocused.focus();
  }

  openBtn.addEventListener("click", open);
  $("#footerResumeLink")?.addEventListener("click", (e) => { e.preventDefault(); open(); });
  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });
}

/* ---------------------------------------------------------
   Back to top button
   --------------------------------------------------------- */
function initBackToTop() {
  const btn = $("#backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 480);
  }, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}
