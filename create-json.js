// import { cratesJSON } from "./crates.js";
// import { collectionsJSON } from "./collections.js";
// import { skinsJSON } from "./skins.js";

let finalJSON = [];

skinsJSON.forEach(element => {
  if(!['Gloves', 'Knives', 'Equipment'].includes(element['category']['name'])) {
    const skin = {
      name: element.name,
      weapon: element.weapon.name,
      rarity: element.rarity.name,
      collection: element.collections[0].name,
      image: element.image
    };
    finalJSON.push(skin);
  }
});

function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
download(JSON.stringify(finalJSON), 'final.json', 'text/plain');

console.log(finalJSON);