export default class HourWeatherController {
    constructor({ model, view }) {
        this.model = model;
        this.view = view;
    }

    updateHours(forecast) {
        this.model.setData(forecast);
    }

    getCurrentHour() {
        let forecast = this.model.getHourForecast();
        this.view.renderHours(forecast);
    }
}