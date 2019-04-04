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

defaultStation();
setInterval(getTime, 1000);

const button = document.querySelector("#submit-button");
const input = document.querySelector("#user-input");

button.addEventListener("click", e => {
  e.preventDefault();
  // console.log("event listener happening");
  const value = input.value;
  const endpoint = `/query=${value}`;
  // console.log("this is query endpoint:", endpoint);
  const inboundContainers = document.getElementsByClassName("inbound")[0];
  const outboundContainers = document.getElementsByClassName("outbound")[0];
  while (inboundContainers.hasChildNodes())
    inboundContainers.removeChild(inboundContainers.firstChild);
  while (outboundContainers.hasChildNodes())
    outboundContainers.removeChild(outboundContainers.firstChild);
  fetch(endpoint)
    .then(res => res.json())
    .then(json => displayStationData(json));
});
