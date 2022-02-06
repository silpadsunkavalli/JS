function handleRes() {
  console.log(this.responseText);
}

function handleError() {
  console.error(this.responseText);
}

const xhr = new XMLHttpRequest();

xhr.addEventListener("load", handleRes);
xhr.addEventListener("error", handleError);

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

xhr.send();
