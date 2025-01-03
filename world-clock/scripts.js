const timeZones = [
    { city: 'India', timeZone: 'Asia/Kolkata' },
    { city: 'United States', timeZone: 'America/New_York' },
    { city: 'United Kingdom', timeZone: 'Europe/London' },
    { city: 'Japan', timeZone: 'Asia/Tokyo' },
    { city: 'Australia', timeZone: 'Australia/Sydney' },
    { city: 'United Arab Emirates', timeZone: 'Asia/Dubai' },
    { city: 'Russia', timeZone: 'Europe/Moscow' },
    { city: 'France', timeZone: 'Europe/Paris' },
    { city: 'China', timeZone: 'Asia/Shanghai' },
    { city: 'Brazil', timeZone: 'America/Sao_Paulo' },
    { city: 'Italy', timeZone: 'Europe/Rome' },
    { city: 'Egypt', timeZone: 'Africa/Cairo' }
];
function createClocks() {
    const container = document.getElementById('clocks-container');
    timeZones.forEach(({ city, timeZone }) => {
        const clockDiv = document.createElement('div');
        clockDiv.className = 'clock';
        clockDiv.innerHTML = `
                    <h2>${city}</h2>
                    <div class="time" id="time-${city.toLowerCase().replace(/\s+/g, '-')}"></div>
                    <div class="date" id="date-${city.toLowerCase().replace(/\s+/g, '-')}"></div>
                `;
        container.appendChild(clockDiv);
    });
}

function updateTime() {
    timeZones.forEach(({ city, timeZone }) => {
        const options = {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const dateOptions = {
            timeZone,
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        const time = new Date().toLocaleTimeString('en-US', options);
        const date = new Date().toLocaleDateString('en-US', dateOptions);

        const cityId = city.toLowerCase().replace(/\s+/g, '-');
        document.getElementById(`time-${cityId}`).textContent = time;
        document.getElementById(`date-${cityId}`).textContent = date;
    });
}

createClocks();
updateTime();
setInterval(updateTime, 1000);
