/* Day Location elements */
import DayLocationModel from "@models/day-location-weather-model";
import DayLocationView from "@views/day-location-weather-view";
import DayLocationController from "@controllers/day-location-weather-controller";

/* Day Weather elements */
import DayStatusModel from "@models/day-status-weather-model";
import DayStatusView from "@views/day-status-weather-view";
import DayStatusController from "@controllers/day-status-weather-controller";

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

function insertDayConditionText(condition) {
    let dayCondition = condition;
    let generalStatusTitle = null || document.querySelector('.header__weather-title');
    let contentStatus = generalStatusTitle.innerHTML;

    if (contentStatus === "" || contentStatus !== "") {
        generalStatusTitle.innerHTML = dayCondition;
    }
}

export { insertDayLocationComponent, insertDayStatusComponent, insertDayConditionText };