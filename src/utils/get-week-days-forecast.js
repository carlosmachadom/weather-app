import fetchData from "@helpers/fetch-general-data";


export default async function getWeekDaysForecast({ latitude = null, longitude = null, city = null }) {
    let lat = latitude;
    let long = longitude;
    let c = city;

    let endpoint = `/forecast.json`;
    let query;

    if (long !== null && lat !== null && c === null) {
        query = `?q=${lat}%2C${long}&days=3`;
    } else if (long === null && lat === null && c !== null) {
        query = `?q=${c}&days=3`;
    } else {
        return;
    }

    let data = await fetchData({ endpoint, query });
    let weeklyForecast = await data['forecast']['forecastday'];
    return { weeklyForecast };
}