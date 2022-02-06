/**
 * Problem 1
 */

console.log("0");

setTimeout(() => console.log("1"), 100);
setTimeout(() => console.log("3"), 50);

console.log("4");

/**
 * 0
 * 4
 * 3
 * 1
 */

/**
 * Problem 2
 */

console.log("0");

setTimeout(() => console.log("1"), 0);

console.log("2");

/**
 * 0
 * 2
 * 1
 */

/**
 * Problem 3
 */

console.log("0");

setTimeout(() => console.log("1"), 0);

Promise.resolve("2").then((val) => console.log(val));

/**
 * 0
 * 2
 * 1
 */

/**
 * Problem 4
 */

console.log("0");

new Promise((resolve) => {
  console.log("1");

  resolve();
}).then(() => {
  console.log("2");
});

setTimeout(() => console.log("3"), 0);

console.log("4");

/**
 * 0
 * 1
 * 4
 * 2
 * 3
 */
