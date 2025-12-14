fetch('matches.json')
.then(response => response.json())
.then(data => {
    // Live match
    document.getElementById('live-iframe').src = data.live.twitch_url;
    document.getElementById('team1-name').textContent = data.live.team1.name;
    document.getElementById('team1-logo').src = data.live.team1.logo;
    document.getElementById('team1-score').textContent = data.live.team1.score;
    document.getElementById('team2-name').textContent = data.live.team2.name;
    document.getElementById('team2-logo').src = data.live.team2.logo;
    document.getElementById('team2-score').textContent = data.live.team2.score;

    // Prochains matchs automatiquement
    const matchesContainer = document.getElementById('matches');
    data.upcoming.forEach(match => {
        const div = document.createElement('div');
        div.classList.add('match');
        div.innerHTML = `
            <div class="team">
                <img src="${match.team1.logo}" alt="${match.team1.name}">
                <span>${match.team1.name}</span>
            </div>
            <div class="info">
                <span>${match.date} - ${match.heure}</span>
            </div>
            <div class="team">
                <img src="${match.team2.logo}" alt="${match.team2.name}">
                <span>${match.team2.name}</span>
            </div>
        `;
        matchesContainer.appendChild(div);
    });

    // Infos et actualités depuis JSON
    const infosContainer = document.getElementById('infos-content');
    data.infos.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        infosContainer.appendChild(p);
    });
})
.catch(err => console.error('Erreur chargement JSON:', err));
