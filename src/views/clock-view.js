import { getCurrentTime } from "@utils/get-curren-time";

export default class ClockView {
    renderTime({ hours, minutes, seconds, ds }) {
        let clock = document.createElement('clock-tag');
        clock.dataset.hours = hours;
        clock.dataset.minutes = minutes;
        clock.dataset.seconds = seconds;
        clock.dataset.ds = ds;

        const app = null || document.querySelector('main.app');

        if (app !== null) {
            app.appendChild(clock);
        }
    }

    updateTime() {
        setInterval(() => {
            const currenTime = getCurrentTime();
            const clock = document.querySelector('clock-tag');

            if (clock !== null) {
                clock.dataset.hours = currenTime.hours;
                clock.dataset.minutes = currenTime.minutes;
                clock.dataset.seconds = currenTime.seconds;
                clock.dataset.ds = currenTime.dayState;
            }

            const component = null || document.querySelector('clock-tag').shadowRoot;

            if (component !== null) {
                let time = null || component.childNodes[1].childNodes[1];
                time.textContent = `${clock.dataset.hours}:${clock.dataset.minutes}:${clock.dataset.seconds} ${clock.dataset.ds}`;
            }

        }, 1000);
    }
}