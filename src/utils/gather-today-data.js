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

export default async function getTodayData({ lat, long }) {
    let latitude = lat;
    let longitude = long;
    let data = await fetchData({ API: `${URL}/current.json?q=${latitude}%2C${longitude}`, options: apiOptions });
    return data;
}