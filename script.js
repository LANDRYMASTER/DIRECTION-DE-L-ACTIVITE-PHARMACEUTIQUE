

const nav = document.querySelector('.nav');
const nav_logo = document.querySelector('.nav-logo');
const listeArticle = document.querySelectorAll('.img_article');
const article_content = document.querySelectorAll('.content_article');
console.log(window.scrollY);
console.log(listeArticle[0]);



// Quand la page détecte un scroll...
window.addEventListener('scroll', function () {
// Vérifie si l'utilisateur a scrollé vers le bas
console.log(window.scrollY);
if (window.scrollY >= 80) {
    // Ajoute la classe 'scrolled' à la navbar
    nav.classList.add('fixer');
    nav_logo.classList.remove('desactiver');
} else {
    // Si l'utilisateur revient en haut, on retire la classe
    nav.classList.remove('fixer');
    nav_logo.classList.add('desactiver');
}

if (window.scrollY >= 520) {
    listeArticle[0].classList.remove('translate_gauche');
    article_content[0].classList.remove('translate_droite');
}
if (window.scrollY >= 750) {
    listeArticle[1].classList.remove('translate_gauche');
    article_content[1].classList.remove('translate_droite');
}
if (window.scrollY >= 1120) {
    listeArticle[2].classList.remove('translate_gauche');
    article_content[2].classList.remove('translate_droite');
}
});


