export default class DateController {
    constructor({ model, view }) {
        this.model = model;
        this.view = view;
    }

    updateDate({ day, month, year }) {
        this.model.setDate({ day, month, year });
    }

    getCurrentDate() {
        let day = this.model.getDay();
        let month = this.model.getMonth();
        let year = this.model.getYear();

        this.view.renderDate({ day, month, year });
    }
}