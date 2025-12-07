

// Population of locations
var locationDropdown = 
{
    "The Suburbs": 50,
    "The Park": 150,
    "Downtown": 200,
    "The Train Station": 1000
};

$( document ).ready(function() {

    updatePriceLabel();
    updateAdsLabel();
    populateLocationDropdown();
    updatePopulationLabel();
});

function populateLocationDropdown() {

    // const locationSelect = document.getElementById('param_location_value');
    const locationSelect = $('#param_location_value');
    
    for (const location in locationDropdown) {
        const option = document.createElement('option');
        option.value = locationDropdown[location];
        option.text = location;
        locationSelect.append(option);
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