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

            const amPmRegex = /^(AM|PM)$/i;

            if (!amPmRegex.test(ds)) {
                newTime.dataset.ds = this.testFormatInitial({ ds });
            } else {
                newTime.dataset.ds = ds;
            }

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

            const amPmRegex = /^(AM|PM)$/i;

            if (!amPmRegex.test(currentTime.dayState)) {
                time.dataset.ds = this.testFormatInitial({ ds: currentTime.dayState })
            } else {
                time.dataset.ds = currentTime.dayState;
            }
        }


        let timeText = null || document.querySelector('time-component').shadowRoot.querySelector('.time--text');

        if (timeText) {
            timeText.innerHTML = `${time.dataset.hours}:${time.dataset.minutes}:${time.dataset.seconds} ${time.dataset.ds}`;
        }
    }

    testFormatInitial({ ds }) {
        let state = null
        const amRegex = /a\.\s*m\./gi;
        const pmRegex = /p\.\s*m\./gi;

        if (amRegex.test(ds)) {
            ds = 'AM';
        } else if (pmRegex.test(ds)) {
            ds = 'PM';
        }

        state = ds;

        return state;
    }
}