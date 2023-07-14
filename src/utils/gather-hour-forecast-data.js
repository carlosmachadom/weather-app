import fetchData from "@helpers/fetch-general-data";

const URL = process.env.URL;
const KEY = process.env.KEY;

const apiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export default async function getTodayForecastData({ lat, long, date }) {
    let latitude = lat;
    let longitude = long;
    let currentDate = date;
    let data = await fetchData({ API: `${URL}/history.json?q=${latitude}%2C${longitude}&dt=${currentDate}`, options: apiOptions });

    return data['forecast'].forecastday[0]['hour'];
}