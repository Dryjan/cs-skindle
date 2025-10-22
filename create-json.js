import { cratesJSON } from "./crates.js";
import { collectionsJSON } from "./collections.js";
import { skinsJSON } from "./skins.js";

let finalJSON = [];

skinsJSON.forEach(element => {
  if(!['Gloves', 'Knives', 'Equipment'].includes(element['category']['name'])) {
    const skin = {
      id: element['id'],
      name: element['name'],
      weapon: element['weapon']['name'],
      category: element['category']['name'],
      rarity: element['rarity']['name'],
      collection: element['collections'][0]['name'],
      crates: element['crates'].length
    };
    finalJSON.push(skin);
  }
});

// finalJSON.forEach(element => {
//   if(element.collection === undefined) {
//     console.log(element);
//   }
// });

console.log(finalJSON);