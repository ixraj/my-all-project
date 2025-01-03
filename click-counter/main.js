let counter = 0;

document.getElementById('counter-button').addEventListener('click', () => {
    counter++;
    const counterDisplay = document.getElementById('counter-display');
    counterDisplay.textContent = `You clicked ${counter} times`;

    // Add a subtle color change to the counter text on each click
    if (counter % 5 === 0) {
        counterDisplay.style.color = getRandomColor();
    }
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
