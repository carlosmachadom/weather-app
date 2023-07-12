import fetchData from "@utils/fetch-general-data";

const URL = process.env.URL;
const KEY = process.env.KEY;

const apiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

async function success(pos) {
    const crd = pos.coords;

    const latitude = crd.latitude.toFixed(2);
    const longitude = crd.longitude.toFixed(2);

    const data = await fetchData({ API: `${URL}/current.json?q=${latitude}%2C${longitude}`, options: apiOptions });
    console.log(data);
}

function error(err) {
    throw new Error(`ERROR(${err.code}): ${err.message}`);
}

export default function fetchInitialInfo() {
    navigator.geolocation.getCurrentPosition(success, error, geoOptions);
}
