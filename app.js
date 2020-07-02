var http = require("http");
var url = 'https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=7d0ba2936a5c66ade425eb36d40dea8aunits=metric';

var server =  http.createServer(function(req,res){
    var req= require('request');
    req(url,function(err,res,body) {

        res.write("hi");
        res.end();     
    });
}).listen(8081);