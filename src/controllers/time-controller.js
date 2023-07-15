export default class TimeController {
    constructor({ model, view }) {
        this.model = model;
        this.view = view;
    }

    updateHours({ hours, minutes, seconds, ds, tz }) {
        this.model.setHour({ hours, minutes, seconds, ds, tz });
    }

    getCurrentHour() {
        let hours = this.model.getHour();
        let minutes = this.model.getMinutes();
        let seconds = this.model.getSeconds();
        let ds = this.model.getDayState();
        let tz = this.model.getTimezone();
        this.view.renderTime({ hours, minutes, seconds, ds, tz });
        this.view.updateTime(tz);
    }
}