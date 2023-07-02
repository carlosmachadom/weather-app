import './views/components/clock-component';

/* Styles */
import '@styles/main.css';

class Clock {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.ds = "";
    }

    setHour({ hours, minutes, seconds, ds }) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.ds = ds;
    }

    getHour() {
        return this.hours;
    }

    getMinutes() {
        return this.minutes;
    }

    getSeconds() {
        return this.seconds;
    }

    getDayState() {
        return this.ds;
    }
}

class ClockView {
    renderTime({ hours, minutes, seconds, ds }) {
        let clock = document.createElement('clock-tag');
        clock.dataset.hours = hours;
        clock.dataset.minutes = minutes;
        clock.dataset.seconds = seconds;
        clock.dataset.ds = ds;

        const app = document.querySelector('main.app');

        if (app !== null) {
            app.appendChild(clock);
        }
    }

    updateTime() {
        setInterval(() => {
            const currenTime = getCurrentTime();
            const clock = document.querySelector('clock-tag');

            if (clock !== null) {
                clock.dataset.hours = currenTime.h;
                clock.dataset.minutes = currenTime.m;
                clock.dataset.seconds = currenTime.s;
                clock.dataset.ds = currenTime.dayState;
            }

            const component = document.querySelector('clock-tag').shadowRoot;

            if (component !== null) {
                let time = component.childNodes[1].childNodes[1];
                time.textContent = `${clock.dataset.hours}:${clock.dataset.minutes}:${clock.dataset.seconds} ${clock.dataset.ds}`;
            }

        }, 1000);
    }
}

class ClockController {
    constructor({ model, view }) {
        this.model = model;
        this.view = view
    }


    updateHours({ hours, minutes, seconds, ds }) {
        this.model.setHour({ hours, minutes, seconds, ds });
    }

    getCurrentHour() {
        let hours = this.model.getHour();
        let minutes = this.model.getMinutes();
        let seconds = this.model.getSeconds();
        let ds = this.model.getDayState();
        this.view.renderTime({ hours, minutes, seconds, ds });
        this.view.updateTime();
    }
}

function getCurrentTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let am_pm = 'AM';

    if (hours > 12) {
        hours = hours - 12;
        am_pm = 'PM';
    }

    if (hours == 0) {
        hours = 12;
        am_pm = 'AM';
    }

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return {
        h: hours,
        m: minutes,
        s: seconds,
        dayState: am_pm
    }
}

function getDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();

    return {

    }
}

try {
    let clock = new Clock();
    let clockView = new ClockView();
    let clockController = new ClockController({ model: clock, view: clockView });

    const currenTime = getCurrentTime();

    clockController.updateHours({
        hours: currenTime.h,
        minutes: currenTime.m,
        seconds: currenTime.s,
        ds: currenTime.dayState
    });

    clockController.getCurrentHour();
} catch (err) {
    console.error(err)
}