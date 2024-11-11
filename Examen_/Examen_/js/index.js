javascript
function showContent(section) {
    const content = document.getElementById('content');
    if (section === 'home') {
        content.innerHTML = '<h2>Inicio</h2><p>Esta es la página de inicio.</p>';
    } else if (section === 'about') {
        content.innerHTML = '<h2>Sobre mí</h2><p>Esta es la página sobre mí.</p>';
    } else if (section === 'contact') {
        content.innerHTML = '<h2>Contacto</h2><p>Esta es la página de contacto.</p>';
    }
    closeMenu(); // Cerrar el menú al seleccionar una opción
}

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Alternar la clase activa
}

function closeMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('active'); // Cerrar el menú
}

