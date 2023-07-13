import fetchData from "@utils/fetch-general-data";

import DayLocationModel from "@models/day-location-weather-model";
import DayLocationView from "@views/day-location-weather-view";
import DayLocationController from "@controllers/day-location-weather-controller";

import DayStatusModel from "@models/day-status-weather-model";
import DayStatusView from "@views/day-status-weather-view";
import DayStatusController from "@controllers/day-status-weather-controller";

const URL = process.env.URL;
const KEY = process.env.KEY;

const apiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

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

async function success(pos) {
    const crd = pos.coords;

    const latitude = crd.latitude.toFixed(2);
    const longitude = crd.longitude.toFixed(2);

    const generalDayData = await fetchData({ API: `${URL}/current.json?q=${latitude}%2C${longitude}`, options: apiOptions });
    const currentWeatherData = generalDayData['current'];
    const currentLocationData = generalDayData['location'];
    console.log('Weather: ', currentWeatherData);
    console.log('Location: ', currentLocationData);

    let generalStatus = null || document.querySelector('.header__weather-title');
    generalStatus.innerHTML = currentWeatherData.condition.text;

    let dayLocationData = {
        degrees: currentWeatherData.temp_c < 10 ? '0' + currentWeatherData.temp_c + '°C' : currentWeatherData.temp_c + '°C',
        city: currentLocationData.name,
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

    insertDayLocationComponent(dayLocationData);
    insertDayStatusComponent(dayStatusData);
}

function error(err) {
    throw new Error(`ERROR(${err.code}): ${err.message}`);
}

export default function fetchInitialInfo() {
    const geo = navigator.geolocation;
    geo.getCurrentPosition(success, error, geoOptions);
}
