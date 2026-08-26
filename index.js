/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
// === State ===

/**
 * Returns one random item from an array.
 * @param {Array} array
 * @returns {*}
 */
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

/**
 * Creates one freelancer with random data.
 * @returns {Freelancer}
 */
function createFreelancer() {
  const name = getRandomItem(NAMES);
  const occupation = getRandomItem(OCCUPATIONS);

  const rate = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) +
      PRICE_RANGE.min
  );

  return { name, occupation, rate };
}

