// cleanses status data to make pretty object
const statusArray = lines => {
  const linesObj = {};
  lines.forEach(line => {
    linesObj[line.name] = line.lineStatuses[0].statusSeverityDescription;
  });
  return linesObj;
};

// adds a 'status' key to pre-existing trains object
const sortStatus = (trains, lines) => {
  const inbound = trains.inbound;
  const outbound = trains.outbound;
  const status = statusArray(lines);
  inbound.forEach(train => {
    train.status = status[train.lineName];
  });
  outbound.forEach(train => {
    train.status = status[train.lineName];
  });
  return {
    inbound,
    outbound
  };
};

// console.log(statusArray(lineStatus));

module.exports = {
  lineStatus,
  sortStatus
};
