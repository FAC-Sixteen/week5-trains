const http = require('http');
const https = require('https');

const apiRequest = (url, cb) => {
    https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
          data += chunk;
        });
        resp.on('end', () => {
          cb(null, JSON.parse(data));
        });
      
      }).on("error", (err) => {
        cb(err)
      });
    }

// apiRequest('https://api.tfl.gov.uk/StopPoint/940GZZLUFPK/arrivals', (err, res) => {
//     console.log(res)
// })

module.exports = apiRequest ;