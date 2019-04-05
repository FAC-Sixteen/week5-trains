const sortData = json => {
  // sort json by time
  const sorted = json.sort((a, b) => a.timeToStation - b.timeToStation);
  //   create separate inbound and outbound arrays with first 3 items
  const inbound = sorted
    .filter(train => train.direction === "inbound")
    .slice(0, 3);
  const outbound = sorted
    .filter(train => train.direction === "outbound")
    .slice(0, 3);

  const inboundTrains = mapTrains(inbound);

  const outboundTrains = mapTrains(outbound);

  let trains = {
    inbound: inboundTrains,
    outbound: outboundTrains
  };
  return trains;
};

const timeConverter = int => {
  const mins = Math.floor(int / 60);
  // console.log(mins);
  return mins === 0 ? "due" : mins + (mins === 1 ? "min" : "mins");
};

const mapTrains = array => {
  return array.map(train => {
    return {
      timeToStation: timeConverter(train.timeToStation),
      lineName: train.lineName,
      destinationName: train.destinationName
    };
  });
};

module.exports = {
  sortData,
  timeConverter,
  mapTrains
};
