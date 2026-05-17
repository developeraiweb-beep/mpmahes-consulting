document.addEventListener("DOMContentLoaded", () => {

  /* ===========================
     REVEAL ON SCROLL
  =========================== */

  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach((element) => {

      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ===========================
     COUNTER ANIMATION
  =========================== */

  const counters = document.querySelectorAll(".counter");

  const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;
        const increment = target / 100;

        function animateCounter() {

          current += increment;

          if (current < target) {
            counter.innerText = Math.floor(current);
            requestAnimationFrame(animateCounter);
          } else {
            counter.innerText = target.toLocaleString() + "+";
          }
        }

        animateCounter();

        counterObserver.unobserve(counter);
      }
    });

  }, {
    threshold: 0.3
  });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  /* ===========================
     MOVING PARTNER LOGOS
  =========================== */

  const logoTrack = document.querySelector(".logo-track");

  if (logoTrack) {
    logoTrack.innerHTML += logoTrack.innerHTML;
  }

});