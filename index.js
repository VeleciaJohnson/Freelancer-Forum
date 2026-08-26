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

/**
 * Creates the initial freelancer state.
 */
const freelancers = Array.from(
  { length: NUM_FREELANCERS },
  createFreelancer
);

function getAverageRate(freelancers) {
  const total = freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0);
  return total / freelancers.length;
}

function Freelancer({ name, occupation, rate }) {
  return `
    <li>
      <span>${name}</span>
      <span>${occupation}</span>
      <span>$${rate}/hr</span>
    </li>
  `;
}

function Freelancers(freelancers) {
  return freelancers.map(Freelancer).join("");
}

function AverageRate(rate) {
  return `<p>Average hourly rate: <strong>$${rate.toFixed(2)}</strong></p>`;
}

function render() {
  const app = document.querySelector("#app");
  const averageRate = getAverageRate(freelancers);

  app.innerHTML = `
    <h1>Freelancer Forum</h1>
    ${AverageRate(averageRate)}
    <ul class="freelancer-list">
      <li class="freelancer-list-header" aria-hidden="true">
        <strong>Name</strong>
        <strong>Occupation</strong>
        <strong>Rate</strong>
      </li>
      ${Freelancers(freelancers)}
    </ul>
  `;
}

render();
