const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const footerCopy = document.getElementById("footer-copy");
if (footerCopy) {
  footerCopy.textContent = "© " + new Date().getFullYear() + " Swift Insight SDR Portfolio";
}

const form = document.getElementById("contact-form");
const savedOutput = document.getElementById("saved-output");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    localStorage.setItem("contactData", JSON.stringify(data));
    savedOutput.textContent = `Thanks ${data.name}, your message has been saved.`;
    form.reset();
  });
}