function curry() {}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

curriedAdd(1)(2)(3); // 6

function partial() {}

const partialAdd = partial(add, [1, 2]);

partialAdd(3); // 6
partialAdd(2); // 5

/**
 * hard coded curriedAdd()
 */

function curriedAddHardCoded(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
