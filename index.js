/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = [
  "Writer",
  "Teacher",
  "Programmer",
  "Designer",
  "Engineer",
];
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

/**
 * Calculates the average hourly rate.
 * @param {Freelancer[]} freelancerArray
 * @returns {number}
 */
function calculateAverageRate(freelancerArray) {
  if (freelancerArray.length === 0) {
    return 0;
  }

  const totalRate = freelancerArray.reduce((total, freelancer) => {
    return total + freelancer.rate;
  }, 0);

  return totalRate / freelancerArray.length;
}

/**
 * Stores the average rate of all freelancers in state.
 */
const averageRate = calculateAverageRate(freelancers);

// === Components ===

/**
 * Creates HTML for one freelancer.
 * @param {Freelancer} freelancer
 * @returns {HTMLElement}
 */
function FreelancerComponent(freelancer) {
  const freelancerElement = document.createElement("li");

  freelancerElement.innerHTML = `
    <span>${freelancer.name}</span>
    <span>${freelancer.occupation}</span>
    <span>$${freelancer.rate}/hour</span>
  `;

  return freelancerElement;
}

/**
 * Creates HTML for the full freelancer list.
 * @returns {HTMLElement}
 */
function FreelancersComponent() {
  const freelancerList = document.createElement("ul");
  freelancerList.className = "freelancer-list";

  const freelancerElements = freelancers.map(FreelancerComponent);

  freelancerList.append(...freelancerElements);

  return freelancerList;
}

/**
 * Creates HTML for the average freelancer rate.
 * @returns {HTMLElement}
 */
function AverageRateComponent() {
  const averageElement = document.createElement("p");

  averageElement.textContent = `The average hourly rate is $${averageRate.toFixed(
    2
  )}/hour.`;

  return averageElement;
}

// === Render ===

function render() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <h2>Available Freelancers</h2>
  `;

  app.append(AverageRateComponent());
  app.append(FreelancersComponent());
}

render();