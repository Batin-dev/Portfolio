const glow = document.querySelector('.glow');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
});
const starsContainer = document.querySelector('.stars');

document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed', {
        strings: ["Game Developer"],
        typeSpeed: 100,
        startDelay: 100,
        backSpeed: 100,
        backDelay: 500,
        loop: false,
        showCursor: true,
        cursorChar: "|",
        contentType: 'html'
    });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const background = document.getElementById('background');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;

        const fadeDuration = Math.random() * 3 + 2; 
        const moveDuration = Math.random() * 10 + 15;
        star.style.animationDuration = `${fadeDuration}s, ${moveDuration}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        background.appendChild(star);
    }
});

