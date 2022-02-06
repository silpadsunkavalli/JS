/**
 * What is the value of _this_ in the examples below?
 */

const obj1 = {
  a: 1,
  b: 2,
  print() {
    console.log(this?.a + this?.b);
  }
};

const printThis = () => console.log(this?.a + this?.b);

/**
 * Problem 1
 */

obj1.print();

// Prints 3

/**
 * Problem 2
 */

const { print: print2 } = obj1;
print2();

// Prints NaN

/**
 * Problem 3
 */

printThis();

// Prints NaN

/**
 * Problem 4
 */

obj1.print.call({ a: 10, b: 20 });

// Prints 30

/**
 * Problem 5
 */

print2.call({ a: 10, b: 20 });

// Prints 30

/**
 * Problem 6
 */

const print3 = print2.bind({ a: 10, b: 20 });

print3();

// Prints 30

/**
 * Problem 7
 */

print3.call({ a: 100, b: 200 });

// Prints 30

/**
 * Problem 8
 */

printThis.call({ a: 100, b: 200 });

// Prints NaN

/**
 * Problem 9
 */

this?.obj1?.print();

// Prints nothing
