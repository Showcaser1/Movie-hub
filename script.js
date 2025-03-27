// Search Functionality
document.querySelector('.search button').addEventListener('click', () => {
    const searchTerm = document.querySelector('.search input').value;
    alert(`Searching for: ${searchTerm}`);
});

// Anime Data (Example - Replace with real API later)
const animeData = [
    { title: "Invincible", image: "invincible-poster.jpg" },
    { title: "Attack on Titan", image: "aot-poster.jpg" },
    { title: "Jujutsu Kaisen", image: "jjk-poster.jpg" },
];

// Dynamically Load Anime Cards (Optional)
function loadAnimeCards() {
    const animeGrid = document.querySelector('.anime-grid');
    animeData.forEach(anime => {
        animeGrid.innerHTML += `
            <div class="anime-card">
                <img src="${anime.image}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <button>Watch Now</button>
            </div>
        `;
    });
}

// Uncomment to auto-load anime cards
// loadAnimeCards();
