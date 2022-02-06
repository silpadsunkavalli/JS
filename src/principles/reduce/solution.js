/**
 * Implement reduce(arr, fn, init), which matches the behavior
 * of Array.prototype.reduce() given an initital value
 */

function reduce(arr, fn, init) {
  let accumulator = init;

  for (const el of arr) {
    accumulator = fn(accumulator, el);
  }

  return accumulator;
}

const val = reduce([1, 2, 3], (sum, num) => sum + num, 0);

console.log(val); // 6

/**
 * Follow-up 1: implement Array.prototype.map() using reduce()
 */

function map(arr, fn) {
  return reduce(arr, (currArr, el) => currArr.concat(fn(el)), []);
}

const val2 = map([1, 2, 3], (n) => n * 2);

console.log(val2); // [2, 4, 6]

/**
 * Follow-up 2: implement Array.prototype.filter() using reduce()
 */

function filter(arr, fn) {
  return reduce(
    arr,
    (currArr, el) => (fn(el) ? currArr.concat(el) : currArr),
    []
  );
}

const val3 = filter([1, 2, 3, 4, 5], (n) => n % 2 === 0);

console.log(val3); // [2, 4]
