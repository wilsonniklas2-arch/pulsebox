const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

const path = require('path');

// Middleware
app.use(express.json());
// Neuer, sauberer Pfad für das Frontend im Root-Verzeichnis
app.use(express.static(__dirname));

// In-Memory Database (wird in späteren Sprints durch MongoDB ersetzt)
let tracks = [
    { id: 1, title: "Industrial Chaos", artist: "Van Harden", votes: 0 },
    { id: 2, title: "Samba Speed", artist: "Artist", votes: 0 },
    { id: 3, title: "Kebab Kontinuum (Uwe Remix)", artist: "Van Harden", votes: 0 }
];

// 1. Status-API
app.get('/api/status', (req, res) => {
    res.json({
        status: "online",
        project: "PulseBox",
        version: "0.1.0-sprint2",
        message: "Dark Tech Zentrale aktiv - WebSockets enabled!"
    });
});

// 2. GET: Alle Tracks abrufen
app.get('/api/tracks', (req, res) => {
    res.json(tracks);
});

// 3. POST: Für einen Track voten (mit Echtzeit-Broadcast)
app.post('/api/vote', (req, res) => {
    const { id } = req.body;
    const track = tracks.find(t => t.id === id);

    if (!track) {
        return res.status(404).json({ error: "Track nicht gefunden!" });
    }

    track.votes += 1;
    tracks.sort((a, b) => b.votes - a.votes);

    // Echtzeit-Update an alle verbundenen Clients senden!
    io.emit('update-tracks', tracks);

    res.json({ success: true, tracks });
});

// WebSocket Verbindung
io.on('connection', (socket) => {
    console.log('Ein Client hat sich mit der Dark Tech Zentrale verbunden:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client getrennt:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Dark Tech Zentrale läuft auf Port ${PORT}`);
});
