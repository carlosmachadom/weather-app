export default class DateModel {
    constructor() {
        this.day = 0;
        this.month = 0;
        this.year = 0;
    }

    setDate({ day, month, year }) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }
}