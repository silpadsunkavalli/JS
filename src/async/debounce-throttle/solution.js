/**
 * Implement a debounce(fn, waitMs) that returns a new function
 * that is debounced with a wait time of waitMs.
 *
 * The returned function does not have to fire immediately when
 * invoked initially.
 */

function debounce(fn, waitMs) {
  let id;

  return (...args) => {
    clearTimeout(id);

    id = setTimeout(() => fn(...args), waitMs);
  };
}

/**
 * Follow-up 1: Implement a throttle(fn, waitMs) that returns a new function
 * that is throttled with a wait time of waitMs.
 *
 * The returned function does not have to fire immediately when
 * invoked initially.
 */

function throttle(fn, waitMs) {
  let id;
  let latestArgs;

  return (...args) => {
    latestArgs = args;

    if (!id) {
      id = setTimeout(() => {
        fn(...latestArgs);
        id = undefined;
      }, waitMs);
    }
  };
}

/**
 * Follow-up 2: what about _this_? What if the debounced function is part
 * of a class? Discuss
 */

/**
 * Wrap the callApi function below with the debounce() or throttle()
 * to test
 */

let timesCalled = 0;

const callApi = (e) => {
  timesCalled++;

  textEl.textContent = `API Called ${timesCalled} times`;
};

document.body.innerHTML = `
  <div>
    <input type="text" id="text-input" />
    <br />
    <p id="num-calls"></p>
  </div>
`;

const inputEl = document.getElementById("text-input");
const textEl = document.getElementById("num-calls");

inputEl.addEventListener("input", callApi);
