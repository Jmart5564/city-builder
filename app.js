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
const defaultCity = {
    name: '',
    climate: 'cave',
    architecture: 'tent',
    slogans: []
};

function getDefaultCity() {
    return defaultCity;
}

let city = getDefaultCity();
const cities = [];

const cityInputs = document.getElementById('city-inputs');
const [climateSelect, architectureSelect] = cityInputs.querySelectorAll('select');
//const climateSelect = document.getElementById('climate-input');
//const architectureSelect = document.getElementById('architecture-input');
//const climateOutput = document.getElementById('climate-output');
//const architectureOutput = document.getElementById('architecture-output');


climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

const cityOutput = document.getElementById('city-output');
const [climateOutput, architectureOutput] = cityOutput.querySelectorAll('img');

function displayCity() {
    climateOutput.src = 'assets/' + city.climate;
    architectureOutput.src = 'assets/' + city.architecture;
    //climateSelect.value = defaultCity.climate;
    //architectureSelect.value = defaultCity.architecture;
}


const addSloganSection = document.getElementById('slogan-input');
const sloganInput = addSloganSection.querySelector('input');
const sloganButton = addSloganSection.querySelector('button');

function handleAddSlogan() {
    const slogan = sloganInput.value;
    if (slogan === '') {
        return;
    }

    city.slogans.push(slogan);
    displaySlogans();
    sloganInput.value = '';
    sloganInput.focus();
}


sloganButton.addEventListener('click', () => {
    handleAddSlogan();
});

sloganInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleAddSlogan();
    }
});

const sloganOutput = document.getElementById('slogan-output');
const sloganList = sloganOutput.querySelector('ul');

function displaySlogans() {
    sloganList.innerHTML = '';

    for (const slogan of defaultCity.slogans) {
        const li = document.createElement('li');
        li.textContent = slogan;
        sloganList.append(li);
    }
}

//page load actions

displayCity();
displaySlogans();