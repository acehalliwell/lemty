$( document ).ready(function() {

    updatePriceLabel();
    updateAdsLabel();
    populateLocationDropdown();
    populateWeatherDropdown();
    populateEventDropdown();
    updatePopulationLabel();

});

function populateLocationDropdown() {

    // const locationSelect = document.getElementById('param_location_value');
    const locationSelect = $('#param_location_value');
    
    for (const location in Locations) {
        const option = document.createElement('option');
        option.value = Locations[location];
        option.text = location;
        locationSelect.append(option);
    }
}

function populateWeatherDropdown() {
    const weatherSelect = $('#weather-group');
    let first = true;
    for (const weather in Weathers) {

        const div = document.createElement('div');
        div.className = 'form-check form-check-inline';

        const input = document.createElement('input');
        input.className = 'form-check-input';
        input.type = 'checkbox';
        input.name = 'weatherCondition';
        const dynamicId = 'weather_' + weather.toLowerCase();
        input.id = dynamicId;

        if (first) {
            input.checked = true;
            first = false;
        }
    
        const label = document.createElement('label');
                label.className = 'form-check-label';
                label.setAttribute('for', dynamicId);
                label.textContent =  `${weather} (x${Weathers[weather][0].toFixed(1)})` ;

        div.appendChild(input);
        div.appendChild(label);
        weatherSelect.append(div);
    }

}

function populateEventDropdown() {
    const eventSelect = $('#event-group');
    let first = true;
    for (const event in Events) {

        const div = document.createElement('div');
        div.className = 'form-check form-check-inline';

        const input = document.createElement('input');
        input.className = 'form-check-input';
        input.type = 'checkbox';
        input.name = 'event';
        const dynamicId = 'event_' + event.toLowerCase().replace(' ','_');
        input.id = dynamicId;

        if (first) {
            input.checked = true;
            first = false;
        }
    
        const label = document.createElement('label');
                label.className = 'form-check-label';
                label.setAttribute('for', dynamicId);
                label.textContent =  `${event} (x${Events[event][0].toFixed(1)})` ;

        div.appendChild(input);
        div.appendChild(label);
        eventSelect.append(div);
    }

}

function updatePopulationLabel() {
    const locationSelect = $('#param_location_value');
    const population = locationSelect.val();
    const populationSelect = $('#population_value');
    populationSelect.text(population);
}

function updatePriceLabel() {

    const priceDisplay = $('#param_price_label');
    const priceSlider = $('#param_price_value');
    
    price = parseFloat(priceSlider.val()).toFixed(1);
    priceDisplay.text(price);
}

function updateAdsLabel() {

    const adsDisplay = $('#param_ads_label');
    const adsSlider = $('#param_ads_value');
    
    cost = parseFloat(adsSlider.val()).toFixed(1);
    adsDisplay.text(cost);
}

function changeLocationImage() {
    const locationImage = document.getElementById('location_image');
    const newLocation = document.getElementById('param_location_value');
    var newLocationImage = newLocation.options[newLocation.selectedIndex].text
    // Remove the and replace spaces with underscores
    newLocationImage = newLocationImage.toLowerCase();
    newLocationImage = newLocationImage.replace("the ","");
    newLocationImage = newLocationImage.replace(" ","_");
    // console.log(newLocationImage);

    var newLocationImageURL = locationImage.src.replace(/\w+.png/,  newLocationImage + ".png");
    locationImage.src = newLocationImageURL;
    updatePopulationLabel();
}

function capitalizeFirstLetter(string) {
  if (string.length === 0) {
    return ""; // Handle empty strings
  }
  // Get the first character and convert it to uppercase
  const firstLetter = string.charAt(0).toUpperCase();
  // Get the rest of the string
  const restOfString = string.slice(1);
  // Concatenate them
  return firstLetter + restOfString;
}

function initiateDataGeneration()
{
    var day = $('#sim_dataset_value').val();
    var population = $('#param_location_value').val();    
    var selectedWeathers = $('input[name="weatherCondition"]:checked').map(function() {
        return capitalizeFirstLetter(this.id.replace('weather_',''));
    }).get();


    var weatherResults = weatherChance(selectedWeathers,10);
    console.log("Generating data for " + day + " days with population " + population);
    console.log("Weather Results:", weatherResults);
}