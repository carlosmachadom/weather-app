export default class DayLocationController {
    constructor({ model, view }) {
        this.model = model;
        this.view = view;
    }

    updateData({ degrees, city, country, state, stateImage }) {
        this.model.setData({ degrees, city, country, state, stateImage });
    }

    getCurrentData() {
        let degrees = this.model.getDegrees();
        let city = this.model.getCity();
        let country = this.model.getCountry();
        let state = this.model.getState();
        let stateImage = this.model.getStateImage();

        this.view.renderData({ degrees, city, country, state, stateImage });
    }
}