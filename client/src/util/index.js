import _ from 'underscore';

/**
 * Helper function to compare the helpfulness rating of two items.
 * When used as the comparator function for the array.sort() method,
 * this function will ensure the result is sorted from most to least helpful.
 * @param {Object} itemOne
 * @param {Number} itemOne.helpfulness
 * @param {Object} itemTwo
 * @param {Number} itemTwo.helpfulness
 * @returns {Number} the difference between the helpfulness ratings of the items
 */
export function compareHelpfulness(itemOne, itemTwo) {
  return itemTwo.helpfulness - itemOne.helpfulness;
}

/**
 * @param {String} string
 * @returns {String} a string with the first letter capitalized
 */
export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

/**
 * @param {String} string
 * @returns {String} a string with the first letter lowercased
 */
export function lowercase(string) {
  return string[0].toLowerCase() + string.slice(1);
}

/**
 * @param {Number} numFalse
 * * @param {Number} numTrue
 * @returns {Number} a number rounded down to the nearest integer
 */
export function ratingPercentage(numFalse, numTrue) {
  if (Number.isNaN(numFalse) || Number.isNaN(numTrue)) {
    return 0;
  }
  const totalNumberReviews = numFalse + numTrue;

  if (totalNumberReviews === 0) {
    return 0;
  }
  const finalPercent = Math.floor((numTrue / totalNumberReviews) * 100);

  return finalPercent;
}

/**
 * @param {Object} question - Question object from the API server
 * @param {String} filter - query to filter Q&A results
 * @returns {Boolean} `true` if `filter` is in the question's body or any associated answer's body
 */
export function questionFilterTest(question, filter) {
  const { question_body: body, answers } = question;
  const filterRE = new RegExp(filter, 'i');

  return (
    filterRE.test(body) ||
    _.some(answers, (answer) => filterRE.test(answer.body))
  );
}

/**
 * @param {Number} num
 * @returns {Number} a number rounded to the nearest quarter
 */
export function starFillPercentage(num) {
  if (num === 0) {
    return 0;
  }

  const roundedNum = Math.round(num / 0.25) * 0.25;
  const fillPercentage = (roundedNum / 5) * 100;

  return fillPercentage;
}

/**
 * @param {String} value Raw user input string
 * @returns {String} html-safe escaped string
 */
export const escapeValue = (value) => _.template('<%- value %>')({ value });

/**
 *
 * @param {Array} array Array of ratings for a product
 * @returns Average rating for current product
 */
export const aveRating = (array) => (
  _.reduce(array, (sum, num) => sum + num.rating, 0) / array.length
);
