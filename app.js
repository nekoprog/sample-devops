let http = require('http');
let fs = require('fs');
let server = '127.0.0.1';
let port = 8080;

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./static/skel.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};
http.createServer(handleRequest).listen(port);
//console.log('Server running at http://'+server+':'+port+'/');
