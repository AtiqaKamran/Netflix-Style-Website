/* =========================
   SELECT ELEMENTS
========================= */

const themeBtn = document.getElementById("themeBtn");

const changeTextBtn = document.getElementById("changeTextBtn");

const heroText = document.getElementById("heroText");

const toggleBtn = document.getElementById("toggleBtn");

const movieContainer = document.querySelector(".movieContainer");

const navLinks = document.querySelectorAll("nav ul li a");


/* =========================
   DARK / LIGHT MODE
========================= */

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

});


/* =========================
   HERO TEXT BUTTON
========================= */

changeTextBtn.addEventListener("click", function () {

    if (heroText.innerText.includes("Unlimited")) {

        heroText.innerHTML =
            "Enjoy Watching<br>on Netflix!";

        changeTextBtn.innerHTML =
            "✓ Enjoy Watching";

    } else {

        heroText.innerHTML =
            "Unlimited Movies,<br>TV Shows and More";

        changeTextBtn.innerHTML =
            "▶ Explore Now";

    }

});


/* =========================
   SHOW / HIDE MOVIES
========================= */

toggleBtn.addEventListener("click", function () {

    if (movieContainer.style.display === "none") {

        movieContainer.style.display = "grid";

        toggleBtn.innerText = "Hide Movies";

    } else {

        movieContainer.style.display = "none";

        toggleBtn.innerText = "Show Movies";

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});