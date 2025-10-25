import { skinsArr } from './data/skinsArr.js';
import { collectionsObj } from './data/collectionsObj.js';
console.log(skinsArr, collectionsObj);

const answer = skinsArr[Math.floor(Math.random() * skinsArr.length)];
console.log(answer);
const divRes = document.getElementById('results');
const form = document.getElementById('form');
const inputGuess = document.getElementById('inputGuess');
const divGue = document.getElementById('guesses');
let resultsArr = [];

function guessFun(skin) {
  resultsArr = [];
  divRes.innerHTML = '';
  inputGuess.value = '';
  inputGuess.blur();

  skinsArr.splice(skinsArr.indexOf(skin), 1);
  console.log(skin, skinsArr);

  const guessImg = document.createElement('img');
  guessImg.className = 'guessChild';
  guessImg.src = skin.image;
  const guessWpn = document.createElement('div');
  guessWpn.className = 'guessChild';
  guessWpn.innerText = skin.weapon;
  const guessRar = document.createElement('div');
  guessRar.className = 'guessChild';
  guessRar.innerText = skin.rarity.name;
  const guessCol = document.createElement('img');
  guessCol.className = 'guessChild';
  guessCol.src = skin.collection.image;
  const guessRel = document.createElement('div');
  guessRel.className = 'guessChild';
  guessRel.innerText = collectionsObj[skin.collection.name].year;

  const guess = document.createElement('div');
  guess.className = 'guess';
  guess.appendChild(guessImg);
  guess.appendChild(guessWpn);
  guess.appendChild(guessRar);
  guess.appendChild(guessCol);
  guess.appendChild(guessRel);
  divGue.appendChild(guess);

  if(skin === answer) {
    console.log('you win');
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if(resultsArr.length > 0) {
    guessFun(resultsArr[0]);
  }
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
    result.style.backgroundColor = element.rarity.color;
    result.innerText = element.name;
    result.onclick = function() { guessFun(element) };
    divRes.appendChild(result);
  });
});