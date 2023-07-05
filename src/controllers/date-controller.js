export default class DateController {
    constructor({ model, view }) {
        this.model = model;
        this.view = view;
    }

    updateDate(date) {
        this.model.setDate(date);
    }

    getCurrentDate() {
        let date = this.model.getDate();

        this.view.renderDate(date);
    }
}