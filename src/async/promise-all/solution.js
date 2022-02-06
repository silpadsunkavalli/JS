/**
 * Implement a promiseAll(promises) function that mimicks
 * Promise.all().
 */

function promiseAll(promises) {
  if (!promises.length) {
    return Promise.resolve([]);
  }

  const [first, ...rest] = promises;

  return first.then((result) => {
    return promiseAll(rest).then((nestedResults) => {
      return [result, ...nestedResults];
    });
  });
}

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

/**
 * Alternative: iterative
 */

function promiseAll2(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let numFulfilled = 0;

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];

      promise
        .then((result) => {
          results[i] = result;

          numFulfilled++;

          if (numFulfilled === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    }
  });
}

const promises2 = [
  wait(100).then(() => console.log("A")),
  wait(200).then(() => console.log("B")),
  wait(300).then(() => console.log("C"))
];

promiseAll2(promises2).then(() => console.log("ALL DONE"));
