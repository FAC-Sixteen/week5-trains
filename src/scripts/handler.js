const fs = require("fs");
const path = require("path");
const request = require("./request.js");
const sortData = require("./sortData.js");
const getStationId = require("./getStationId.js");

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
        res.writeHead(200, { "Content-Type": "application/json" });
        sortData(response);
        const result = sortData(response);
        res.end(JSON.stringify(result));
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
      request(url, (err, response) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.end("<h1>Sorry, problem with TFL</h1>");
          return;
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });
          sortData(response);
          const result = sortData(response);
          res.end(JSON.stringify(result));
        }
      });
    }
  });
};

module.exports = {
  handleHomeRoute,
  handleOtherRoute,
  handleDefaultStation,
  handleQuery
};
