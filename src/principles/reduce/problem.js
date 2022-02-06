/**
 * Implement reduce(arr, fn, init), which matches the behavior
 * of Array.prototype.reduce() given an initial value
 */

function reduce(arr, fn, init) {}

const val = reduce([1, 2, 3], (sum, num) => sum + num, 0);

console.log(val); // 6

/**
 * Follow-up 1: implement Array.prototype.map() using reduce()
 */

function map(arr, fn) {}

/**
 * Follow-up 2: implement Array.prototype.filter() using reduce()
 */

function filter(arr, fn) {}
