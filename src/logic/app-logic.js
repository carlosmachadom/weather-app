import getUserLocation from "@utils/get-location";
import getCurrentData from "@utils/get-current-weather-data";
import getHourlyForecast from '@utils/get-hourly-forecast-data';
import getWeekDaysForecast from '@utils/get-week-days-forecast';

import { insertDateTimeComponents } from '@logic/date-time-logic.js';

import {
    insertDayLocationComponent,
    insertDayStatusComponent,
    insertHourStatusComponent,
    insertWeekStatusComponent
} from "@logic/day-status-weather-logic";


export default async function setWeatherData() {
    let { latitude, longitude } = await getUserLocation();
    const { weather, location, date } = await getCurrentData({ latitude, longitude });
    const { hourlyForecast } = await getHourlyForecast({ latitude, longitude, date });
    const { weeklyForecast } = await getWeekDaysForecast({ latitude, longitude });

    insertDateTimeComponents({ location });
    insertDayLocationComponent({ weather, location });
    insertDayStatusComponent({ weather });
    insertHourStatusComponent({ hourlyForecast });
    insertWeekStatusComponent({ weeklyForecast });
}