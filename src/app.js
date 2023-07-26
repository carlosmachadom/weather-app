/* Logic */
import setWeatherData from '@logic/app-logic';
import getUserLocation from "@utils/get-location";

const menuButton = document.querySelector('.menu-button-container .menu-button');
const menuContainer = document.querySelector('.menu-container');
const weatherForm = document.querySelector('.form-city-selector');
const errorText = document.querySelector('.input--error');


function showMenu() {
    if (menuContainer.classList.contains('hidden')) {
        menuContainer.classList.remove('hidden');
    }
}

function hideMenu() {
    if (!menuContainer.classList.contains('hidden')) {
        menuContainer.classList.add('hidden');
    }
}

function getCityInputValue() {
    const value = document.querySelector('.desired-location-input').value;
    const cityRegex = /^[A-Za-z\s\-,'.()]+$/;

    if (value !== "" && cityRegex.test(value)) return value;
}

async function handdleWeatherData(e) {
    if (e.target.className === 'your-location-btn') {
        e.preventDefault();
        weatherForm.reset();
        let { latitude, longitude } = await getUserLocation();
        setWeatherData({ latitude, longitude });
        hideMenu();

    } else if (e.target.className === 'search-city-btn') {
        e.preventDefault();
        let city = getCityInputValue();
        if (city !== undefined) {
            setWeatherData({ city });
            weatherForm.reset();
            if (!errorText.classList.contains('hidden')) errorText.classList.add('hidden');
            hideMenu();
        } else {
            if (errorText.classList.contains('hidden')) errorText.classList.remove('hidden');
        }
    }
}

(async function App() {
    try {
        menuButton.addEventListener('click', showMenu);
        weatherForm.addEventListener('click', handdleWeatherData);
    } catch (err) {
        throw new Error(err);
    }
})();