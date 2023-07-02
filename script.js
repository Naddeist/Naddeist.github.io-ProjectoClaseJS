// Inicializar el carrusel
const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
    interval: 5000, // Intervalo de 5 segundos entre las transiciones
    pause: false // No pausar al pasar el mouse sobre el carrusel
  });
  
  // Inicializar el menú desplegable
var dropdownElementList = document.querySelectorAll('.dropdown-toggle');
var dropdownList = Array.from(dropdownElementList).map(function (dropdownToggle) {
  return new bootstrap.Dropdown(dropdownToggle);
});
