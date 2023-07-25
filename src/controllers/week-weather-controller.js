export default class WeekWeatherController {
    constructor({ model, view }) {
        this.model = model;
        this.view = view;
    }

    updateWeek(forecast) {
        this.model.setData(forecast);
    }

    getCurrentWeek() {
        let forecast = this.model.getWeekForecast();
        this.view.renderWeek(forecast);
    }
}