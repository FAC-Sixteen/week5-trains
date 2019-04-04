const inbound = document.querySelector(".inbound");
const outbound = document.querySelector(".outbound");

const defaultStation = () => {
  fetch("/default")
    .then(res => res.json())
    .then(json => displayStationData(json));
};

const displayStationData = data => {
  console.log("default is working");
  console.log(data);
  populateDom(testObject);
};

window.onload = defaultStation();

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
