const glow = document.querySelector('.glow');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
});

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
    

function openModal(imagePath, artstationLink) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalLink = document.getElementById('modal-link');

    modal.style.display = 'flex';

    modalImage.style.transform = 'scale(1)';
    modalImage.style.maxWidth = '80%'; 
    modalImage.style.maxHeight = '80%';

    modalImage.src = imagePath;
    modalLink.innerHTML = `<a href="${artstationLink}" target="_blank">View on ArtStation</a>`;
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');

    modalImage.style.transform = 'scale(1)';
    modal.style.display = 'none';
}

function openModal(imagePath, artstationLink) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalLink = document.getElementById('modal-link');

    modal.style.display = 'flex';
    modalImage.style.maxWidth = '80%';
    modalImage.style.maxHeight = '80%';
    modalImage.src = imagePath;
    modalLink.innerHTML = `<a href="${artstationLink}" target="_blank">View on ArtStation</a>`;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function redirectToGithub(url) {
    window.open(url, '_blank');
}

function fetchGithubInfo(username, repo, elementId) {
    const apiUrl = `https://api.github.com/repos/${username}/${repo}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const githubInfo = document.getElementById(elementId);
            githubInfo.innerHTML = `
                <div class="github-stars"><i class='bx bx-star'></i> ${data.stargazers_count} stars</div>
                <div class="github-watchers"><i class='bx bx-happy-heart-eyes' ></i> ${data.watchers_count} watchers</div>
            `;
        })
        .catch(error => console.error('Error fetching GitHub data:', error));
}

fetchGithubInfo('Batin-dev', 'DDLC-Purist-Turkish-Translate', 'github-info-1');
fetchGithubInfo('Batin-dev', 'Portfolio', 'github-info-2');
fetchGithubInfo('Batin-dev', 'Translate-App', 'github-info-3');
fetchGithubInfo('Batin-dev', 'WeatherApp', 'github-info-4');
