/**
 * Implement partial(fn, initialArgs)
 */

function partial(fn, initialArgs) {
  return (...args) => {
    fn(...initialArgs.concat(args));
  };
}

/**
 * Alternative solution with bind()
 */
function partialAlt(fn, initialArgs) {
  return fn.bind(this, ...initialArgs);
}

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

function curry(fn) {
  const numArgs = fn.length;

  const inner = (...args) => {
    return args.length >= numArgs
      ? fn(...args)
      : (...newArgs) => inner(...args.concat(newArgs));
  };

  return inner;
}

const curriedAdd = curry(add);

curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(5); // 8

/**
 * Follow-up 3: Implement partial() using curry()
 */

function partial2(fn, initialArgs) {
  return (...args) => curry(fn)(...initialArgs)(...args);
}
