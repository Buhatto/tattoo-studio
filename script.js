document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "rgba(10, 10, 10, 0.95)";
      header.style.padding = "15px 50px";
    } else {
      header.style.background = "rgba(15, 15, 15, 0.9)";
      header.style.padding = "20px 50px";
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  const bookingForm = document.querySelector("#booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(bookingForm);
      const name = formData.get("name");

      const submitBtn = bookingForm.querySelector("button");
      submitBtn.textContent = "Отправляем...";
      submitBtn.disabled = true;

      setTimeout(() => {
        alert(
          `Спасибо, ${name}! Мы свяжемся с вами в течение часа для подтверждения времени.`,
        );
        bookingForm.reset();
        submitBtn.textContent = "Записаться на сеанс";
        submitBtn.disabled = false;
      }, 1500);
    });
  }
});

const phoneInput = document.querySelector("input[name='phone']");
phoneInput.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^\d+() -]/g, "");
});
