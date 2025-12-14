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
    "The Suburbs": 50, // Default
    "The Park": 150,
    "Downtown": 200,
    "The Train Station": 1000
};

// [weight,probability]

var Weathers =
{
    "Sunny": [1.0,15], // Default
    "Cloudy": [0.8,8],
    "Rainy": [0.5,3],
    "Thunderstorm": [0.3,2],
    "Hailstorm": [0.1,1]
};

var Events =
{
    "Normal" : [1.0,30], // Default
    "Payday": [1.5,1],
    "Local Festival": [1.25,2],
    "Natural Disaster": [0.3,1],
};

function testWeatherChance(n){

    const labels = Object.keys(Weathers);
    const weights = labels.map(key => Weathers[key][1]);

    const chance = new Chance();
    

    for (let index = 0; index < n; index++) {
        var selectedWeather = chance.weighted(labels, weights);
        console.log(selectedWeather);
    }
}

function testEventChance(n){

    const labels = Object.keys(Events);
    const weights = labels.map(key => Events[key][1]);

    const chance = new Chance();
    

    for (let index = 0; index < n; index++) {
        var selectedEvent = chance.weighted(labels, weights);
        console.log(selectedEvent);
    }
}
    