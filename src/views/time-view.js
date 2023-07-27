import { getCurrentTime } from "@utils/get-curren-time";

export default class TimeView {
    intervalId = null;

    renderTime({ hours, minutes, seconds, ds, tz }) {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }

        const clockLayout = null || document.querySelector('.clock');
        const initialClock = null || document.querySelector('time-component.initial-state')
        const currentClock = null || document.querySelector('time-component.current')

        if (clockLayout) {
            if (initialClock) initialClock.remove();
            if (currentClock) currentClock.remove();

            let newTime = document.createElement('time-component');
            newTime.classList.add('current');
            newTime.dataset.hours = hours;
            newTime.dataset.minutes = minutes;
            newTime.dataset.seconds = seconds;
            newTime.dataset.ds = ds;
            newTime.dataset.tz = tz;

            clockLayout.appendChild(newTime);

            this.intervalId = setInterval(() => {
                this.updateTime();
            }, 1000);
        }
    }

    updateTime() {
        const time = document.querySelector('time-component');

        const currentTimeZone = time.getAttribute('data-tz');
        const currentTime = getCurrentTime(currentTimeZone);


        if (time) {
            time.dataset.hours = currentTime.hours;
            time.dataset.minutes = currentTime.minutes;
            time.dataset.seconds = currentTime.seconds;
            time.dataset.ds = currentTime.dayState;
        }

        let timeText = null || document.querySelector('time-component').shadowRoot.querySelector('.time--text');

        if (timeText) {
            timeText.innerHTML = `${time.dataset.hours}:${time.dataset.minutes}:${time.dataset.seconds} ${time.dataset.ds}`;
        }
    }
}