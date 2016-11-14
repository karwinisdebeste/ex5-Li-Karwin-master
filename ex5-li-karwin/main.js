// inladen van de dependencies - externe dependencies inladen via het commando: 
// npm install express --save
// npm install body-parser --save
var express = require('express'); // eenvoudige webserver in node js
var parser = require('body-parser'); // extensie op express voor eenvoudig body uit te lezen
// Toevoegen van de code van de dal vervangt onze
// onze lokale 'datastore'. deze variable bewaart onze state. 
var dal = require("./storage.js");
//validatie inladen
var validation = require("./validate.js");
// aanmaken van de webserver variabele
var app = express();
// automatische json-body parsers van request MET media-type application/json gespecifieerd in de request.
app.use(parser.json());
//----------------------------------------------------------------------------------------
// GET op /drone. 
app.get("/drone", function (request, response) {
  response.send(dal.listDrones());
});
// GET op /drones/{bookId}. 
app.get("/drone/:id", function (request, response) {
  var book = dal.findDrones(request.params.id);
  if(drone) {
    response.send(drone);//send info:drone
  }else {
    response.status(404).send();//send info:drone404
  }
});
//POST op /drone
app.post("/drone", function (request, response) {
  	var drone = request.body;
	var uniqueId = new Date().getTime(); 
	drone.id = uniqueId;
	store.addDrone();
  response.status(201).location("../drones/"+book.id).send();
});
//----------------------------------------------------------------------------------------
app.get("/location", function (request, response) {
    response.send(store.listlocation());
});
// GET op /location
app.get("/location/:id", function (request, response) {
    var location = store.searchlocation(request.params.id);
    if (location) {
        response.send(location); //send info:location
    } else {
        response.status(404).send();//send info:location404
    }
});
// GET requests on /drones/:id/location with drone id to get all location attached to the drone.
app.get("/drones/:id/location", function (request, response) {
    var dronelocation = store.listDronelocation(request.params.id);
    if (dronelocation) {
        response.send(dronelocation); //send info:location
    } else {
        response.status(404).send();//send info:location404
    }
});
// POST op /location
app.post("/location", function (request, response) {
    var location = request.body; 
    var uniqueId = new Date().getTime(); 
    location.id = uniqueID;
    // add the measurement to the store
    store.addlocation();
    response.status(201).location("../location/"+location.id).send(); //respond with the 201 status 'Created' and give the URL of the created drone.
});
//----------------------------------------------------------------------------------------
// de server starten op poort 4567 (bereikbaar op http://localhost:4567 )
app.listen(4567);
console.log("Server started");