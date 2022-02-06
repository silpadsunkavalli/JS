const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

function callApi() {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

async function callApi2() {
  const res = await fetch(apiUrl);
  const json = await res.json();

  console.log(json);
}

callApi();
callApi2();

/**
 * Looping over array of asynchronous functions sequentially
 */

function loopPromises(asyncFns) {
  return asyncFns.reduce((chain, fn) => {
    return chain.then(fn);
  }, Promise.resolve());
}

async function loopPromisesAsync(asyncFns) {
  for (const fn of asyncFns) {
    await fn;
  }

  asyncFns.forEach(async (fn) => {
    await fn();
  });
}

/**
 * Watch out for the bug below! The function in forEach runs
 * for each element in the function without awaiting (the nested
 * await is separate from the top level async function)
 */
async function loopPromisesAsyncBuggy(asyncFns) {
  asyncFns.forEach(async (fn) => {
    await fn();
  });
}
