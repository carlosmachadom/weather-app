const KEY = process.env.API_WEATHER_KEY;
const API = process.env.API_WEATHER_URL;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export default async function fetchData({ endpoint, query }) {
    const ENDPOINT = endpoint;
    const QUERY = query;

    try {
        let response = await fetch(`${API}${ENDPOINT}${QUERY}`, options);
        let data = await response.json();

        return { data };
    } catch (e) {
        throw new Error(e);
    }
}