"use strict";

import "./style/style.css";

function toggleMenu(btn, menu) {
    btn.addEventListener("click", function () {
        menu.classList.toggle("toggle");
    });
}

const btn = document.querySelector(".genre");
const menu = document.querySelector(".genres");

toggleMenu(btn, menu);

function slider() {
    const dots = document.querySelector(".dots");
    const images = document.querySelectorAll(".book");
    const slider = document.querySelector(".slider");
    let currentIndex = 0;
    function hideImages(index) {
        dots.innerHTML = "";
        for (let i = 0; i < images.length; i++) {
            const dot = document.createElement("button");
            dot.innerHTML = "&#9675;";
            dot.dataset.index = `${i}`;
            if (i === index) {
                images[i].classList.remove("toggle");
                dot.classList.add("choosed");
                currentIndex = i;
            } else images[i].classList.add("toggle");
            dots.appendChild(dot);
        }
    }
    hideImages(currentIndex);
    slider.addEventListener("click", function (event) {
        if (
            event.target.dataset.direction === "right" &&
            currentIndex < images.length - 1
        ) {
            currentIndex++;
            hideImages(currentIndex);
        } else if (
            event.target.dataset.direction === "left" &&
            currentIndex >= 1
        ) {
            currentIndex--;
            hideImages(currentIndex);
        } else if (event.target.dataset.index) {
            currentIndex = +event.target.dataset.index;
            hideImages(currentIndex);
        }
    });
    function setImage() {
        if (currentIndex < images.length - 1) currentIndex++;
        hideImages(currentIndex);
    }
    setInterval(setImage, 5000);
}

slider();
