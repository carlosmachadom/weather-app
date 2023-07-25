/* Logic */
import setWeatherData from '@logic/app-logic';

const menuButton = document.querySelector('.menu-button-container .menu-button');
const menuContainer = document.querySelector('.menu-container');
const weatherForm = document.querySelector('.form-city-selector');

function handdleWeatherData(e) {
    if (e.target.className === 'your-location-btn') {
        e.preventDefault();
        setWeatherData();
        hideMenu();
    } else if (e.target.className === 'search-city-btn') {
        e.preventDefault();
        console.log(e.target);
        hideMenu();
    }
}

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

(async function App() {
    try {
        menuButton.addEventListener('click', showMenu);
        weatherForm.addEventListener('click', handdleWeatherData);
    } catch (err) {
        throw new Error(err);
    }
})();