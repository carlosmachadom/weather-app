export default class DayLocationModel {
    constructor() {
        this.degrees = 0;
        this.city = '';
        this.country = '';
        this.state = '';
        this.stateImage = '';
    }

    setData({ degrees, city, country, state, stateImage }) {
        this.degrees = degrees;
        this.city = city;
        this.country = country;
        this.state = state;
        this.stateImage = stateImage;
    }

    getDegrees() {
        return this.degrees;
    }

    getCity() {
        return this.city;
    }

    getCountry() {
        return this.country;

    }

    getState() {
        return this.state;
    }

    getStateImage() {
        return this.stateImage;
    }
}