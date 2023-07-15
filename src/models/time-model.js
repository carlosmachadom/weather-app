export default class TimeModel {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.ds = "";
        this.tz = "";
    }

    setHour({ hours, minutes, seconds, ds, tz }) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.ds = ds;
        this.tz = tz;
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

    getTimezone() {
        return this.tz;
    }
}