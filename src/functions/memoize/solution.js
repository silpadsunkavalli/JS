/**
 * Implement a memoize(fn) function that returns a new
 * function that mirrors the original function, but caches
 * the output based on the given parameters.
 *
 * We can assume fn only takes one argument.
 */

function memoize(fn) {
  const cache = new Map();

  return (arg) =>
    cache.has(arg) ? cache.get(arg) : cache.set(arg, fn(arg)).get(arg);
}

function log(name) {
  console.log(name);
}

const memoizedLog = memoize(log);

memoizedLog("Chris"); // logs 'Chris'
memoizedLog("Chris"); // no log

memoizedLog("Angela"); // logs 'Angela'
memoizedLog("Angela"); // no log

/**
 * Follow-up 1: How can we provide the user the ability to
 * clear the cache?
 *
 * A few possibilities:
 * - pass in a custom cache argument to function
 * - add a special method to the returned function
 * - pass in a unique symbol to clear the cache
 */

// solution 1: special method
function memoize2(fn) {
  const cache = new Map();

  const returnedFn = (arg) =>
    cache.has(arg) ? cache.get(arg) : cache.set(arg, fn(arg)).get(arg);

  returnedFn.clear = () => cache.clear();

  return returnedFn;
}

// solution 2: pass in a unique symbol
const cacheBuster = Symbol();

function memoize2sol2(fn) {
  const cache = new Map();

  const returnedFn = (arg) => {
    if (arg === cacheBuster) {
      cache.clear();
    }

    return cache.has(arg) ? cache.get(arg) : cache.set(arg, fn(arg)).get(arg);
  };

  returnedFn.clear = () => cache.clear();

  return returnedFn;
}

/**
 * Follow-up 2: What if we want to support variable number of
 * arguments? We can assume the variable arguments are all
 * primitive types or objects/arrays of primitive types.
 */

function memoize3(fn) {
  const cache = {};

  return (...args) => {
    const cacheKey = JSON.stringify(args);

    if (cache.hasOwnProperty(cacheKey)) {
      return cache[cacheKey];
    }

    const newVal = fn(...args);

    cache[cacheKey] = newVal;

    return newVal;
  };
}
