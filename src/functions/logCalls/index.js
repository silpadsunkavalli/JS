function logCalls(fn) {
  return (...args) => {
    console.log(`Calling function: ${fn.name || "Anonymous"}()`);

    return fn(...args);
  };
}

function noop() {}

const newFn = logCalls(noop);

newFn(); // Calling function noop()
newFn(); // Calling function noop()

logCalls(() => {})(); // Calling function Anonymous()
