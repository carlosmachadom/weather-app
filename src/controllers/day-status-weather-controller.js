export default class DayStatusController {
    constructor({ model, view }) {
        this.model = model;
        this.view = view;
    }

    updateData({ windStatus, humidity, visibility, airPressure }) {
        this.model.setData({ windStatus, humidity, visibility, airPressure });
    }

    getCurrentData() {
        let windStatus = this.model.getWindStatus();
        let humidity = this.model.getHumidity();
        let visibility = this.model.getVisibility();
        let airPressure = this.model.getAirPressure();

        this.view.renderData({ windStatus, humidity, visibility, airPressure });
    }
}