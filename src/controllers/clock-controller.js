export default class ClockController {
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