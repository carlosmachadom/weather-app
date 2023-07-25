export default class WeekWeatherModel {
    constructor() {
        this.forecast = [];
    }

    setData(forecast) {
        this.forecast = forecast;
    }

    getWeekForecast() {
        return this.forecast;
    }
}