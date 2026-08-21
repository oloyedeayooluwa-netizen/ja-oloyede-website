document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector("#mobile-menu");

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener("click", function () {
        const isOpen = hamburger.getAttribute("aria-expanded") === "true";

        hamburger.setAttribute("aria-expanded", String(!isOpen));
        hamburger.setAttribute(
            "aria-label",
            isOpen ? "Open menu" : "Close menu"
        );

        mobileMenu.classList.toggle("open", !isOpen);
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "Open menu");
            mobileMenu.classList.remove("open");
        });
    });
});
