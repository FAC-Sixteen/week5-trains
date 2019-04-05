const fs = require("fs");
const path = require("path");
const request = require("./request.js");
const sortData = require("./sortData.js");
const getStationId = require("./getStationId.js");
const sortStatus = require("./sortStatus.js");

const handleHomeRoute = (req, res) => {
  const filePath = path.join(__dirname, "..", "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Sorry, problem on our end</h1>");
      return;
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(file);
    }
  });
};

const handleOtherRoute = (req, res) => {
  const endpoint = req.url;
  const extension = endpoint.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpeg",
    png: "image/png",
    ico: "image/x-ico",
    TFF: "font/ttf"
  };
  const filePath = path.join(__dirname, "..", "..", endpoint);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Sorry, problem on our end</h1>");
      return;
    } else {
      res.writeHead(200, { "Content-Type": extensionType[extension] });
      res.end(file);
    }
  });
};

const handleDefaultStation = (req, res) => {
  request(
    "https://api.tfl.gov.uk/StopPoint/940GZZLUFPK/arrivals",
    (err, response) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Sorry, problem with TFL</h1>");
        return;
      } else {
        const preStatus = sortData(response);
        // api request for lines
        request(
          "https://api.tfl.gov.uk/line/mode/tube/status",
          (er, result) => {
            if (er) {
              res.writeHead(500, { "Content-Type": "text/html" });
              res.end("<h1>Sorry, problem with TFL</h1>");
              return;
            } else {
              res.writeHead(200, { "Content-Type": "application/json" });
              // with response, run status cleanser
              // add line status to preStatus
              const newThing = sortStatus.sortStatus(preStatus, result);

              res.end(JSON.stringify(newThing));
            }
          }
        );
      }
    }
  );
};

const handleQuery = (req, res) => {
  const query = req.url.split("=")[1];
  fs.readFile(__dirname + "/stations.json", (err, file) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Sorry, problem with TFL</h1>");
      return;
    } else {
      const stationId = getStationId(JSON.parse(file), query);
      const url = `https://api.tfl.gov.uk/StopPoint/${stationId}/arrivals`;
      if (stationId == null || stationId == undefined || stationId == "") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Error" }));
        return;
      }
      request(url, (err, response) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("<h1>Sorry, problem with TFL</h1>");
          return;
        } else {
          const preStatus = sortData(response);
          // api request for lines
          request(
            "https://api.tfl.gov.uk/line/mode/tube/status",
            (er, result) => {
              if (er) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>Sorry, problem with TFL</h1>");
                return;
              } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                // with response, run status cleanser
                // add line status to preStatus
                const newThing = sortStatus.sortStatus(preStatus, result);

                res.end(JSON.stringify(newThing));
              }
            }
          );
        }
      });
    }
  });
};

const handleAutocomplete = (req, res) => {
  const query = req.url
    .split("=")[1]
    .split("%20")
    .join(" ")
    .toLowerCase();
  fs.readFile(__dirname + "/stations.json", (err, file) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Sorry, problem with TFL</h1>");
      return;
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      let array = [];
      JSON.parse(file).map(arr => {
        // console.log(arr);
        if (arr[0].toLowerCase().includes(query)) {
          array.push(arr[0]);
        }
      });
      const uniqueStations = [...new Set(array)];
      res.end(JSON.stringify(uniqueStations.slice(0, 5)));
    }
  });
};

module.exports = {
  handleHomeRoute,
  handleOtherRoute,
  handleDefaultStation,
  handleQuery,
  handleAutocomplete
};
