/**
 * setTimeout()
 */

function greet() {
  console.log("Hello");
}

setTimeout(greet, 1000);

const timeoutId = setTimeout(() => {
  console.log("World!");
}, 2000);

clearTimeout(timeoutId);

setTimeout(() => console.log("one"), 2000);
setTimeout(() => console.log("two"), 1000);
setTimeout(() => console.log("three"), 3000);

/**
 * setInterval()
 */

const intervalId = setInterval(() => console.log("hi"), 3000);

/**
 * Simulate blocking function
 */
// for (let i = 0; i < 10000000000; i++) {}

setTimeout(() => {
  clearInterval(intervalId);
}, 9000);

let numTimesCalled = 0;

const intervalId2 = setInterval(() => {
  numTimesCalled++;

  console.log("Called interval");

  if (numTimesCalled === 3) {
    clearInterval(intervalId2);
  }
}, 3000);
