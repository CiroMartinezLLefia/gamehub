// Juegos/estilos/intro.js
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const intro = document.getElementById('intro');
        intro.style.transition = 'opacity 1s ease';
        intro.style.opacity = '0';
        setTimeout(() => intro.style.display = 'none', 1000);
    }, 1000); // dura 1 segundos
});
(function () {
  const trigger = document.getElementById('spin-trigger');
  const site = document.getElementById('site');
  if (!trigger || !site) return;

  // Al entrar: añade la clase que anima
  trigger.addEventListener('mouseenter', () => {
    // limpiar cualquier inline animation previo
    site.style.animation = '';
    site.classList.add('spinning');
    site.style.willChange = 'transform';
  });

  // Al salir: leer la transform actual y aplicarla como estilo fijo
  trigger.addEventListener('mouseleave', () => {
    const computed = getComputedStyle(site);
    const currentTransform = computed.transform; // matrix(...) o 'none'
    // detener la animación
    site.classList.remove('spinning');
    site.style.animation = 'none';
    // aplicar la transform actual para "congelar" el estado visual
    if (currentTransform && currentTransform !== 'none') {
      site.style.transform = currentTransform;
    } else {
      site.style.transform = '';
    }
    site.style.willChange = '';
  });
})(); 