const getStationId = (json, query) => {
  console.log("happens");
  json.stopPoints.map(stopPoint => {
    const commonName = stopPoint.commonName.toLowerCase();
    console.log("happening");
    if (commonName.includes(query)) {
      console.log(stopPoint.stationNaptan);
      return stopPoint.stationNaptan;
    }
  });
};

module.exports = getStationId;
