const stringify = require('csv-stringify');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

//Helper functions in utils.js
const { getRandomInt, getRandomNumber, grabAFewRandom, getRandomElement, truncateText } = require('./utils');

// Arrays of configurable parameters are in product-parameters.js
const { brands, productTypes, descriptors, sweaterDescriptors, sweaterTypes, shirtTypes, colours, sizes } = require('./product-parameters');

// Configurable options
const NUM_RECORDS = argv.n || 10;
const PRICE_RANGE = { min: 19, max: 89 };
const DISCOUNT_RANGE = { min: 20, max: 55 }; // Whole Number of percent to remove
const TRUNCATE_TEXT_LIMIT = 200; // Function will search forwards for the next whitespace and trim text
const TRUNCATE_TEXT_SUFFIX = '...';

// Text file needs to be one description per line, no empty lines between descriptions
let descriptions = fs.readFileSync('descriptions.txt').toString().split('\n');

function generateName(productType) {
  switch (productType) {
    case 'T-Shirts':
      return `${getRandomElement(descriptors)} T-Shirt`;
    case 'Sweaters and Cardigans':
      return `${getRandomElement(sweaterDescriptors)} ${getRandomElement(sweaterTypes)}`;
    default:
      return `${getRandomElement(descriptors)} ${getRandomElement(shirtTypes)}`;
  }
}

function generateProduct() {
  let type = getRandomElement(productTypes);
  return {
    type: type,
    name: generateName(type),
  };
}

function generatePrice() {
  const actual = getRandomInt(PRICE_RANGE.min, PRICE_RANGE.max);
  const sale = Math.floor(actual - (actual * getRandomInt(DISCOUNT_RANGE.min, DISCOUNT_RANGE.max) / 100));
  const savings = actual - sale;
  return {
    actual: actual + 0.99,
    sale: sale + 0.99,
    savings: savings
  };
}

function generateDescription(index) {
  let fullDescription = descriptions[index % descriptions.length];
  return {
    fullText: fullDescription,
    shortText: truncateText(fullDescription, TRUNCATE_TEXT_LIMIT, TRUNCATE_TEXT_SUFFIX)
  };
}

function generateRating() {
  return `${getRandomNumber(2, 5)} out of 5 by ${getRandomInt(20, 200)} people`;
}

let data = [];
const columns = [
  'id',
  'category',
  'subcategory',
  'product_type',
  'product_name',
  'brand',
  'price_sale',
  'price_actual',
  'price_savings',
  'short_desc',
  'long_desc',
  'rating',
  'color',
  'size',
  'favorite',
  'thumbnail_url',
  'image_url'
];

for (var i = 0; i < NUM_RECORDS; i++) {
  const price = generatePrice();
  const description = generateDescription(i);
  const product = generateProduct();
  const row = [
    i, // id
    'Women', // category
    'Tops', // subcategory
    product.type, // product_type
    product.name, // product_name
    getRandomElement(brands), // brand
    price.sale, // price_sale
    price.actual, // price_actual
    price.savings, // price_savings
    description.shortText, // short_desc
    description.fullText, // long_desc
    generateRating(), // rating
    `[${grabAFewRandom(colours)}]`, // color
    `[${grabAFewRandom(sizes)}]`, // size
    'https://via.placeholder.com/50', // thumbnail_url
    'https://via.placeholder.com/250' // image_url
  ];
  data.push(row);
}

stringify(data, { header: true, columns: columns }, (err, output) => {
  if (err) throw err;
  fs.writeFile('products.csv', output, (err) => {
    if (err) throw err;
    console.log('products.csv saved.');
  });
});
