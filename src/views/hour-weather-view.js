import getInitialScroll from '@utils/get-initial-scroll';

export default class HourWeatherView {
    renderHours(list) {
        const hourCardsWrapper = null || document.querySelector('.forecast-wrapper > ul.carousel');
        const hourCardsInitialState = null || document.querySelectorAll('li.list-hour-item.initial-state');
        const hourCardsCurrent = null || document.querySelectorAll('li.list-hour-item.current');

        if (hourCardsWrapper) {
            hourCardsInitialState.forEach(item => item.remove());
            hourCardsCurrent.forEach(item => item.remove());

            list.forEach(hourF => {
                const { time, condition, temp_c } = hourF;
                const [_, hours] = time.split(' ');
                const [hour] = hours.split(':');
                const hourFormatTwelve = hour > 12 ? hour - 12 : hour;
                const hourToShow = hourFormatTwelve.toString().padStart(2, '0');

                const hourCard = document.createElement('hour-weather-component');
                hourCard.dataset.hour = hour > 12 ? `${hourToShow} PM` : `${hourToShow} AM`;
                hourCard.dataset.icon = condition.icon;
                hourCard.dataset.temp = temp_c;
                hourCard.dataset.condition = condition.text;

                const listItem = document.createElement('li');
                listItem.classList.add('list-hour-item', 'current');
                listItem.appendChild(hourCard);

                hourCardsWrapper.appendChild(listItem);
            });

            hourCardsWrapper.scrollLeft = getInitialScroll();
        }
    }
}