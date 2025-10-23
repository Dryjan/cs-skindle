import { skinsArr } from './data/skinsArr.js';
import { weaponsObj } from './data/weaponsObj.js';
import { raritiesObj } from './data/raritiesObj.js';
import { collectionsObj } from './data/collectionsObj.js';
console.log(skinsArr, weaponsObj, raritiesObj, collectionsObj);

function guess(skin) {
  resultsArr = [];
  divRes.innerHTML = '';
  inputGuess.value = '';
  divGue.innerHTML = '';

  guessesArr.unshift(skin);
  skinsArr.splice(skinsArr.indexOf(skin), 1);
  console.log(guessesArr, skinsArr);

  guessesArr.forEach(element => {
    
  });
}

const answer = skinsArr[Math.floor(Math.random() * skinsArr.length)];
console.log(answer);
const divRes = document.getElementById('results');
const form = document.getElementById('form');
const inputGuess = document.getElementById('inputGuess');
const divGue = document.getElementById('guesses');
let resultsArr = [];
let guessesArr = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
});

inputGuess.addEventListener('input', function() {
  const inputVal = inputGuess.value.trim();

  resultsArr = [];
  divRes.innerHTML = '';

  if(inputVal) {
    skinsArr.forEach(element => {
      if(element.name.toLowerCase().includes(inputVal.toLowerCase())) {
        resultsArr.push(element);
      }
    });
  }
  console.log(inputVal, resultsArr);

  resultsArr.forEach(element => {
    const result = document.createElement('div');
    result.className = 'result';
    result.style.backgroundColor = raritiesObj[element.rarity];
    result.innerText = element.name;
    result.onclick = function() { guess(element) };
    divRes.appendChild(result);
  });
});