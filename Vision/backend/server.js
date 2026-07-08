const express = require('express');
const app = express();
const PORT = 3000;

// Middleware, um JSON-Daten zu verstehen und den statischen Frontend-Ordner freizugeben
app.use(express.json());
app.use(express.static('public'));

// Unsere In-Memory-Datenbank für das Live-Voting
let tracks = [
    { id: 1, title: "Industrial Chaos", artist: "DarkTec", votes: 0 },
    { id: 2, title: "Samba Speed", artist: "Van Harden", votes: 0 },
    { id: 3, title: "Kebab Kontinuum (Uwe Remix)", artist: "PulseBox Crew", votes: 0 }
];

// 1. Status-API (unser Fundament)
app.get('/api/status', (req, res) => {
    res.json({
        status: "online",
        project: "PulseBox",
        version: "0.0.1-alpha",
        message: "Backend läuft erfolgreich!"
    });
});

// 2. GET: Alle Tracks abrufen
app.get('/api/tracks', (req, res) => {
    res.json(tracks);
});

// 3. POST: Für einen Track voten
app.post('/api/vote', (req, res) => {
    const { id } = req.body;
    const track = tracks.find(t => t.id === parseInt(id));

    if (!track) {
        return res.status(404).json({ error: "Track nicht gefunden!" });
    }

    // Vote hinzufügen
    track.votes += 1;

    // Echtzeit-Sortierung: Meiste Votes fliegen sofort nach oben
    tracks.sort((a, b) => b.votes - a.votes);

    // Aktualisierte Trackliste an das Frontend zurückfeuern
    res.json({ success: true, message: `Stimme für ${track.title} gezählt!`, tracks });
});

app.listen(PORT, () => {
    console.log(`🎵 PulseBox-Server läuft auf Port ${PORT}`);
});
