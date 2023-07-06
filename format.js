const fs = require('fs');

const data = fs.readFileSync('src/data/villages.json');
let clans = JSON.parse(data);

const removeStringAfterExtension = () => {
  clans.forEach((clan, index) => {
    clan.characters.forEach((character, index) => {
      const imageUrls = character.images;
      const newImageUrls = imageUrls.map(imageUrl => {
        if (imageUrl.includes('.png')) {
          return `${imageUrl.split('.png')[0]}.png`;
        } else if (imageUrl.includes('.jpg')) {
          return `${imageUrl.split('.jpg')[0]}.jpg`;
        } else if (imageUrl.includes('.jpeg')) {
          return `${imageUrl.split('.jpeg')[0]}.jpeg`;
        } else if (imageUrl.includes('.PNG')) {
          return `${imageUrl.split('.PNG')[0]}.png`;
        }
        return imageUrl;
      });

      character.images = newImageUrls;
    });
  });

  fs.writeFileSync('src/data/villages.json', JSON.stringify(clans));
};

removeStringAfterExtension();
