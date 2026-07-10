

  // Animation d'apparition au scroll
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
if (lightbox && lightboxImg) {
  document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

