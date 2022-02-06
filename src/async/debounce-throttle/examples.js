let timesCalled = 0;

const callApi = (e) => {
  timesCalled++;

  textEl.textContent = `API Called ${timesCalled} times`;
};

document.body.innerHTML = `
  <div>
    <input type="text" id="text-input" />
    <br />
    <p id="num-calls"></p>
  </div>
`;

const inputEl = document.getElementById("text-input");
const textEl = document.getElementById("num-calls");

inputEl.addEventListener("input", callApi);
