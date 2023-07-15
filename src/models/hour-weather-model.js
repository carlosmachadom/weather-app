export default class HourWeatherModel {
    constructor() {
        this.forecast = [];
    }

    setData(forecast) {
        this.forecast = forecast;
    }

    getHourForecast() {
        return this.forecast;
    }
}