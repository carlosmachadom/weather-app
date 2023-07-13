export default class DayStatusView {
    renderData({ windStatus, humidity, visibility, airPressure }) {
        let dayStatusComponent = document.createElement('day-weather-status-component');
        dayStatusComponent.dataset.windStatus = windStatus;
        dayStatusComponent.dataset.humidity = humidity;
        dayStatusComponent.dataset.visibility = visibility;
        dayStatusComponent.dataset.airPressure = airPressure;

        const dayStatusLayout = null || document.querySelector('.day-status-layout');

        if (dayStatusLayout !== null) {
            dayStatusLayout.appendChild(dayStatusComponent);
        }
    }
}