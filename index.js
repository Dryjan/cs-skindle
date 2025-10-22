import { skinsArr } from './data/skinsArr.js';
import { weaponsObj } from './data/weaponsObj.js';
import { raritiesObj } from './data/raritiesObj.js';
import { collectionsObj } from './data/collectionsObj.js';
console.log(skinsArr, weaponsObj, raritiesObj, collectionsObj);

const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
});

const inputGuess = document.getElementById('inputGuess');
inputGuess.addEventListener('input', function() {
  console.log();
});