const defaultStation = () => {
  fetch("/default")
    .then(res => res.json())
    .then(json => displayStationData(json));
};

const displayStationData = data => {
  console.log("default is working");
  populateDom(data);
};

window.onload = defaultStation();
