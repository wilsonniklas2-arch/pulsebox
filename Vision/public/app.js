// Verbindung zur Dark Tech Zentrale via WebSockets herstellen
const socket = io();

const container = document.getElementById('tracks-container');

// Tracks beim Laden der Seite initial abrufen
async function loadTracks() {
    try {
        const response = await fetch('/api/tracks');
        const tracks = await response.json();
        renderTracks(tracks);
    } catch (error) {
        console.error("Matrix-Fehler beim Laden der Tracks:", error);
    }
}

// Tracks auf der Oberfläche rendern
function renderTracks(tracks) {
    if (!container) return;
    container.innerHTML = '';
    
    tracks.forEach(track => {
        const card = document.createElement('div');
        card.className = 'track-card';
        card.innerHTML = `
            <div class="track-info">
                <h3>${track.title}</h3>
                <p>${track.artist}</p>
            </div>
            <div class="vote-section">
                <span class="vote-count">🔥 ${track.votes}</span>
                <button onclick="vote(${track.id})">Voten</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Vote abschicken
async function vote(id) {
    try {
        const response = await fetch('/api/vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });
        const data = await response.json();
        if (!data.success) {
            console.error("Fehler beim Voten");
        }
    } catch (error) {
        console.error("Fehler beim Senden des Votes:", error);
    }
}

// Live-Update empfangen von der Dark Tech Zentrale
socket.on('update-tracks', (updatedTracks) => {
    console.log('Live-Update empfangen!');
    renderTracks(updatedTracks);
});

// Init beim Start
loadTracks();
