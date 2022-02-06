function printThis(msg) {
  console.log(`${msg} ${JSON.stringify(this)}`);
}

printThis(); // undefined

/**
 * bind()
 */

const newFn1 = printThis.bind({ message: "hello" });

newFn1("This value: "); // {message: 'hello'}

const newFn2 = printThis.bind({ message: "hello" }, "This value: ");

newFn2();

/**
 * call()
 */

printThis.call({ message: "hello " }, "This value: ");

/**
 * apply()
 */
printThis.apply({ message: "hello" }, ["This value: "]);
