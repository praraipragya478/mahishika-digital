document.addEventListener("DOMContentLoaded", () => {
  const triggers = Array.from(document.querySelectorAll(".menu-trigger"));

  function closeMenus(returnFocus = false) {
    triggers.forEach((trigger) => {
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      const wasOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", "false");
      if (panel) panel.hidden = true;
      if (returnFocus && wasOpen) trigger.focus();
    });
  }

  function openMenu(trigger, focusFirst = false) {
    closeMenus();
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;
    panel.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    if (focusFirst) panel.querySelector("a")?.focus();
  }

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") === "true";
      if (open) closeMenus();
      else openMenu(trigger);
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        openMenu(trigger, true);
      } else if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        triggers[(index + direction + triggers.length) % triggers.length].focus();
      } else if (event.key === "Escape") {
        event.preventDefault();
        closeMenus(true);
      }
    });
  });

  document.querySelectorAll(".mega-menu").forEach((panel) => {
    const links = Array.from(panel.querySelectorAll("a"));
    links.forEach((link, index) => {
      link.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          const direction = event.key === "ArrowDown" ? 1 : -1;
          links[(index + direction + links.length) % links.length].focus();
        } else if (event.key === "Escape") {
          event.preventDefault();
          closeMenus(true);
        } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          const currentPanel = panel;
          const otherTrigger = triggers.find((item) =>
            item.getAttribute("aria-controls") !== currentPanel.id
          );
          if (otherTrigger) {
            event.preventDefault();
            openMenu(otherTrigger, true);
          }
        }
      });
      link.addEventListener("click", () => closeMenus());
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".has-mega")) closeMenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && triggers.some((item) => item.getAttribute("aria-expanded") === "true")) {
      closeMenus(true);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 991) closeMenus();
  });
});
