export default class TimeModel {
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