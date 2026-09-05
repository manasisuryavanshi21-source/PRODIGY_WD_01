// =====================================================
// NAVIGATION MENU
// =====================================================

const navbar = document.getElementById("navbar");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

const links = document.querySelectorAll(".nav-links a");


// =====================================================
// MOBILE MENU
// =====================================================

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close mobile menu after clicking a link

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// =====================================================
// CHANGE NAVBAR WHEN SCROLLING
// =====================================================

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// =====================================================
// ACTIVE NAVIGATION LINK
// =====================================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    links.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// =====================================================
// NAVBAR HOVER EFFECT
// =====================================================

links.forEach(function (link) {

    link.addEventListener("mouseenter", function () {

        link.style.transform = "translateY(-2px)";

    });

    link.addEventListener("mouseleave", function () {

        link.style.transform = "translateY(0)";

    });

});
