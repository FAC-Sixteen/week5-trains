const trainContainers = document.getElementsByClassName("train-container");

const populateDom = data => {
  console.log(trainContainers);
  for (let i = 0; i < trainContainers.length; i++) {
    let direction = "";
    let j = i;
    if (i < 3) direction = "inbound";
    else {
      direction = "outbound";
      j -= 3;
    }
    const firstChildContent = `${data[direction][j].lineName} line train to ${
      data[direction][j].destinationName
    }`;

    const firstChild = document.createElement("p");
    firstChild.textContent = firstChildContent;
    const secondChild = document.createElement("div");
    secondChild.classList = "dot-spacing";
    const thirdChild = document.createElement("p");
    thirdChild.textContent = data[direction][j].timeToStation;

    trainContainers[i].appendChild(firstChild);
    trainContainers[i].appendChild(secondChild);
    trainContainers[i].appendChild(thirdChild);
  }
};
