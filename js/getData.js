import { promises as fs } from 'fs';
import { collectionsYears } from './collectionsYears.js';

async function writeFileExample(data) {
  try {
    await fs.writeFile('skinsArr.json', JSON.stringify(data, null, 2), 'utf8');

    console.log('Files created successfully');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}

fetch('https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json')
  .then(response => response.json())
  .then(data => {
    const skinsData = data;
    console.log(skinsData);
    let skinsArray = [];
    skinsData.forEach(element => {
      if(!['Gloves', 'Knives', 'Equipment'].includes(element.category.name) && !['skin-8aacf99e7f2f', 'skin-a841a452bb30', 'skin-2479da1a5f04', 'skin-0fc89d8cca2d', 'skin-b1ff8720cf58'].includes(element.id)) {
        const skin = {
          'id': element.id,
          'name': element.name,
          'weapon': element.weapon.name,
          'category': element.category.name,
          'rarity': {
            'name': element.rarity.name,
            'color': element.rarity.color
          },
          'collection': {
            'name': element.collections[0].name,
            'image': element.collections[0].image
          },
          'releaseYear': collectionsYears[element.collections[0].name],
          'image': element.image
        }
        skinsArray.push(skin);
      }
    });
    writeFileExample(skinsArray);
  })
  .catch(error => console.error('Błąd podczas pobierania JSON:', error));