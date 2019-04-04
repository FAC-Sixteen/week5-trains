let latestInput = "Finsbury Park";

const defaultStation = () => {
  fetch("/default")
    .then(res => res.json())
    .then(json => populateDom(json));
};

const searchStation = string => {
  const endpoint = `/query=${string}`;
  fetch(endpoint)
    .then(res => res.json())
    .then(json => populateDom(json));
};

defaultStation();
setInterval(getTime, 1000);

const submitButton = document.querySelector("#submit-button");
const input = document.querySelector("#user-input");

submitButton.addEventListener("click", e => {
  e.preventDefault();
  console.log("searching...");
  const value = input.value;
  latestInput = value;
  searchStation(value);
});

const refreshButton = document.querySelector("#refresh-button");

refreshButton.addEventListener("click", () => {
  console.log("refreshing...", latestInput);
  searchStation(latestInput);
});
