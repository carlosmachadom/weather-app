export default class DayLocationView {
    renderData({ degrees, city, country, state, stateImage }) {
        let dayLocationComponent = document.createElement('date-location-component');
        dayLocationComponent.dataset.degrees = degrees;
        dayLocationComponent.dataset.city = city;
        dayLocationComponent.dataset.country = country;
        dayLocationComponent.dataset.state = state;
        dayLocationComponent.dataset.stateImage = stateImage;

        const dayLocationLayout = null || document.querySelector('.day-location-layout');

        if (dayLocationLayout !== null) {
            dayLocationLayout.appendChild(dayLocationComponent);
        }
    }
}