const nav = document.querySelector('.nav');
const nav_logo = document.querySelector('.nav-logo');
const listeDocments = document.querySelectorAll('documentation a');
const liens = document.querySelectorAll('nav > ul > li > a');
const tabs = document.querySelectorAll('#documentation a');
const flash = document.querySelector(".Flash");
const boxes = {
  'Documents Elaborés': document.getElementById('box_Documents_Elaborés'),
  'Pharmanews': document.getElementById('box_Pharmanews'),
  'Documents Officiels': document.getElementById('box_Documents_Officiels')
};

const bubble = document.getElementById("floatingBubble");
let visible = false;

// Quand la page détecte un scroll...
window.addEventListener('scroll', function () {
// Vérifie si l'utilisateur a scrollé vers le bas

if (window.scrollY >= 80) {
    // Ajoute la classe 'scrolled' à la navbar
    nav.style.top = `${flash.offsetHeight}px`;
    nav.classList.add('navfixer');
    flash.classList.add('Flashfixer');
    nav_logo.classList.remove('none');
    liens.forEach(lien => {
      lien.classList.remove('white');
      lien.classList.add('black');
    });
} 
else  {
    // Si l'utilisateur revient en haut, on retire la classe
    nav.classList.remove('navfixer');
    flash.classList.remove('flashfixer');
    nav_logo.classList.add('none');
    liens.forEach(lien => {
      lien.classList.remove('black');
      lien.classList.add('white');
    });
}

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



// Affichages des onglets 

// Masquer toutes les box sauf la première
Object.values(boxes).forEach((box, index) => {
  if (index === 0) {
    box.classList.add('flex');
  } else {
    box.classList.add('none');
  }
});

tabs.forEach((a, index) => {
  if (index === 0) { 
    a.classList.add('documents_active');
  }
});

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();

    // Retirer la classe active de tous les onglets
    tabs.forEach(t => t.classList.remove('documents_active'));

    // Ajouter la classe active à l'onglet cliqué
    tab.classList.add('documents_active');

    // Afficher le bon contenu
    const selected = tab.textContent.trim();
    Object.keys(boxes).forEach(key => {
      boxes[key].classList.remove('flex');
      boxes[key].classList.add('none');
      if (key === selected) {
        boxes[key].classList.remove('none');
        boxes[key].classList.add('flex');
        console.log(boxes[key]);
        }
    });
  });
});


// Slider des documents 

const allSliders = document.querySelectorAll('#box-documents > div');
allSliders.forEach(sliderBox => {
  const track = sliderBox.querySelector('.slider-track');
  const items = sliderBox.querySelectorAll('.slide-item');
  const prevBtn = sliderBox.querySelector('.slider-prev');
  const nextBtn = sliderBox.querySelector('.slider-next');
  const dotsContainer = sliderBox.querySelector('.slider-dots');

  const totalSlides = items.length-5;
  let currentSlide = 0;

  // Créer les dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentSlide = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }

  function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 215}px)`;
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }, 5000);
});

  if ( !bubble.dataset.activated) {
      bubble.dataset.activated = true;
      // Démarre les apparitions/disparitions toutes les 5 minutes (300000 ms)
      toggleBubble(); // 1ère apparition directe
      setInterval(toggleBubble, 5000); // toutes les 2 min
    }


