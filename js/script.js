// Toggle dropdown for language menu (mobile and desktop)
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = dropdown.querySelector(".dropdown-content");

  dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownContent.classList.toggle("show");
  });

  // Close dropdown if clicked outside
  window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownContent.classList.remove("show");
    }
  });

  // Scroll to top button (optional)
  const scrollTopBtn = document.createElement("div");
  scrollTopBtn.innerHTML = "⬆️";
  scrollTopBtn.className = "scroll-top-btn";
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('service_trnu4tr', 'template_26rhdnt', this)
    .then(function () {
      document.querySelector(".sent-message").style.display = "block";
      document.querySelector(".loading").style.display = "none";
      document.getElementById("contact-form").reset();
    }, function (error) {
      console.log('FAILED...', error);
      alert("Failed to send message. Please try again later.");
    });

  document.querySelector(".loading").style.display = "block";
});

