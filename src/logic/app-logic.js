import { insertDate, insertTime } from '@logic/date-time-logic.js';
import { insertDayLocationComponent, insertDayStatusComponent } from "@logic/day-status-weather-logic";
import getUserLocation from "@utils/get-location";
import getTodayData from "@utils/gather-today-data";
import getTodayForecastData from '@utils/gather-hour-forecast-data';

export default async function setWeatherData() {
    let locationData = await getUserLocation();
    let lat = locationData.latitude;
    let long = locationData.longitude;

    const generalDayData = await getTodayData({ lat, long });
    const currentWeatherData = generalDayData['current'];
    const currentLocationData = generalDayData['location'];

    const currentDate = currentLocationData.localtime.split(' ')[0];
    const hoursData = await getTodayForecastData({ lat, long, date: currentDate });
    console.log(hoursData);

    let dayLocationData = {
        degrees: currentWeatherData.temp_c < 10 ? '0' + currentWeatherData.temp_c + '°C' : currentWeatherData.temp_c + '°C',
        city: (lat === 0 && long === 0) ? currentLocationData.region : currentLocationData.name,
        country: currentLocationData.country,
        state: currentWeatherData.condition.text,
        stateImage: currentWeatherData.condition.icon
    }

    let dayStatusData = {
        windStatus: currentWeatherData.wind_mph,
        humidity: currentWeatherData.humidity,
        visibility: currentWeatherData.vis_miles,
        airPressure: currentWeatherData.pressure_mb
    }

    let timeZone = currentLocationData.tz_id;

    let generalStatus = null || document.querySelector('.header__weather-title');
    generalStatus.innerHTML = currentWeatherData.condition.text;

    insertDate(timeZone);
    insertTime(timeZone);
    insertDayLocationComponent(dayLocationData);
    insertDayStatusComponent(dayStatusData);
}

