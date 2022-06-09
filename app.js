// import needed modules

// state

// components
    // component
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions

function getDefaultCity() {
    const defaultCity = {
        name: '',
        climate: 'cave',
        architecture: 'tent',
        slogans: []
    };
    return defaultCity;
}

const cityInputs = document.getElementById('city-inputs');
const [climateSelect, architectureSelect] = cityInputs.querySelectorAll('select');

climateSelect.addEventListener('change' () => {
    defaultCity.climate = climateSelect.value;
    //add displayCity function later
});

architectureSelect.addEventListener('change' () => {
    defaultCity.architecture = architectureSelect.value;
    //add displayCity function later
});

function displayCity() {
    climateSelect.value = defaultCity.climate;
    architectureSelect.value = defaultCity.architecture;
}


const addPhraseSection = document.getElementById('slogan-input');
const phraseInput = addPhraseSection.querySelector('input');

