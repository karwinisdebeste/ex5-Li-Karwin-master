module.exports =  {
//-------------------------------------------------------------------
  drone : {},
listDrones : function() {
        var allDrones = [];  //array
        for (var item in this.drones) {
            allDrones.push(this.drones[item]); //put each drone in array
        };
        return allDrones; 
    },
findDrones : function(id) {
        return this.drones[id];
    },
addDrone : function (drone) {
        this.drones[drone.id] = drone;
        
    },
//-------------------------------------------------------------------
  location : {},
listSensors : function() {
        var allLocation = [];  //array
        for (var item in this.location) {
            allLocation.push(this.location[item]);//put each location in array
        };
        return allLocation; //output the filled array
    },
    //search location
    searchLocation : function(id) {
        return this.location[id];
    },
    // add location
    addLocation : function (location) {
        this.location[location.id] = location;
    }
}