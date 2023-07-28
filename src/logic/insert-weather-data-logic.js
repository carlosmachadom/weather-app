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

export default async function setWeatherData({ latitude = null, longitude = null, city = null }) {
    let long = await longitude;
    let lat = await latitude;
    let c = await city;
    console.log()

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

