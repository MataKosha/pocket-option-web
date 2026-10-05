// ===== Настройки: меняются здесь =====
const CONFIG = {
  brand: "Pocket Option",                                   // название сайта
  refLink: "https://pocket-friends.co/r/xte1qtcfbf"     // реферальная ссылка клиента
};

document.querySelectorAll("[data-brand]").forEach(el => el.textContent = CONFIG.brand);
document.title = CONFIG.brand + " — партнёрский обзор платформы Pocket Option";

document.querySelectorAll("[data-ref]").forEach(a => {
  a.href = CONFIG.refLink;
  a.target = "_blank";
  a.rel = "noopener sponsored";
  a.addEventListener("click", () => {
    // трекинг клика: подключится к GA / GTM / Метрике, если они есть на странице
    const place = a.dataset.track || "link";
    (window.dataLayer = window.dataLayer || []).push({ event: "ref_click", place });
    if (typeof gtag === "function") gtag("event", "ref_click", { place });
    if (typeof ym === "function" && window.YM_ID) ym(window.YM_ID, "reachGoal", "ref_click");
  });
});

// видео: автозапуск без звука, кнопка паузы, уважаем reduce-motion
const v = document.getElementById("promo"), t = document.getElementById("toggle");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduce) v.play().catch(() => {});
const sync = () => { const p = v.paused; t.textContent = p ? "Смотреть" : "Пауза"; t.setAttribute("aria-pressed", String(p)); };
t.addEventListener("click", () => { v.paused ? v.play() : v.pause(); });
v.addEventListener("play", sync); v.addEventListener("pause", sync); sync();
