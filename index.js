import { skinsArr } from './data/skinsArr.js';
import { weaponsObj } from './data/weaponsObj.js';
import { raritiesObj } from './data/raritiesObj.js';
import { collectionsObj } from './data/collectionsObj.js';
console.log(skinsArr, weaponsObj, raritiesObj, collectionsObj);

const answer = skinsArr[Math.floor(Math.random() * 1358)];
console.log(answer);
let searchArr = [];

const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
});

const inputGuess = document.getElementById('inputGuess');
inputGuess.addEventListener('input', function() {
  const inputVal = inputGuess.value.trim();
  searchArr = [];

  if(inputVal) {
    skinsArr.forEach(element => {
      if(element.name.toLowerCase().includes(inputVal.toLowerCase())) {
        searchArr.push(element);
      }
    });
  }
  console.log(inputVal, searchArr);

  const divRes = document.getElementById('results');
  divRes.innerHTML = '';
  searchArr.forEach(element => {
    const result = document.createElement('div');
    result.className = 'result';
    result.style.backgroundColor = raritiesObj[element.rarity];
    result.innerText = element.name;
    result.onclick = '';
    divRes.appendChild(result);
  });
});