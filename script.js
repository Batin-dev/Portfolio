const glow = document.querySelector('.glow');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
});
const starsContainer = document.querySelector('.stars');
