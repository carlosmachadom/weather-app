import { insertDateTimeComponents } from '@logic/date-time-logic.js';
import { insertDayLocationComponent, insertDayStatusComponent, insertHourStatusComponent } from "@logic/day-status-weather-logic";
import getUserLocation from "@utils/get-location";
import getCurrentData from "@utils/get-current-weather-data";
import getHourlyForecast from '@utils/get-hourly-forecast-data';

export default async function setWeatherData() {
    let { latitude, longitude } = await getUserLocation();
    const { weather, location, date } = await getCurrentData({ latitude, longitude });
    const { forecast } = await getHourlyForecast({ latitude, longitude, date });

    insertDateTimeComponents({ location });
    insertDayLocationComponent({ weather, location });
    insertDayStatusComponent({ weather });
    insertHourStatusComponent({ forecast });
}