export default class DayLocationView {
    renderData({ degrees, city, country, state, stateImage }) {
        let dayLocationComponent = document.createElement('date-location-component');
        dayLocationComponent.classList.add('current');
        dayLocationComponent.dataset.degrees = degrees;
        dayLocationComponent.dataset.city = city;
        dayLocationComponent.dataset.country = country;
        dayLocationComponent.dataset.state = state;
        dayLocationComponent.dataset.stateImage = stateImage;

        const dayLocationLayout = null || document.querySelector('.day-location-layout');
        const dayLocationInitial = null || document.querySelector('date-location-component.initial-state');
        const dayLocationCurrent = null || document.querySelector('date-location-component.current');

        if (dayLocationLayout) {
            if (dayLocationInitial) dayLocationInitial.remove();
            if (dayLocationCurrent) dayLocationCurrent.remove();
            dayLocationLayout.appendChild(dayLocationComponent);
        }
    }
}