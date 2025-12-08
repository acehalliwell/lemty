class Actor {

    constructor() {
        this.age = Math.floor(Math.random() * 60) + 18; // Age between 18 and 77 
    }
}

class Day {

    constructor() {
        this.day = 1;
    }
}

// Simulation Parameters
var Locations = 
{
    "The Suburbs": 50,
    "The Park": 150,
    "Downtown": 200,
    "The Train Station": 1000
};

var Weathers =
{
    "Sunny": 1.0,
    "Cloudy": 0.8,
    "Rainy": 0.5,
    "Thunderstorm": 0.3,
    "Hailstorm": 0.1
};