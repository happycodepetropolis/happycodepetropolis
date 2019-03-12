var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/views/index.html');
});

var port = Number(process.env.port | 9000);
app.listen(port, function(){
    console.log(`Rodando na porta: ${port}`);
})