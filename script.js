let count = 0;
const countDisplay = document.getElementById('count');

document.getElementById('increment').addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
    countDisplay.style.color = count > 0 ? 'green' : count < 0 ? 'red' : 'black';});

document.getElementById('decrement').addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
    countDisplay.style.color = count > 0 ? 'green' : count < 0 ? 'red' : 'black';
});

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
    countDisplay.style.color = count > 0 ? 'green' : count < 0 ? 'red' : 'black';
});