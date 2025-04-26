// Seleccionar los ítems del menú y las secciones
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Función para cambiar el ítem activo
const highlightNavItem = () => {
    let scrollPosition = window.scrollY + 70; // Ajuste para navbar fijo

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

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