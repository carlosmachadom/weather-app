export default class DayStatusModel {
    constructor() {
        this.windStatus = 0;
        this.humidity = 0;
        this.visibility = 0;
        this.airPressure = 0;
    }

    setData({ windStatus, humidity, visibility, airPressure }) {
        this.windStatus = windStatus;
        this.humidity = humidity;
        this.visibility = visibility;
        this.airPressure = airPressure;
    }

    getWindStatus() {
        return this.windStatus;
    }

    getHumidity() {
        return this.humidity;
    }

    getVisibility() {
        return this.visibility;

    }

    getAirPressure() {
        return this.airPressure;
    }
}