/**
 * Implement a uniqueVals() function that will return an array
 * of unique values of a given object.
 *
 * uniqueVals({ a: 1, b: 1, c: 2 }) -> [1, 2]
 */

function uniqueVals(obj) {
  const values = Object.values(obj);
  const uniqueValues = new Set(values);

  return [...uniqueValues];
}
