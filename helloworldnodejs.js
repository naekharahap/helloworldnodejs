var http = require('http');
var os = require("os");

var hostname = os.hostname();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
	
	reply = {}	
	reply.message = 'Hello world nodejs';
	reply.host = os.hostname();
	reply.ip = os.networkInterfaces();
	
    res.end(JSON.stringify(reply, null, 3));
}).listen(process.env.PORT || 7090); 