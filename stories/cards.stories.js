import { action } from '@storybook/addon-actions';
import { document } from 'global';
import { array, files, select, withKnobs, text } from '@storybook/addon-knobs';

export default {
	title: 'Cards',
	decorators: [withKnobs]
};

export const ingredients = () => {
  const title = text('Title', 'Ingredients', 'Info');
  const img1 = files('Image 1 URL', '.png, .jpg, .jpeg', 'https://placehold.it/50x50', 'Images');
  const img2 = files('Image 2 URL', '.png, .jpg, .jpeg', 'https://placehold.it/50x50', 'Images');
  const img3 = files('Image 3 URL', '.png, .jpg, .jpeg', 'https://placehold.it/50x50', 'Images');
  const items = array('Items', ['Beef', 'Chicken', 'Purple Pototoes', 'Green Beans', 'Red Rice', 'Water', 'Chicken By-product Meal', 'Ground Corn', 'Animal Fat (preserved with Mixed Tocopherols)', 'Rice', 'Dried Meat By-products', 'Wheat Flour', 'Natural Flavors', 'Corn Gluten Meal', 'Potassium Chloride', 'Choline Chloride', 'Turkey Meal', 'Calcium Carbonate', 'DL-Methionine', 'Taurine'], ',', 'Info');
  const showItemList = {
    5: '6',
    6: '7',
    7: '8',
    8: '9'
  };
  const showItem = select('Items to show', showItemList, '6', 'Info');
  const link = text('Show more', 'See full ingredients list', 'Info');

  return `<div class="ingredients-wrapper">
        <h1>${title}</h1>
        <img alt="img1" src="${img1}">
        <img alt="img2" src="${img2}">
        <img alt="img3" src="${img3}">
        <ul class="d${showItem}">${items.map(item => `<li>${item}</li>`).join('')}</ul>
        <a id="toggleBtn" class="js-toggle" href="">${link}</a>
      </div>
    `;
};

ingredients.story = { name: 'Ingredients' };
