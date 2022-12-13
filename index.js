// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const letters = 'Afolabi';

const result = letters.split('').reverse().join().replaceAll(',', '')

const revString = str => str.split('').reverse().join('')

console.log(revString(''))