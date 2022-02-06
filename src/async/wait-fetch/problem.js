/**
 * Implement wait(delayMs), which returns a promise that
 * resolves after delayMs milliseconds have passed
 */

function wait(delayMs) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMs);
  });
}

wait(2000).then(() => console.log("2s have passed"));

/**
 * Implement fetch(url), which returns a promise that resolves
 * when an HTTP request to url is complete
 */

function fetch(url) {
  return new Promise((resolve, reject) => {
    function handleRes() {
      resolve(this.responseText);
    }

    function handleError() {
      reject(this.responseText);
    }

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", handleRes);
    xhr.addEventListener("error", handleError);

    xhr.open("GET", url, true);

    xhr.send();
  });
}

fetch("https://jsonplaceholder.typicode.com/todos/1").then((json) =>
  console.log(json)
);
