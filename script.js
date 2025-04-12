const typingText = document.getElementById("typing-text");
const roles = ["WordPress Developer", "Content Creator", "Web Designer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  const currentText = isDeleting
    ? currentRole.substring(0, charIndex--)
    : currentRole.substring(0, charIndex++);

  typingText.textContent = `I am a ${currentText}`;

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
