const handler = require("./handler");

const router = (req, res) => {
  if (req.url === "/") {
    handler.handleHomeRoute(req, res);
    // res.writeHead(200, {'content-type': 'text/html'})
    // res.end('trains trains trains')
  } else if (req.url === "/default") {
    handler.handleDefaultStation(req, res);
  } else if (req.url.includes("/query=")) {
    handler.handleQuery(req, res);
  } else if (req.url.includes("/public/")) {
    handler.handleOtherRoute(req, res);
  } else {
    res.writeHead(404);
    res.end("404 not found");
  }
};

module.exports = router;
