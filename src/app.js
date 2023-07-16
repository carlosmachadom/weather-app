/* Logic */
import setWeatherData from '@logic/app-logic';

(async function App() {
    try {
        const currentLocationButton = document.querySelector('.your-location-btn');

        currentLocationButton.addEventListener('click', (e) => {
            e.preventDefault();
            setWeatherData();
        });
    } catch (err) {
        throw new Error(err);
    }
})();