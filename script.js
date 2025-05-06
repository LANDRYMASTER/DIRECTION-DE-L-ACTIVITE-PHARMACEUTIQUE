const nav = document.querySelector('.nav');
const nav_logo = document.querySelector('.nav-logo');
const listeDocments = document.querySelectorAll('#Liste-Documentation article');
const activités = document.querySelectorAll('.information article');
const plus = document.querySelectorAll('#plus');

console.log("js chargé");

// Quand la page détecte un scroll...
window.addEventListener('scroll', function () {
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

if (window.scrollY >= 420) {
    this.setInterval(() => {
        listeDocments.forEach(afiche => {
        afiche.classList.remove('affiche');
        });
    }, 1000);
}
});

activités.forEach((article, index) => {
    article.addEventListener('mouseover', () => {
      plus[index].classList.add('day'); // Classe ou style au survol
    });
  
    article.addEventListener('mouseout', () => {
      plus[index].classList.remove('day'); // Enlève au retrait de la souris
    });
  });
