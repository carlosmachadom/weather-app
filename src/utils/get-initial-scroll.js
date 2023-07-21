function getInitialScroll() {
    const timeComponent = document.querySelector('time-component');

    const currentHour = parseInt(timeComponent.dataset.hours);
    const currentState = timeComponent.dataset.ds;

    const cards = document.querySelectorAll('.carousel > .list-hour-item');

    let scrollPosition = 0;

    cards.forEach(card => {
        const dataComponent = card.querySelector('hour-weather-component');
        const componentHour = dataComponent.dataset.hour;
        const [hour, state] = componentHour.split(' ');

        if (state === currentState && parseInt(hour) === currentHour) {
            card.classList.add('current-hour');
            scrollPosition = card.offsetLeft - card.offsetWidth;
        }
    });

    return scrollPosition;
}

export default getInitialScroll;