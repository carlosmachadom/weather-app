/* Logic */
import setWeatherData from '@logic/app-logic';

(async function App() {
    try {
        setWeatherData();
    } catch (err) {
        throw new Error(err);
    }
})();