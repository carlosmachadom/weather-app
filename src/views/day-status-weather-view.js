export default class DayStatusView {
    renderData({ windStatus, humidity, visibility, airPressure }) {
        let dayStatusComponent = document.createElement('day-weather-status-component');
        dayStatusComponent.classList.add('current');
        dayStatusComponent.dataset.windStatus = windStatus;
        dayStatusComponent.dataset.humidity = humidity;
        dayStatusComponent.dataset.visibility = visibility;
        dayStatusComponent.dataset.airPressure = airPressure;

        const dayStatusLayout = null || document.querySelector('.day-status-layout');
        const dayStatusInitialState = null || document.querySelector('day-weather-status-component.initial-state');
        const dayStatusCurrent = null || document.querySelector('day-weather-status-component.current');

        if (dayStatusLayout) {
            if (dayStatusInitialState) dayStatusInitialState.remove();
            if (dayStatusCurrent) dayStatusCurrent.remove();
            dayStatusLayout.appendChild(dayStatusComponent);
        }
    }
}