import { skinsArr } from './skinsArr.js';
console.log(skinsArr);

const answer = skinsArr[Math.floor(Math.random() * skinsArr.length)];
console.log(answer);
const divOverlay = document.getElementById('divOverlay');
const divAnswerName = document.getElementById('divAnswerName');
const divAnswerImage = document.getElementById('divAnswerImage');
const divResults = document.getElementById('divResults');
const form = document.getElementById('form');
const inputGuess = document.getElementById('inputGuess');
const divGuesses = document.getElementById('divGuesses');
const buttonRestart = document.getElementById('buttonRestart');
const h3GuessesCount = document.getElementById('h3GuessesCount');
let firstResult;
let guessesCount = 0;

function createResults() {
  skinsArr.reverse().forEach(element => {
    const divResult = document.createElement('div');
    divResult.id = element.name;
    divResult.className = 'divResult';
    divResult.innerText = element.name;
    divResult.style.backgroundColor = element.rarity.color;
    divResult.style.display = 'none';
    divResult.onclick = function() { guess(element) };
    divResults.appendChild(divResult);
  });
}
createResults();

function showResults() {
  const inputValue = inputGuess.value;

  firstResult = null;

  skinsArr.forEach(element => {
    if(element.name.toLowerCase().includes(inputValue.toLowerCase()) && inputValue) {
      document.getElementById(element.name).style.display = 'inline';
      firstResult = element;
    } else {
      document.getElementById(element.name).style.display = 'none';
    }
  });

  divResults.scrollTop = -divResults.scrollHeight + divResults.clientHeight;

  console.log('firstResult:', firstResult);
}

function createGuess(skin) {
  const guessImg = document.createElement('img');
  guessImg.className = 'guessChild MJ';
  guessImg.src = skin.image;

  const guessWpn = document.createElement('div');
  guessWpn.className = 'guessChild';
  guessWpn.innerText = skin.weapon;
  if(skin.weapon === answer.weapon) {
    guessWpn.style.borderColor = 'green';
  } else if(skin.category === answer.category) {
    guessWpn.style.borderColor = 'yellow';
  }

  const guessRar = document.createElement('div');
  guessRar.className = 'guessChild';
  guessRar.innerText = skin.rarity.name;
  if(skin.rarity.name === answer.rarity.name) {
    guessRar.style.borderColor = 'green';
  }

  const guessCol = document.createElement('img');
  guessCol.className = 'guessChild';
  guessCol.src = skin.collection.image;
  if(skin.collection.name === answer.collection.name) {
    guessCol.style.borderColor = 'green';
  }

  const guessRel = document.createElement('div');
  guessRel.className = 'guessChild';
  guessRel.innerText = skin.releaseYear;
  if(skin.releaseYear < answer.releaseYear) {
    guessRel.innerText += ' ⬆️';
  } else if(skin.releaseYear > answer.releaseYear) {
    guessRel.innerText += ' ⬇️';
  }
  if(skin.releaseYear === answer.releaseYear) {
    guessRel.style.borderColor = 'green';
  }

  const divGuess = document.createElement('div');
  divGuess.className = 'divGuess';
  divGuess.appendChild(guessImg);
  divGuess.appendChild(guessWpn);
  divGuess.appendChild(guessRar);
  divGuess.appendChild(guessCol);
  divGuess.appendChild(guessRel);
  divGuesses.appendChild(divGuess);
}

function guess(skin) {
  guessesCount += 1;

  inputGuess.value = '';
  showResults();

  createGuess(skin);

  skinsArr.splice(skinsArr.indexOf(skin), 1);
  console.log('Guesed skin:', skin);

  inputGuess.focus();

  if(skin === answer) {
    inputGuess.blur();
    document.body.style.overflow = 'hidden';
    document.documentElement.scrollTop = 0;
    h3GuessesCount.innerText = 'Guesses needed: ' + guessesCount;
    divOverlay.style.display = 'flex';
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if(firstResult) {
    guess(firstResult);
  }
});

inputGuess.addEventListener('input', showResults);

buttonRestart.addEventListener('click', function() {
  location.reload();
});

divAnswerImage.src = answer.image;
divAnswerName.innerText = answer.name;