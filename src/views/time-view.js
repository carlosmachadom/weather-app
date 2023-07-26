import { getCurrentTime } from "@utils/get-curren-time";

export default class TimeView {
    renderTime({ hours, minutes, seconds, ds, tz }) {
        let newTime = document.createElement('time-component');
        newTime.classList.add('current');
        newTime.dataset.hours = hours;
        newTime.dataset.minutes = minutes;
        newTime.dataset.seconds = seconds;
        newTime.dataset.ds = ds;
        newTime.dataset.tz = tz;

        const clockLayout = null || document.querySelector('.clock');
        const initialClock = null || document.querySelector('time-component.initial-state')
        const currentClock = null || document.querySelector('time-component.current')

        if (clockLayout) {
            if (initialClock) initialClock.remove();
            if (currentClock) currentClock.remove();
            clockLayout.appendChild(newTime);
        }
    }

    updateTime(tz) {
        /* Cambiar por la llamada a la función que renderiza de cero el componente */
        let timezone = tz;
        setInterval(() => {
            const currenTime = getCurrentTime(timezone);
            const time = document.querySelector('time-component');

            if (time) {
                time.dataset.hours = currenTime.hours;
                time.dataset.minutes = currenTime.minutes;
                time.dataset.seconds = currenTime.seconds;
                time.dataset.ds = currenTime.dayState;
            }

            const component = null || document.querySelector('time-component').shadowRoot;

            if (component) {
                let timeText = null || component.childNodes[1].childNodes[1];
                timeText.textContent = `${time.dataset.hours}:${time.dataset.minutes}:${time.dataset.seconds} ${time.dataset.ds}`;
            }

        }, 1000);
    }
}