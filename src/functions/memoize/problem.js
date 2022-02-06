/**
 * Implement a memoize(fn) function that returns a new
 * function that mirrors the original function, but caches
 * the output based on the given parameters.
 *
 * We can assume fn only takes one argument (of any type).
 */

function memoize(fn) {}

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
 */

function memoize2(fn) {}

/**
 * Follow-up 2: What if we want to support variable number of
 * arguments? We can assume the variable arguments are all
 * primitive types or objects/arrays of primitive types.
 */

function memoize3(fn) {}
