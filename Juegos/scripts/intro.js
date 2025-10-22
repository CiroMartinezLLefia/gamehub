// Juegos/estilos/intro.js
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const intro = document.getElementById('intro');
        intro.style.transition = 'opacity 1s ease';
        intro.style.opacity = '0';
        setTimeout(() => intro.style.display = 'none', 1000);
    }, 2000); // dura 2 segundos
});
