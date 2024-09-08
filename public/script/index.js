const carouselInner = document.querySelector(".carousel-inner");
const totalImages = document.querySelectorAll(".carousel-inner img").length / 2; // Número de imágenes originales

// Configura el ancho del contenedor interno para permitir el desplazamiento
carouselInner.style.width = `${totalImages * 100}%`;

// Manejo del bucle continuo
let scrollAmount = 0;
function smoothScroll() {
  scrollAmount -= 1; // Velocidad de desplazamiento
  carouselInner.style.transform = `translateX(${scrollAmount}px)`;
  if (Math.abs(scrollAmount) >= carouselInner.scrollWidth / 2) {
    scrollAmount = 0; // Reinicia el desplazamiento
  }
  requestAnimationFrame(smoothScroll); // Continúa la animación
}

smoothScroll(); // Inicia la animación
