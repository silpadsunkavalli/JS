/**
 * Implement a promiseAll() function that mimicks
 * Promise.all()
 */

function promiseAll(promises) {}

const promises = [
  wait(100).then(() => console.log("A")),
  wait(200).then(() => console.log("B")),
  wait(300).then(() => console.log("C"))
];

promiseAll(promises).then(() => console.log("ALL DONE"));

function wait(delayMs) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMs);
  });
}
