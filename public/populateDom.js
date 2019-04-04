// const trainContainers = document.getElementsByClassName("train-container");
const inboundContainer = document.querySelector(".inbound");
const outboundContainer = document.querySelector(".outbound");

const appendItems = (train, element) => {
  const firstChildContent = `${
    train.lineName
  } line train to ${train.destinationName.replace(" Underground Station", "")}`;

  const firstChild = document.createElement("p");
  firstChild.textContent = firstChildContent;
  const secondChild = document.createElement("div");
  secondChild.classList = "dot-spacing";
  const thirdChild = document.createElement("p");
  thirdChild.textContent = train.timeToStation;

  const trainContainer = document.createElement("div");
  trainContainer.classList = "train-container";

  trainContainer.appendChild(firstChild);
  trainContainer.appendChild(secondChild);
  trainContainer.appendChild(thirdChild);

  element.appendChild(trainContainer);
};

const populateDom = data => {
  data.inbound.forEach(train => appendItems(train, inboundContainer));
  data.outbound.forEach(train => appendItems(train, outboundContainer));
};


setInterval(getTime, 1000)