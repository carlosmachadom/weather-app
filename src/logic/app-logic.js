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


export default async function setWeatherData({ latitude = null, longitude = null, city = null }) {
    const { weather, location, date } = await getCurrentData({ latitude, longitude, city });
    const { hourlyForecast } = await getHourlyForecast({ latitude, longitude, city, date: date.split(' ')[0] });
    const { weeklyForecast } = await getWeekDaysForecast({ latitude, longitude, city });

    insertDateTimeComponents({ location });
    insertDayLocationComponent({ weather, location });
    insertDayStatusComponent({ weather });
    insertHourStatusComponent({ hourlyForecast });
    insertWeekStatusComponent({ weeklyForecast });
}