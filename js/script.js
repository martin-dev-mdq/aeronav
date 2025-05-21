// Seleccionar los ítems del menú y las secciones
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const navbarToggler = document.querySelector('.navbar-toggler'); // Selecciona el toggler
const navbarCollapse = document.querySelector('.navbar-collapse'); // Selecciona el elemento colapsable

// Función para cambiar el ítem activo
const highlightNavItem = () => {
    let scrollPosition = window.scrollY + 70; // Ajuste para navbar fijo

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight; // Corregido: sectionBottom se define dentro del bucle
        // Verificar si estamos dentro del rango de la sección
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active'); // Quitar clase activa
                link.blur(); // Quitar el estado de focus
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active'); // Agregar clase activa
                }
            });
        }
    });
};

// Detectar eventos de scroll y ejecutar la función
window.addEventListener('scroll', highlightNavItem);

// Ejecutar la función al cargar la página (para marcar la sección inicial)
document.addEventListener('DOMContentLoaded', highlightNavItem);

// Agregar este bloque para cerrar el menú al hacer clic en un enlace cuando está colapsado
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) { // Verifica si el menú está colapsado y visible
            navbarToggler.click(); // Simula un clic en el botón de hamburguesa para cerrar el menú
        }
    });
});

// Scroll de imagenes sección Nosotros
const contenedorImagenes = document.getElementById('contenedorImagenes');
const imagenesOriginales = contenedorImagenes.querySelectorAll('img');
let scrollSpeed = 1; // Velocidad de desplazamiento
let scrollInterval;
function duplicarImagenes() {
    // Crea un fragmento para agregar todos los nodos a la vez. Esto es más eficiente que agregar uno por uno en un loop.
    const fragmento = document.createDocumentFragment();
    imagenesOriginales.forEach(img => {
        const imgClone = img.cloneNode(true); // Clona la imagen
        fragmento.appendChild(imgClone); // Agrega el clon al fragmento
    });
    contenedorImagenes.appendChild(fragmento); // Agrega el fragmento al contenedor
}
function iniciarScroll() {
    scrollInterval = setInterval(() => {
        contenedorImagenes.scrollLeft += scrollSpeed;
        // Si el scroll llega al final del contenido original, vuelve al inicio del contenido original
        if (contenedorImagenes.scrollLeft >= contenedorImagenes.scrollWidth / 2) {
            contenedorImagenes.scrollLeft = 0;
        }
    }, 20); // Ajusta el intervalo para controlar la velocidad
}
window.onload = () => {
    duplicarImagenes(); // Duplica las imágenes al cargar la página
    iniciarScroll(); // Inicia el scroll automático
};


// Carrusel de fondo para el hero
document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector('.hero');
    const imagenes = [
        "images/female-mechanic-holding-spare-parts.jpg",
        "images/hero2.jpg",
        "images/container-operation-port-series.jpg",
        "images/hero4.jpg"
    ];
    let indice = 0;

    setInterval(() => {
        indice = (indice + 1) % imagenes.length;
        hero.style.backgroundImage = `url('${imagenes[indice]}')`;
        hero.style.transition = "background-image 1s linear";
    }, 4000); // Cambia cada 4 segundos
});
