const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const DATA_FILE = path.join(__dirname, 'tracks.json');

app.use(express.json());
app.use(express.static(__dirname + '/Vision/public'));


// Hilfsfunktionen für das ewige Gedächtnis der Matrix
function loadTracks() {
    if (!fs.existsSync(DATA_FILE)) {
        const defaultTracks = [
            { id: 1, title: "Industrial Chaos", artist: "DarkTec", votes: 0 },
            { id: 2, title: "Samba Speed", artist: "Van Harden", votes: 0 },
            { id: 3, title: "Kebab Kontinuum (Uwe Remix)", artist: "PulseBox Crew", votes: 0 }
        ];
        fs.writeFileSync(DATA_FILE, JSON.stringify(defaultTracks, null, 2));
        return defaultTracks;
    }
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function saveTracks(tracks) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(tracks, null, 2));
}

// 1. Status-API
app.get('/api/status', (req, res) => {
    res.json({
        status: "online",
        project: "PulseBox",
        version: "0.0.2-beta",
        message: "Backend mit ewigem Gedächtnis online!"
    });
});

// 2. GET: Alle Tracks abrufen
app.get('/api/tracks', (req, res) => {
    const tracks = loadTracks();
    res.json(tracks);
});

// 3. POST: Für einen Track voten
app.post('/api/vote', (req, res) => {
    const { id } = req.body;
    let tracks = loadTracks();
    const track = tracks.find(t => t.id === parseInt(id));

    if (!track) {
        return res.status(404).json({ error: "Track nicht gefunden!" });
    }

    track.votes += 1;
    tracks.sort((a, b) => b.votes - a.votes);
    saveTracks(tracks);

    res.json({ success: true, message: `Stimme für ${track.title} counted!`, tracks });
});

app.listen(PORT, () => {
    console.log(`🎵 PulseBox-Server läuft auf Port ${PORT} (Ewiges Gedächtnis AKTIV!)`);
});
