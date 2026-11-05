document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mobileToggle");
  const navigation = document.getElementById("mainNavigation");
  if (!toggle || !navigation) return;

  function setOpen(open, restoreFocus = false) {
    navigation.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    if (!open && restoreFocus) toggle.focus();
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  navigation.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      event.preventDefault();
      setOpen(false, true);
    }
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 991 && navigation.classList.contains("is-open") &&
        !event.target.closest(".nav-container")) {
      setOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) setOpen(false);
  });
});
