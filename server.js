var express = require('express');
var bodyParser = require('body-parser');

const app = express();


var artists = [
    {
        id:1,
        name:'Metalica'
    },
    {
        id:2,
        name:'Iron Maden'
    },
    {
        id:3,
        name:'Deep Purple'
    },
]
app.get('/', function (req, res){
    res.send("Hello API");
});

app.get('/artists', function(req, res){
    res.send(artists);
});

app.get('/artists/:id', function(req, res){  
    var artist = artists.find(function(artist){
        return artist.id === Number(req.params.id)
    });
    res.send(artist);
});

app.listen(3012, function(){
    console.log("Api app started")
});