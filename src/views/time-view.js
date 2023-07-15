import { getCurrentTime } from "@utils/get-curren-time";

export default class TimeView {
    renderTime({ hours, minutes, seconds, ds, tz }) {
        let time = document.createElement('time-component');
        time.dataset.hours = hours;
        time.dataset.minutes = minutes;
        time.dataset.seconds = seconds;
        time.dataset.ds = ds;
        time.dataset.tz = tz;

        const clock = null || document.querySelector('.clock');

        if (clock !== null) {
            clock.appendChild(time);
        }
    }

    updateTime(tz) {
        let timezone = tz;
        setInterval(() => {
            const currenTime = getCurrentTime(timezone);
            const time = document.querySelector('time-component');

            if (time !== null) {
                time.dataset.hours = currenTime.hours;
                time.dataset.minutes = currenTime.minutes;
                time.dataset.seconds = currenTime.seconds;
                time.dataset.ds = currenTime.dayState;
            }

            const component = null || document.querySelector('time-component').shadowRoot;

            if (component !== null) {
                let timeText = null || component.childNodes[1].childNodes[1];
                timeText.textContent = `${time.dataset.hours}:${time.dataset.minutes}:${time.dataset.seconds} ${time.dataset.ds}`;
            }

        }, 1000);
    }
}