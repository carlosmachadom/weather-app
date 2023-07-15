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

/* Renderind day and location data */
function insertDayLocationComponent(obj) {
    let dayLocationModel = new DayLocationModel();
    let dayLocationView = new DayLocationView();
    let dayLocationController = new DayLocationController({ model: dayLocationModel, view: dayLocationView });

    let data = obj;

    dayLocationController.updateData({
        degrees: data.degrees,
        city: data.city,
        country: data.country,
        state: data.state,
        stateImage: data.stateImage
    });

    dayLocationController.getCurrentData();
}

/* Rendering date weather status */
function insertDayStatusComponent(obj) {
    let dayStatusModel = new DayStatusModel();
    let dayStatusView = new DayStatusView();
    let dayStatusController = new DayStatusController({ model: dayStatusModel, view: dayStatusView });

    let data = obj;

    dayStatusController.updateData({
        windStatus: data.windStatus,
        humidity: data.humidity,
        visibility: data.visibility,
        airPressure: data.airPressure
    });

    dayStatusController.getCurrentData();
}

/* Rendering Hourly Condition */
function insertHourStatusComponent(forecast) {
    let hourStatusModel = new HourWeatherModel();
    let hourStatusView = new HourWeatherView();
    let hourStatusController = new HourWeatherController({ model: hourStatusModel, view: hourStatusView });

    let data = forecast;

    hourStatusController.updateHours(data);
    hourStatusController.getCurrentHour();
}

export { insertDayLocationComponent, insertDayStatusComponent, insertHourStatusComponent };