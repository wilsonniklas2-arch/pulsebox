const container = document.getElementById('tracks-container');

async function loadTracks() {
    try {
        const response = await fetch('/api/tracks');
        const tracks = await response.json();
        renderTracks(tracks);
    } catch (error) {
        console.error("Matrix-Fehler beim Laden der Tracks:", error);
    }
}

function renderTracks(tracks) {
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
                <span class="vote-count">${track.votes}</span>
                <button onclick="vote(${track.id})">🔥 Vote</button>
            </div>
        `;
        container.appendChild(card);
    });
}

async function vote(id) {
    try {
        const response = await fetch('/api/vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });
        const data = await response.json();
        if (data.success) {
            renderTracks(data.tracks);
        }
    } catch (error) {
        console.error("Fehler beim Senden des Votes:", error);
    }
}

loadTracks();
