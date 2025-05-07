const nav = document.querySelector('.nav');
const nav_logo = document.querySelector('.nav-logo');
const listeDocments = document.querySelectorAll('#Liste-Documentation article');
const activités = document.querySelectorAll('.information article');
const plus = document.querySelectorAll('.plus');

console.log("js chargé");
console.log(window.scrollY);

// Quand la page détecte un scroll...
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
// Vérifie si l'utilisateur a scrollé vers le bas

if (window.scrollY >= 80) {
    // Ajoute la classe 'scrolled' à la navbar
    nav.classList.add('fixer');
    nav_logo.classList.remove('desactiver');
} else {
    // Si l'utilisateur revient en haut, on retire la classe
    nav.classList.remove('fixer');
    nav_logo.classList.add('desactiver');
}

if (window.scrollY >= 400) {
    this.setInterval(() => {
        listeDocments.forEach((afiche, index)  => {
            setTimeout(() => {
                afiche.classList.remove('affiche');
            },index * 400);
        });
    }, 1000);
}
});

activités.forEach((article, index) => {
    article.addEventListener('mouseover', () => {
      plus[index].classList.remove('noday');
    });
  
    article.addEventListener('mouseout', () => {
      plus[index].classList.add('noday'); // Enlève au retrait de la souris
    });
  });

  let index = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.add("desaffiche");
      dots[i]?.classList.remove("select");
    });

    if (slides[n]) {
      slides[n].classList.remove("desaffiche");
      dots[n]?.classList.add("select");
    }
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  // Initial display
  showSlide(index);

  // Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Dots click
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
      console.log(dot);
    });
  });

