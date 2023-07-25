import fetchData from "@helpers/fetch-general-data";

export default async function getHourlyForecastData({ latitude, longitude, date }) {
    let lat = latitude;
    let long = longitude;
    let currentDate = date;

    let endpoint = `/history.json`;
    let query = `?q=${lat}%2C${long}&dt=${currentDate}`;

    let data = await fetchData({ endpoint, query });
    let hourlyForecast = await data['forecast'].forecastday[0]['hour'];

    return { hourlyForecast };
}