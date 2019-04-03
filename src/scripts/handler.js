const fs = require('fs');
const path = require('path');

const handleHomeRoute = (req, res) => {
    const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
        if(error){
            console.log(error);
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end('<h1>Sorry, problem on our end</h1>');
            return
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(file);
        }
    })
}

module.exports = {
    handleHomeRoute
}