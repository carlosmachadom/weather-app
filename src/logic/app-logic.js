import { insertDateTimeComponents } from '@logic/date-time-logic.js';
import { insertDayLocationComponent, insertDayStatusComponent, insertHourStatusComponent } from "@logic/day-status-weather-logic";
import getUserLocation from "@utils/get-location";
import getCurrentData from "@utils/get-current-weather-data";
import getHourlyForecast from '@utils/get-hourly-forecast-data';
import getInitialScroll from '@utils/get-initial-scroll';

export default async function setWeatherData() {
    let { latitude, longitude } = await getUserLocation();
    const { weather, location, date } = await getCurrentData({ latitude, longitude });
    const { forecast } = await getHourlyForecast({ latitude, longitude, date });

    let temp = weather.temp_c < 10 ? '0' + weather.temp_c + '°C' : weather.temp_c + '°C';
    let condition = weather.condition.text;
    let timeZone = location.tz_id;

    let dayLocationData = {
        degrees: temp,
        city: location.name,
        country: location.country,
        state: condition,
        stateImage: weather.condition.icon
    }

    let dayStatusData = {
        windStatus: weather.wind_mph,
        humidity: weather.humidity,
        visibility: weather.vis_miles,
        airPressure: weather.pressure_mb
    }

    insertDateTimeComponents(timeZone);
    insertDayLocationComponent(dayLocationData);
    insertDayStatusComponent(dayStatusData);
    insertHourStatusComponent(forecast);

    const carousel = document.querySelector('.carousel');
    carousel.scrollLeft = getInitialScroll();
}