"use strict";

const switchButton = document.querySelector(".switchButton");
const switchButtonBall = document.querySelector(".switchButtonBall");
const body = document.querySelector("body");
const lightModeBody = document.querySelector(".lightModeBody");
const bodyTop = document.querySelector(".bodyTop");
const cards = document.querySelectorAll(".card");
const changingTexts = document.querySelectorAll(".changingText");

function toggleSwitch() {
  switchButton.classList.toggle("switchButtonDark");
  switchButtonBall.classList.toggle("switchButtonBallDark");
}

function togglePageColor() {
  if (body.classList.contains("lightModeBody")) {
    body.classList.replace("lightModeBody", "bodyDark");
    bodyTop.classList.replace("bodyTopLight", "bodyTopDark");
  } else {
    body.classList.replace("bodyDark", "lightModeBody");
    bodyTop.classList.replace("bodyTopDark", "bodyTopLight");
  }
}

function switchThemesCards() {
  cards.forEach((card, index) => {
    card.style.transition = `all .5s ease ${index / 12}s`;
    if (card.classList.contains("lightThemeCard")) {
      card.classList.replace("lightThemeCard", "darkThemeCard");
    } else {
      card.classList.replace("darkThemeCard", "lightThemeCard");
    }
  });
}

function switchThemesText() {
  changingTexts.forEach((changingText) => {
    if (changingText.classList.contains("lightThemeText")) {
      changingText.classList.replace("lightThemeText", "darkThemeText");
    } else {
      changingText.classList.replace("darkThemeText", "lightThemeText");
    }
  });
}

function toggleThemes() {
  toggleSwitch();
  togglePageColor();
  switchThemesCards();
  switchThemesText();
}

switchButton.addEventListener("click", toggleThemes);
