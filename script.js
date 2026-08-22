document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // MOBILE MENU
    // =========================
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector("#mobile-menu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", function () {
            const isOpen =
                hamburger.getAttribute("aria-expanded") === "true";

            hamburger.setAttribute("aria-expanded", String(!isOpen));
            hamburger.setAttribute(
                "aria-label",
                isOpen ? "Open menu" : "Close menu"
            );

            mobileMenu.classList.toggle("open", !isOpen);
        });

        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                hamburger.setAttribute("aria-expanded", "false");
                hamburger.setAttribute("aria-label", "Open menu");
                mobileMenu.classList.remove("open");
            });
        });
    }


    // =========================
    // CONSULTATION FORM
    // =========================
    const consultationForm =
        document.querySelector("#consultation-form");

    const formStatus =
        document.querySelector("#form-status");

    if (consultationForm) {
        consultationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fullName =
                document.querySelector("#fullName").value.trim();

            const phone =
                document.querySelector("#phone").value.trim();

            const email =
                document.querySelector("#email").value.trim();

            const preferredDate =
                document.querySelector("#preferredDate").value;

            const matter =
                document.querySelector("#matter").value;

            const description =
                document.querySelector("#description").value.trim();

            const contactMethod =
                document.querySelector("#contactMethod").value;


            const subject =
                "Consultation Request - " + fullName;

            const body =
                "NEW CONSULTATION REQUEST\n\n" +
                "Full Name: " + fullName + "\n" +
                "Phone Number: " + phone + "\n" +
                "Email Address: " + email + "\n" +
                "Preferred Consultation Date: " + preferredDate + "\n" +
                "Nature of Legal Matter: " + matter + "\n" +
                "Preferred Contact Method: " + contactMethod + "\n\n" +
                "Brief Description:\n" +
                description;


            const mailto =
                "mailto:oloyedeayooluwa@gmail.com" +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);


            // Show confirmation message
            if (formStatus) {
                formStatus.classList.add("show");
            }

            // Open the user's email application
            window.location.href = mailto;
        });
    }

});
