const getStationId = (json, query) => {
  // console.log("getStationId happenening");
  let id = "";
  json.map(station => {
    // console.log(station);
    const commonName = station[0].toLowerCase();
    const queryFormat = query
      .split("%20")
      .join(" ")
      .toLowerCase();
    // console.log("happening");
    if (commonName.includes(queryFormat) && station[1] != null) {
      // console.log("id:", station[1]);
      id = station[1];
    }
  });
  // console.log(id);
  return id;
};

module.exports = getStationId;
