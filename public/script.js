const inbound = document.querySelector(".inbound");
const outbound = document.querySelector(".outbound");

const defaultStation = () => {
  fetch("/default")
    .then(res => res.json())
    .then(json => displayStationData(json));
};

const displayStationData = data => {
  // console.log("default is working");
  // console.log(data);
  populateDom(data);
};

window.onload = defaultStation();

const button = document.querySelector("#submit-button");
const input = document.querySelector("#user-input");

button.addEventListener("click", e => {
  e.preventDefault();
  console.log("event listener happening");
  const value = input.value;
  const endpoint = `/query=${value}`;
  console.log("this is query endpoint:", endpoint);
  fetch(endpoint)
    .then(res => res.json())
    .then(json => displayStationData(json));
});

const testObject = {
  inbound: [
    {
      lineName: "victoria",
      destinationName: "seven sisters",
      timeToStation: 67
    },
    {
      lineName: "victoria",
      destinationName: "sevsdsters",
      timeToStation: 637
    },
    {
      lineName: "victoria",
      destinationName: "sdfushers",
      timeToStation: 6456
    }
  ],
  outbound: [
    {
      lineName: "piccadilly",
      destinationName: "askuhdas",
      timeToStation: 63
    },
    {
      lineName: "piccadilly",
      destinationName: "ss",
      timeToStation: 567
    },
    {
      lineName: "piccadilly",
      destinationName: "syyyeeee",
      timeToStation: 635
    }
  ]
};
