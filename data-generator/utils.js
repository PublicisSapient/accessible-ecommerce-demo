/**
 * Utility functions
 *
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function getRandomNumber(min, max) {
  return ((Math.random() * (max - min)) + min).toFixed(1); //The maximum is exclusive and the minimum is inclusive
}
function getShuffledArray(originalArray) {
  let clonedArray = [...originalArray]; // Non-destructive. Perform shuffle on copy of array
  // Durstenfeld shuffle algorithm via https://stackoverflow.com/a/12646864
  for (let i = clonedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clonedArray[i], clonedArray[j]] = [clonedArray[j], clonedArray[i]];
  }
  return clonedArray;
}
function grabAFewRandom(arr) {
  return getShuffledArray(arr).slice(0, getRandomInt(2, arr.length));
}
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function truncateText(fullText, limit, suffix) {
  return fullText.substring(0, fullText.indexOf(' ', limit)) + suffix;
}

module.exports = {
  getRandomInt,
  getRandomNumber,
  getShuffledArray,
  grabAFewRandom,
  getRandomElement,
  truncateText
};