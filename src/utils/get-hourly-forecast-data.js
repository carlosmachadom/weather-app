import fetchData from "@helpers/fetch-general-weather-data";

export default async function getHourlyForecastData({ latitude = null, longitude = null, city = null, date }) {
    let lat = latitude;
    let long = longitude;
    let c = city
    let currentDate = date;

    let endpoint = `/history.json`;
    let query;

    if (long !== null && lat !== null && c === null) {
        query = `?q=${lat}%2C${long}&dt=${currentDate}`;
    } else if (long === null && lat === null && c !== null) {
        query = `?q=${c}&dt=${currentDate}`;
    }

    let { data } = await fetchData({ endpoint, query });
    let hourlyForecast = await data['forecast'].forecastday[0]['hour'];

    return { hourlyForecast };
}