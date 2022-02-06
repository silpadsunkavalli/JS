/**
 * Implement an invert() function, where given an object with
 * keys and values, a new object is returned with the keys
 * and values having been swapped.
 *
 * invert({ a: 2, b: 'hey' }) -> { 2: 'a', 'hey': 'b' }
 */

function invert(obj) {
  const invertedObj = {};

  for (const [k, v] of Object.entries(obj)) {
    invertedObj[v] = k;
  }

  return invertedObj;
}

/**
 * Version 2 (functional)
 */
function invert2(obj) {
  return Object.entries(obj).reduce((invertedObj, [k, v]) => {
    invertedObj[v] = k;

    return invertedObj;
  }, {});
}
