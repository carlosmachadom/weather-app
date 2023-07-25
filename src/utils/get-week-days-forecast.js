import fetchData from "@helpers/fetch-general-data";


export default async function getWeekDaysForecast({ latitude, longitude }) {
    let lat = latitude;
    let long = longitude;
    let endpoint = `/forecast.json`;
    let query = `?q=${lat}%2C${long}&days=3`;

    let data = await fetchData({ endpoint, query });
    let weeklyForecast = await data['forecast']['forecastday'];
    return { weeklyForecast };
}