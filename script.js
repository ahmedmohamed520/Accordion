"use strict";

const accordion = document.querySelector(".accordion-list");
const illustration = document.querySelector(".card-illustration-img");
const bgPattern = document.querySelector(".card-pattern");

window.addEventListener("resize", () => {
    if (window.innerWidth < 1250) {
        if (illustration.getAttribute("src") === illustration.dataset.deskSrc) {
            illustration.setAttribute("src", illustration.dataset.mobileSrc);
        }
        if (bgPattern.getAttribute("src") === bgPattern.dataset.deskSrc) {
            bgPattern.setAttribute("src", bgPattern.dataset.mobileSrc);
        }
    } else {
        if (illustration.getAttribute("src") === illustration.dataset.mobileSrc) {
            illustration.setAttribute("src", illustration.dataset.deskSrc);
        }
        if (bgPattern.getAttribute("src") === bgPattern.dataset.mobileSrc) {
            bgPattern.setAttribute("src", bgPattern.dataset.deskSrc);
        }
    }
});
accordion.addEventListener("click", (e) => {
    let targetElement = e.target.closest(".accordion-btn");
    let linkImg = targetElement.querySelector(".accordion-icon");

    if (targetElement.classList.contains("accordion-btn")) {
        if (targetElement.classList.contains("active")) {
            targetElement.nextElementSibling.style.transform = "scaleY(0)";
            targetElement.nextElementSibling.style.height = 0;
            targetElement.classList.remove("active");
            linkImg.style.transform = "rotate(0)";
        } else {
            targetElement.nextElementSibling.style.transform = "scaleY(1)";
            targetElement.nextElementSibling.style.height = "auto";
            targetElement.classList.add("active");
            linkImg.style.transform = "rotate(-180deg)";
        }
    } else {
        // targetElement.nextElementSibling.style.display = "block";
        // targetElement.classList.remove("active");
    }
});
