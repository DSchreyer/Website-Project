document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("show"));
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("show"))
    );
  }

  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector('input[name="userName"]');
    const email = form.querySelector('input[name="userEmail"]');
    const message = form.querySelector('textarea[name="userMessage"]');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value.trim()) return alert("Please enter your name.");
    if (!emailPattern.test(email.value.trim())) {
      return alert("Please enter a valid email address.");
    }
    if (!message.value.trim()) return alert("Please enter your message.");

    form.submit();
  });
});
