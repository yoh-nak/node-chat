var ws = require('websocket.io');
var server = ws.listen(1337, function(){
	console.log('Server running at http://127.0.0.1:1337/');
});

server.on('connection', function(client){
	client.on('message', function(message){
		var obj = JSON.parse(message);
		console.log('receive message is "' + obj.text + '" by "' + obj.author + '"');
		server.clients.forEach(function(client){
			client.send(obj.author + ' > ' + obj.text);
		});
	});
});