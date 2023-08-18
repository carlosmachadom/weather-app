import getCurrentData from "@utils/get-current-weather-data";
import getHourlyForecast from '@utils/get-hourly-forecast-data';
import getWeekDaysForecast from '@utils/get-week-days-forecast';

import showHideMenu from "@utils/show-hide-menu";

import { insertDateTimeComponents } from '@logic/date-time-logic.js';

import {
    insertDayLocationComponent,
    insertDayStatusComponent,
    insertHourStatusComponent,
    insertWeekStatusComponent
} from "@logic/day-status-weather-logic";

import getUserLocation from "@utils/get-location";
import getCityInputValue from "@utils/get-user-input-value";
import { showTextError, hideTextError } from '@utils/show-hide-text-error';

async function setWeatherData({ latitude = null, longitude = null, city = null }) {
    let long = await longitude;
    let lat = await latitude;
    let c = await city;

    const { weather, location, date } = await getCurrentData({ latitude: lat, longitude: long, city: c });

    if (weather !== undefined && location !== undefined && date !== undefined) {
        const { hourlyForecast } = await getHourlyForecast({ latitude: lat, longitude: long, city: c, date: date.split(' ')[0] });
        const { weeklyForecast } = await getWeekDaysForecast({ latitude: lat, longitude: long, city: c });

        insertDateTimeComponents({ location });
        insertDayLocationComponent({ weather, location });
        insertDayStatusComponent({ weather });
        insertHourStatusComponent({ hourlyForecast });
        insertWeekStatusComponent({ weeklyForecast });
        showHideMenu();
    } else {
        return;
    }
}

const weatherForm = document.querySelector('.form-city-selector');

export default async function handdleWeatherData(e) {
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

