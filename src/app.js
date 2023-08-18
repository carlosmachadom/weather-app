/* Logic */
import handdleWeatherData from '@logic/insert-weather-data-logic';
import showHideMenu from "@utils/show-hide-menu";

const menuButton = document.querySelector('.menu-button-container .menu-button');
const menuCloseButton = document.querySelector('.menu-close-button button');
const weatherForm = document.querySelector('.form-city-selector');

(async function App() {
    try {
        menuButton.addEventListener('click', showHideMenu);
        menuCloseButton.addEventListener('click', showHideMenu);
        weatherForm.addEventListener('click', handdleWeatherData);
    } catch (err) {
        throw new Error(err);
    }
})();