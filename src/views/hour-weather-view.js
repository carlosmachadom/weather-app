export default class HourWeatherView {
    renderHours(list) {
        let hoursForecast = list;

        const hourCardsWrapper = null || document.querySelector('.forecast-wrapper > ul.carousel');

        hoursForecast.forEach(hourForecast => {
            let moment = hourForecast;

            let hourCard = document.createElement('hour-weather-component');
            hourCard.dataset.hour = moment.time.split(' ')[1];
            hourCard.dataset.icon = moment.condition.icon;
            hourCard.dataset.temp = moment.temp_c;
            hourCard.dataset.condition = moment.condition.text;

            let listItem = document.createElement('li');
            listItem.insertAdjacentElement('afterbegin', hourCard);

            if (hourCardsWrapper !== null) {
                hourCardsWrapper.appendChild(listItem);
            }
        });
    }
}