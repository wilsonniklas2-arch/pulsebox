// 🧠 PulseBox Backend - Version 0.0.1 Alpha
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

// Middleware für JSON-Daten
app.use(express.json());

// Test-Route für den Serverstatus
app.get('/api/status', (req, res) => {
    res.json({
            status: "online",
                    project: "PulseBox",
                            version: "0.0.1-alpha",
                                    message: "Backend läuft erfolgreich!"
                                        });
                                        });

                                        // Server starten
                                        server.listen(PORT, () => {
                                            console.log(`🎵 PulseBox-Server läuft auf Port ${PORT}`);
                                            });
                                            