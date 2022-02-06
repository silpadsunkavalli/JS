fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => {
    const newId = json.id + 1;

    return fetch(`https://jsonplaceholder.typicode.com/todos/${newId}`);
  })
  .then((response) => response.json())
  .then((json) => console.log(json));

/**
 * Utility functions
 */

const parallelCalls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3"
];

/**
 * Fetch in parallel, and wait for all fetches to complete
 */
Promise.all(parallelCalls.map((url) => fetch(url)))
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  .then((json) => console.log(json));

/**
 * Fetch in parallel, and resolve with first request to complete
 */
Promise.race(parallelCalls.map((url) => fetch(url)))
  .then((response) => response.json())
  .then((json) => console.log(`The winner of the race was ID: `, json.id))
  .finally(() => console.log("promise chain is finished"));

/**
 * Return a promise that resolves to given value
 */
Promise.resolve(5).then((val) => console.log(val));

/**
 * Returns a promise that rejects to a given value
 */
Promise.reject("My Error").catch((error) => console.error(error));
