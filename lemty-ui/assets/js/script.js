const priceSlider = document.getElementById('param_price_value');
const priceDisplay = document.getElementById('param_price_label');

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
    populateLocationDropdown();
});

function populateLocationDropdown() {

    const locationSelect = document.getElementById('param_location_value');
    
    for (const location in locationDropdown) {
        const option = document.createElement('option');
        option.value = locationDropdown[location];
        option.text = location;
        locationSelect.appendChild(option);
    }
}


function updatePriceLabel() {
        priceDisplay.textContent = parseFloat(priceSlider.value).toFixed(1);
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

}