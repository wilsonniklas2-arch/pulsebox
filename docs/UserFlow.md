PulseBox – User Flow Version 1.0

1. Betreiber startet PulseBox

Der Betreiber öffnet PulseBox auf seinem Tablet, PC oder Smartphone.

Er meldet sich an und wählt seinen Standort aus.

Beispiel:

Restaurant “La Piazza”

Nun verbindet er sein Spotify-Konto (oder später einen anderen unterstützten Musikdienst) mit PulseBox und startet den Musikraum.

Ab diesem Moment erzeugt PulseBox einen QR-Code.

⸻

2. Gäste betreten den Musikraum

Am Eingang oder auf jedem Tisch befindet sich ein QR-Code.

Der Gast scannt ihn mit seinem Smartphone.

Es ist keine Installation notwendig. Für Version 1.0 würde ich zunächst eine Web-App bauen, damit jeder sofort teilnehmen kann.

Nach dem Scannen sieht der Gast:

* Name der Location
* aktueller Song
* Albumcover
* Fortschrittsbalken
* Anzahl der anwesenden Nutzer
* Aktuelle Abstimmung

⸻

3. Startbildschirm

Der Gast landet auf dem Dashboard.

Dort sieht er:

🎵 Jetzt läuft

⏭ Als Nächstes

📈 Aktuelles Voting

🔍 Song suchen

❤️ Favoriten

🗳 Abstimmen

⸻

4. Song suchen

Der Nutzer tippt auf „Song suchen“.

Er gibt zum Beispiel ein:

Avicii

Die App zeigt passende Titel an.

Beispiel:

* Wake Me Up
* Levels
* The Nights

Der Gast wählt einen Titel aus.

⸻

5. Song vorschlagen

Jetzt erscheint:

„Zum Voting hinzufügen?“

Der Nutzer bestätigt.

Jetzt erscheint der Song in der aktuellen Abstimmung.

Falls der Song bereits vorgeschlagen wurde, wird kein Duplikat erstellt. Stattdessen kann der Gast für den bestehenden Vorschlag abstimmen.

⸻

6. Live-Voting

Alle Gäste sehen dieselbe Abstimmung.

Zum Beispiel:

* Wake Me Up – 18 Stimmen
* Titanium – 15 Stimmen
* Levels – 22 Stimmen

Die Anzeige aktualisiert sich in Echtzeit.

⸻

7. Songende

Kurz bevor der aktuelle Song endet, wertet PulseBox die Stimmen aus.

Der Song mit den meisten Stimmen wird automatisch als Nächstes abgespielt.

Alle Geräte werden gleichzeitig aktualisiert.

⸻

8. Keine Aktivität

Wenn über einen definierten Zeitraum niemand abstimmt oder Songs vorschlägt, schaltet PulseBox automatisch auf die Playlist des Betreibers um.

Die Musik läuft ohne Unterbrechung weiter.

Sobald wieder jemand abstimmt, übernimmt PulseBox automatisch wieder die Steuerung.

⸻

Betreiber-Dashboard

Der Betreiber sieht deutlich mehr Informationen als die Gäste.

Er kann:

* Musik starten oder stoppen
* Playlist auswählen
* Voting ein- oder ausschalten
* Songs überspringen
* Songs sperren
* Künstler sperren
* Genres erlauben oder verbieten
* Statistiken einsehen
* Den QR-Code anzeigen

⸻

Systemlogik

Im Hintergrund arbeitet der Server.

Er:

* verwaltet alle verbundenen Nutzer
* zählt Stimmen
* verwaltet die Warteschlange
* synchronisiert alle Geräte
* steuert den Musikdienst
* speichert Statistiken
* überwacht den Status des Musikraums

Für den Gast ist davon nichts sichtbar – er sieht nur eine einfache und flüssige Oberfläche.

⸻

💡 Eine Idee, die ich ergänzen würde

Ich würde PulseBox nicht nur als “Voting-App” entwickeln, sondern als Plattform.

Das heißt: Das Voting ist nur ein Modul.

Später könnten weitere Module dazukommen, zum Beispiel:

* 🎤 Karaoke
* 🎧 DJ-Modus
* 🎉 Event-Modus
* 🧠 KI-Musikempfehlungen
* 🏆 Belohnungen für aktive Nutzer
* 📊 Musikstatistiken
* 📺 Werbung oder Hinweise auf Veranstaltungen
* 🍔 Speise- und Getränkekarte der Location

So wächst PulseBox nicht nur zu einer Jukebox, sondern zu einer digitalen Plattform für Gastronomie und Events.