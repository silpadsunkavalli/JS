/**
 * Implement a partial(fn, initialArgs) that returns a new function
 * where the function has initialArgs applied automatically
 * whenever called
 */

function partial() {}

function add(a, b, c) {
  return a + b + c;
}

const partialAdd = partial(add, [1, 2]);

partialAdd(3); // 6
partialAdd(2); // 5
partialAdd(add, [1])(1, 3); // 5

/**
 * Follow-up 1: Implement a curry(fn) function that returns a new function
 * that is a curried form of the given fn.
 */

function curry(fn) {}

const curriedAdd = curry(add);

curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(5); // 8

/**
 * Follow-up 2: Implement partial() using curry()
 */

function partial2() {}
