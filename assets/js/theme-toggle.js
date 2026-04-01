(() => {
  const root = document.documentElement;
  const storageKey = "theme";
  const sunPath =
    "M12 4.5a1 1 0 0 1 1 1v1.1a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1Zm0 11a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Zm6.36-2.5a1 1 0 0 1 0-2h1.12a1 1 0 1 1 0 2h-1.12Zm-13.86-1a1 1 0 0 1 1-1h1.12a1 1 0 0 1 0 2H5.5a1 1 0 0 1-1-1Zm10.2 5.2a1 1 0 0 1 1.42 0l.8.8a1 1 0 0 1-1.42 1.42l-.8-.8a1 1 0 0 1 0-1.42Zm-7.78 0a1 1 0 0 1 0 1.42l-.8.8A1 1 0 1 1 4.72 18l.8-.8a1 1 0 0 1 1.42 0Zm9.2-9.2a1 1 0 0 1 0-1.42l.8-.8a1 1 0 0 1 1.42 1.42l-.8.8a1 1 0 0 1-1.42 0Zm-9.2 0a1 1 0 0 1-1.42 0l-.8-.8A1 1 0 0 1 5.1 5.3l.8.8a1 1 0 0 1 0 1.42ZM12 17.4a1 1 0 0 1 1 1v1.1a1 1 0 1 1-2 0v-1.1a1 1 0 0 1 1-1Z";
  const moonPath = "M12 3.5a8.5 8.5 0 1 0 8.5 8.5A8.5 8.5 0 0 1 12 3.5Z";

  const syncToggleUI = () => {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    const path = btn.querySelector(".theme-icon path");
    const isDark = root.getAttribute("data-theme") === "dark";

    if (isDark) {
      if (path) path.setAttribute("d", moonPath);
    } else {
      if (path) path.setAttribute("d", sunPath);
    }
  };

  const applyTheme = (theme) => {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    syncToggleUI();
  };

  const stored = localStorage.getItem(storageKey);
  applyTheme(stored === "dark" ? "dark" : "light");

  const bindToggle = () => {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      const nextTheme = isDark ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem(storageKey, nextTheme);
    });

    syncToggleUI();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindToggle);
  } else {
    bindToggle();
  }
})();
