/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const DRAFT_NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const DRAFT_OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const DRAFT_PRICE_RANGE = { min: 20, max: 200 };
const DRAFT_NUM_FREELANCERS = 100;
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
  const name = getRandomItem(DRAFT_NAMES);
  const occupation = getRandomItem(DRAFT_OCCUPATIONS);

  const rate = Math.floor(
    Math.random() * (DRAFT_PRICE_RANGE.max - DRAFT_PRICE_RANGE.min + 1) +
      DRAFT_PRICE_RANGE.min
  );

  return { name, occupation, rate };
}
const ignoredPastedContent = `The following content was accidentally pasted into this JavaScript file.
The HTML does not contain any hard-coded data about freelancer names, occupations, or starting prices.	1 to >0.0 pts
Observed

0 pts
Not Observed	1 pts
This criterion is linked to a Learning Outcome
A function is written that generates a freelancer with a random name, occupation, and hourly rate.	1 to >0.0 pts
Observed

0 pts
Not Observed	1 pts
This criterion is linked to a Learning Outcome
A state variable is initialized to an array of NUM_FREELANCER freelancers with names, occupations, and rates.	1 to >0.0 pts
Observed

0 pts
Not Observed	1 pts
This criterion is linked to a Learning Outcome
A function is written that correctly calculates the average hourly rate of an array of freelancers.	1 to >0.0 pts
Observed

0 pts
Not Observed	1 pts
This criterion is linked to a Learning Outcome
A state variable is initialized with the average rate of all freelancers in state.	1 to >0.0 pts
Observed

0 pts
Not Observed	1 pts
This criterion is linked to a Learning Outcome
A component function is written for a single freelancer. It returns an HTML element containing the freelancer's name, occupation, and rate.	1 to >0.0 pts
Observed

0 pts
Not Observed	1 pts
This criterion is linked to a Learning Outcome
A component function is written for an array of freelancers. It returns an HTML element that contains elements for all freelancers in state.	1 to >0.0 pts
Observed

0 pts
Not Observed	1 pts
This criterion is linked to a Learning Outcome
A component function is written for the average rate of all freelancers.	1 to >0.0 pts
Observed

0 pts
Not Observed	1 pts
This criterion is linked to a Learning Outcome
A render function is written and called to mount the application onto the document. A visitor to the site can see all freelancers as well as the average hourly rate of those freelancers.		

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Freelancer Forum</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <script src="index.js" defer></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

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

Index.css


Answer:
`;
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