const typingText = document.getElementById("typing-text");
const roles = ["WordPress Developer", "Content Creator", "Web Designer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = "";

function typeEffect() {
  const fullText = roles[roleIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  typingText.textContent = `I am a ${currentText}`;

  if (!isDeleting && charIndex === fullText.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 70);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
