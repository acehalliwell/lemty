$( document ).ready(function() {

    updatePriceLabel();
    updateAdsLabel();
    populateLocationDropdown();
    populateWeatherDropdown();
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
        input.type = 'radio';
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
                label.textContent =  `${weather} - ${Weathers[weather].toFixed(1)}` ;

        div.appendChild(input);
        div.appendChild(label);
        weatherSelect.append(div);
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
    console.log(newLocationImage);

    var newLocationImageURL = locationImage.src.replace(/\w+.png/,  newLocationImage + ".png");
    locationImage.src = newLocationImageURL;
    updatePopulationLabel();
}