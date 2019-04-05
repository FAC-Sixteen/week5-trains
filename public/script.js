let latestInput = "Finsbury Park";

const refreshButton = document.querySelector("#refresh-button");
const submitButton = document.querySelector("#submit-button");
const input = document.querySelector("#user-input");
const datalist = document.getElementById("autocomplete");

const defaultStation = () => {
  fetch("/default")
    .then(res => res.json())
    .then(json => populateDom(json));
};

const searchStation = (string, cb, cbOptions) => {
  const endpoint = `/query=${string}`;
  fetch(endpoint)
    .then(res => res.json())
    .then(json => {
      populateDom(json), cb(...cbOptions);
    });
};

defaultStation();
setInterval(getTime, 1000);

const removeClass = (el, cl) => {
  el.classList.remove(cl);
};

const addClass = (el, cl) => {
  el.classList.add(cl);
};

submitButton.addEventListener("click", e => {
  e.preventDefault();
  console.log("searching...");
  addClass(submitButton, "button-active");
  const value = input.value;
  latestInput = value;
  searchStation(value, removeClass, [submitButton, "button-active"]);
});

refreshButton.addEventListener("click", () => {
  console.log("refreshing...", latestInput);
  addClass(refreshButton, "button-active");
  searchStation(latestInput, removeClass, [refreshButton, "button-active"]);
});
input.addEventListener("input", e => {
  e.preventDefault();
  const value = input.value;
  const endpoint = `/autocomplete=${value}`;
  fetch(endpoint)
    .then(res => res.json())
    .then(json => fillAutocomplete(json));
});

const fillAutocomplete = json => {
  datalist.innerHTML = "";
  json.forEach(item => {
    const optionElem = document.createElement("option");
    optionElem.textContent = item;
    optionElem.setAttribute("aria-label", "list option: " + item);
    datalist.appendChild(optionElem);
  });
};
