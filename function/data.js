var LOGO_SPIN_MS = 600;

function runLogoSpin(which, done) {
    var headerLogo = document.querySelector(".header-logo");
    var sidebarLogo = document.querySelector(".sidebar-logo");
    var spinHeader = which === "header" && headerLogo;
    var spinSidebar = (which === "sidebar" || which === "overlay") && sidebarLogo;

    function removeSpinAndSnapBack(el) {
        if (!el) return;
        el.style.transition = "none";
        el.classList.remove("logo-spin");
        el.offsetHeight;
        el.style.transition = "";
    }

    if (spinHeader) headerLogo.classList.add("logo-spin");
    if (spinSidebar) sidebarLogo.classList.add("logo-spin");

    setTimeout(function () {
        removeSpinAndSnapBack(spinHeader ? headerLogo : null);
        removeSpinAndSnapBack(spinSidebar ? sidebarLogo : null);
        if (done) done();
    }, LOGO_SPIN_MS);
}

function toggleNav(source) {
    source = source || "header";
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("sidebarOverlay");
    var isOpening = sidebar && !sidebar.classList.contains("active");
    var spinWhich = isOpening ? "header" : "sidebar";

    runLogoSpin(spinWhich, function () {
        if (sidebar) sidebar.classList.toggle("active");
        if (overlay) overlay.classList.toggle("active", sidebar && sidebar.classList.contains("active"));
        setTimeout(function () {
            runLogoSpin(spinWhich, null);
        }, 50);
    });
}

/* Dark / light theme */
var THEME_KEY = "neural-control-theme";

function getStoredTheme() {
    try {
        return localStorage.getItem(THEME_KEY) || "dark";
    } catch (e) {
        return "dark";
    }
}

function setTheme(theme) {
    var body = document.body;
    if (!body) return;
    theme = theme === "light" ? "light" : "dark";
    body.setAttribute("data-theme", theme);
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
}

function initTheme() {
    var saved = getStoredTheme();
    setTheme(saved);
    var btn = document.getElementById("themeToggle");
    if (btn) {
        var checkbox = btn.querySelector(".bb8-toggle__checkbox");
        if (checkbox) {
            // Set checkbox state based on theme (checked = light, unchecked = dark)
            checkbox.checked = saved === "light";
            checkbox.addEventListener("change", function () {
                var newTheme = this.checked ? "light" : "dark";
                setTheme(newTheme);
            });
        }
    }
}

/* Fade in when in viewport, fade out when leaving */
function initScrollFade() {
    const blocks = document.querySelectorAll("[data-scroll]");
    if (!blocks.length) return;

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    blocks.forEach(function (block) {
        observer.observe(block);
    });
}

/* -------- Mouse spotlight (follows cursor on .main) -------- */
function initSpotlight() {
    var main = document.querySelector(".main");
    if (!main) return;
    var spotlight = document.createElement("div");
    spotlight.className = "spotlight";
    spotlight.setAttribute("aria-hidden", "true");
    main.appendChild(spotlight);
    function move(e) {
        var rect = main.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        spotlight.style.setProperty("--spot-x", x + "px");
        spotlight.style.setProperty("--spot-y", y + "px");
    }
    main.addEventListener("mousemove", move);
    main.addEventListener("mouseleave", function () {
        spotlight.style.setProperty("--spot-x", "-999px");
        spotlight.style.setProperty("--spot-y", "-999px");
    });
}

/* -------- Keyboard shortcuts -------- */
function initKeyboardShortcuts() {
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            var sidebar = document.getElementById("sidebar");
            var overlay = document.getElementById("sidebarOverlay");
            if (sidebar && sidebar.classList.contains("active")) {
                toggleNav("overlay");
            } else {
                closeShortcutsModal();
            }
        }
        if (e.key === "?" && !e.ctrlKey && !e.metaKey && !e.altKey) {
            var target = e.target;
            if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
            toggleShortcutsModal();
        }
    });
}

function getShortcutsModal() {
    var existing = document.getElementById("shortcutsModal");
    if (existing) return existing;
    var overlay = document.createElement("div");
    overlay.id = "shortcutsModalOverlay";
    overlay.className = "shortcuts-overlay";
    overlay.setAttribute("aria-hidden", "true");
    var box = document.createElement("div");
    box.id = "shortcutsModal";
    box.className = "shortcuts-modal";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Keyboard shortcuts");
    box.innerHTML =
        '<h3 class="shortcuts-title">Keyboard shortcuts</h3>' +
        '<ul class="shortcuts-list">' +
        "<li><kbd>Esc</kbd> Close sidebar / this dialog</li>" +
        "<li><kbd>?</kbd> Show this help</li>" +
        "<li><kbd>M</kbd> Open menu (when focused)</li>" +
        "</ul>" +
        '<button type="button" class="shortcuts-close" onclick="closeShortcutsModal()">Close</button>';
    overlay.appendChild(box);
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closeShortcutsModal();
    });
    document.body.appendChild(overlay);
    return overlay;
}

function toggleShortcutsModal() {
    var overlay = getShortcutsModal();
    var isHidden = overlay.getAttribute("aria-hidden") !== "false";
    overlay.setAttribute("aria-hidden", !isHidden);
    overlay.classList.toggle("active", isHidden);
}

function closeShortcutsModal() {
    var overlay = document.getElementById("shortcutsModalOverlay");
    if (overlay) {
        overlay.setAttribute("aria-hidden", "true");
        overlay.classList.remove("active");
    }
}

/* -------- Time-based greeting (dashboard) -------- */
function initGreeting() {
    var el = document.getElementById("greeting");
    if (!el) return;
    var h = new Date().getHours();
    var msg = "Good evening.";
    if (h < 12) msg = "Good morning.";
    else if (h < 18) msg = "Good afternoon.";
    el.textContent = msg;
}

/* -------- Typing effect for main title (dashboard) -------- */
function initTypingTitle() {
    var el = document.getElementById("mainTitle");
    var text = el && el.getAttribute("data-typing");
    if (!el || !text) return;
    el.textContent = "";
    el.classList.remove("typing-done");
    var i = 0;
    var speed = 80;
    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            el.classList.add("typing-done");
        }
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = text;
        el.classList.add("typing-done");
    } else {
        setTimeout(type, 400);
    }
}

/* -------- Hero roles cycling (Figma portfolio–style) -------- */
function initHeroRoles() {
    var el = document.getElementById("heroRoles");
    if (!el) return;
    var roles = ["Developers", "PC223", "Brylle's Team"];
    var index = 0;
    var word = "";
    var isDeleting = false;
    var speed = 120;
    function tick() {
        var current = roles[index];
        if (isDeleting) {
            word = current.substring(0, word.length - 1);
            speed = 60;
        } else {
            word = current.substring(0, word.length + 1);
            speed = 120;
        }
        el.textContent = word;
        if (!isDeleting && word === current) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && word === "") {
            isDeleting = false;
            index = (index + 1) % roles.length;
            speed = 400;
        }
        setTimeout(tick, speed);
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = roles[0];
    } else {
        setTimeout(tick, 1200);
    }
}

function onReady() {
    initTheme();
    initScrollFade();
    initSpotlight();
    initKeyboardShortcuts();
    initGreeting();
    initTypingTitle();
    initHeroRoles();
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
} else {
    onReady();
}