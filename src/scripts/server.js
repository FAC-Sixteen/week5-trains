const http = require('http');
const port = process.env.PORT || 5000;
const router = require('./router');

http.createServer(router).listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`)
})