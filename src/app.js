/* Logic */
import setWeatherData from '@logic/insert-weather-data-logic';
import getUserLocation from "@utils/get-location";
import getCityInputValue from "@utils/get-user-input-value";
import showHideMenu from "@utils/show-hide-menu";
import { showTextError, hideTextError } from '@utils/show-hide-text-error';

const menuButton = document.querySelector('.menu-button-container .menu-button');
const weatherForm = document.querySelector('.form-city-selector');


async function handdleWeatherData(e) {
    if (e.target.className === 'your-location-btn') {
        e.preventDefault();
        weatherForm.reset();
        let { latitude, longitude } = await getUserLocation();
        setWeatherData({ latitude, longitude });
        hideTextError();
    } else if (e.target.className === 'search-city-btn') {
        e.preventDefault();
        let city = await getCityInputValue();
        if (city !== undefined) {
            setWeatherData({ city });
            weatherForm.reset();
            hideTextError();
        } else {
            showTextError();
        }
    }
}

(async function App() {
    try {
        menuButton.addEventListener('click', showHideMenu);
        weatherForm.addEventListener('click', handdleWeatherData);
    } catch (err) {
        throw new Error(err);
    }
})();