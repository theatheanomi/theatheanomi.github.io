

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
const lightboxVideo = document.getElementById("lightbox-video");
const lightboxDesc = document.getElementById("lightbox-desc");

if (lightbox && lightboxImg && lightboxVideo) {
  document.querySelectorAll(".zoomable").forEach(el => {
    el.addEventListener("click", () => {
      // reset des animations pour qu'elles se relancent à chaque clic
      lightboxImg.style.animation = "none";
      lightboxVideo.style.animation = "none";
      lightboxDesc.style.animation = "none";
      void lightboxImg.offsetWidth;
      lightboxImg.style.animation = "";
      lightboxVideo.style.animation = "";
      lightboxDesc.style.animation = "";

      const estVideo = el.tagName === "VIDEO";

      if (estVideo) {
        lightboxVideo.src = el.currentSrc || el.src || el.querySelector("source")?.src;
        lightboxVideo.style.display = "block";
        lightboxImg.style.display = "none";
        lightboxVideo.currentTime = 0;
      } else {
        lightboxImg.src = el.src;
        lightboxImg.style.display = "block";
        lightboxVideo.style.display = "none";
        lightboxVideo.pause();
      }

      const titre = el.dataset.titre;
      const desc = el.dataset.desc;

      if (desc) {
        lightboxDesc.innerHTML = titre ? `<h3>${titre}</h3><p>${desc}</p>` : `<p>${desc}</p>`;
      } else {
        lightboxDesc.innerHTML = "";
      }

      lightbox.classList.add("actif");
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("actif");
      lightboxVideo.pause();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("actif");
      lightboxVideo.pause();
    }
  });
}

function toggleZoom(el) {
  const actif = el.classList.contains("plein-ecran");

  if (actif) {
    el.classList.remove("plein-ecran");
  } else {
    el.style.animation = "none";
    void el.offsetWidth; // force le navigateur à relire le style
    el.style.animation = "";
    el.classList.add("plein-ecran");
  }
}

lightboxImg.classList.remove("plein-ecran");
lightboxVideo.classList.remove("plein-ecran");