/* Day Location elements */
import DayLocationModel from "@models/day-location-weather-model";
import DayLocationView from "@views/day-location-weather-view";
import DayLocationController from "@controllers/day-location-weather-controller";

/* Day Weather elements */
import DayStatusModel from "@models/day-status-weather-model";
import DayStatusView from "@views/day-status-weather-view";
import DayStatusController from "@controllers/day-status-weather-controller";

/* Hourly Status elements */
import HourWeatherModel from "@models/hour-weather-model";
import HourWeatherView from "@views/hour-weather-view";
import HourWeatherController from "@controllers/hour-weather-controller";

/* Weekly Status elements*/
import WeekWeatherModel from "@models/weekly-status-model";
import WeekWeatherView from "@views/weekly-status-view";
import WeekWeatherController from "@controllers/week-weather-controller";

/* Renderind day and location data */
function insertDayLocationComponent({ weather, location }) {
    let dayLocationModel = new DayLocationModel();
    let dayLocationView = new DayLocationView();
    let dayLocationController = new DayLocationController({ model: dayLocationModel, view: dayLocationView });

    dayLocationController.updateData({
        degrees: weather.temp_c < 10 ? '0' + weather.temp_c + '°C' : weather.temp_c + '°C',
        city: location.name,
        country: location.country,
        state: weather.condition.text,
        stateImage: weather.condition.icon
    });

    dayLocationController.getCurrentData();
}

/* Rendering date weather status */
function insertDayStatusComponent({ weather }) {
    let dayStatusModel = new DayStatusModel();
    let dayStatusView = new DayStatusView();
    let dayStatusController = new DayStatusController({ model: dayStatusModel, view: dayStatusView });

    dayStatusController.updateData({
        windStatus: weather.wind_mph,
        humidity: weather.humidity,
        visibility: weather.vis_miles,
        airPressure: weather.pressure_mb
    });

    dayStatusController.getCurrentData();
}

/* Rendering Hourly Condition */
function insertHourStatusComponent({ hourlyForecast }) {
    let hourStatusModel = new HourWeatherModel();
    let hourStatusView = new HourWeatherView();
    let hourStatusController = new HourWeatherController({ model: hourStatusModel, view: hourStatusView });

    let data = hourlyForecast;

    hourStatusController.updateHours(data);
    hourStatusController.getCurrentHour();
}

/* Rendering Weekly Condition */
function insertWeekStatusComponent({ weeklyForecast }) {
    let weekStatusModel = new WeekWeatherModel();
    let weekStatusView = new WeekWeatherView();
    let weekStatusController = new WeekWeatherController({ model: weekStatusModel, view: weekStatusView });

    let data = weeklyForecast;

    weekStatusController.updateWeek(data);
    weekStatusController.getCurrentWeek();
}

export {
    insertDayLocationComponent,
    insertDayStatusComponent,
    insertHourStatusComponent,
    insertWeekStatusComponent
};
