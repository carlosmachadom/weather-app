export default class HourWeatherView {
    renderHours(list) {
        let hoursForecast = list;

        const hourCardsWrapper = null || document.querySelector('.forecast-wrapper > ul.carousel');
        const hourCardsInitialState = null || document.querySelectorAll('li.list-hour-item.initial-state');
        const hourCardsCurrent = null || document.querySelectorAll('li.list-hour-item.current');

        if (hourCardsWrapper) {
            if (hourCardsInitialState)
                [...hourCardsInitialState].forEach(item => item.remove());

            if (hourCardsCurrent)
                [...hourCardsCurrent].forEach(item => item.remove());


            hoursForecast.forEach(hourForecast => {
                let moment = hourForecast;

                let hourCard = document.createElement('hour-weather-component');
                hourCard.dataset.hour = moment.time.split(' ')[1];
                hourCard.dataset.icon = moment.condition.icon;
                hourCard.dataset.temp = moment.temp_c;
                hourCard.dataset.condition = moment.condition.text;

                let listItem = document.createElement('li');
                listItem.classList.add('list-hour-item', 'current');
                listItem.insertAdjacentElement('afterbegin', hourCard);

                hourCardsWrapper.appendChild(listItem);
            });
        }
    }
}