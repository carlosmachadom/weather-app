export default class WeekWeatherView {
    renderWeek(list) {
        const weekCardsWrapper = null || document.querySelector('.week-forecast-wrapper > ul.carousel');
        const weekCardsInitialState = null || document.querySelectorAll('li.list-week-item.initial-state');
        const weekCardsCurrent = null || document.querySelectorAll('li.list-week-item.current');

        if (weekCardsWrapper) {
            weekCardsInitialState.forEach(item => item.remove());
            weekCardsCurrent.forEach(item => item.remove());

            list.forEach(dayF => {
                const { date, day } = dayF;

                const weekDayCard = document.createElement('week-day-weather-component');
                weekDayCard.dataset.icon = day.condition.icon;
                weekDayCard.dataset.day = date;
                weekDayCard.dataset.condition = day.condition.text;
                weekDayCard.dataset.minTemp = day.mintemp_c;
                weekDayCard.dataset.maxTemp = day.maxtemp_c;


                const listItem = document.createElement('li');
                listItem.classList.add('list-hour-item', 'current');
                listItem.appendChild(weekDayCard);

                weekCardsWrapper.appendChild(listItem);
            });
        }
    }
}