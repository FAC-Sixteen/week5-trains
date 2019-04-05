// const trainContainers = document.getElementsByClassName("train-container");
const inboundContainer = document.querySelector(".inbound-container");
const outboundContainer = document.querySelector(".outbound-container");
const lastUpdated = document.querySelector(".last-updated")

const getUpdateDate = () => {
  lastUpdated.textContent = "";
  const now = new Date();
  const timeWhenUpdated = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  lastUpdated.textContent = "Last updated: " + buildTime()
}

const appendItems = (train, element) => {
  const firstChildContent = `${
    train.lineName
  } line train to ${train.destinationName.replace(" Underground Station", "")}`;

  const preDot = document.createElement("div");
  preDot.textContent = "·";
  preDot.classList = "pre-dot";
  // if there's a status issue, add a class to change the dot colour

  if (train.status !== "Good Service") preDot.classList.add("status-problem");

  switch (train.status) {
    case "Good Service":
      preDot.classList.add("green-dot");
      break;
    case "Part Closure":
    case "Severe Delays":
      preDot.classList.add("red-dot");
      break;
    default:
      preDot.classList.add("yellow-dot");
  }

  const firstChild = document.createElement("p");
  firstChild.textContent = firstChildContent;
  const secondChild = document.createElement("div");
  secondChild.classList = "dot-spacing";
  const thirdChild = document.createElement("p");
  thirdChild.textContent = train.timeToStation;

  const trainContainer = document.createElement("div");
  trainContainer.classList = "train-container";

  trainContainer.appendChild(preDot);
  trainContainer.appendChild(firstChild);
  trainContainer.appendChild(secondChild);
  trainContainer.appendChild(thirdChild);

  element.appendChild(trainContainer);
};

const populateDom = data => {
  inboundContainer.innerHTML = "";
  outboundContainer.innerHTML = "";
  if (data.error == "Error") {
    inboundContainer.innerHTML = "Error: No such station";
    outboundContainer.innerHTML = "Error: No such station";
    return;
  }
  data.inbound.forEach(train => appendItems(train, inboundContainer));
  data.outbound.forEach(train => appendItems(train, outboundContainer));
  getUpdateDate();
};

setInterval(getTime, 1000);