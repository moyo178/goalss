// script.js

function updateTimeAndDay() {
    const utcTimeElement = document.getElementById('utcTime');
    const dayOfWeekElement = document.getElementById('dayOfWeek');

    const now = new Date();
    const utcTime = now.toUTCString().slice(-12, -4);
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    utcTimeElement.textContent = utcTime;
    dayOfWeekElement.textContent = dayOfWeek;
}

document.addEventListener('DOMContentLoaded', () => {
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000); // Update every second
});