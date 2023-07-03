import { getCurrentTime } from "@utils/get-curren-time";

export default class TimeView {
    renderTime({ hours, minutes, seconds, ds }) {
        let time = document.createElement('time-component');
        time.dataset.hours = hours;
        time.dataset.minutes = minutes;
        time.dataset.seconds = seconds;
        time.dataset.ds = ds;

        const clock = null || document.querySelector('.clock');

        if (clock !== null) {
            clock.appendChild(time);
        }
    }

    updateTime() {
        setInterval(() => {
            const currenTime = getCurrentTime();
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