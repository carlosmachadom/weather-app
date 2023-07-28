import fetchData from "@helpers/fetch-general-weather-data";
import { showTextError } from "@utils/show-hide-text-error";

export default async function getCurrentData({ latitude = null, longitude = null, city = null }) {
    let lat = latitude;
    let long = longitude;
    let c = city;

    let endpoint = `/current.json`;
    let query;

    if (long !== null && lat !== null) {
        query = `?q=${lat}%2C${long}`;
    } else if (c !== null) {
        query = `?q=${c}`;
    }

    let { data } = await fetchData({ endpoint, query });

    if (data && data.error) {
        showTextError();
        return { weather: undefined, location: undefined, date: undefined };
    }

    let weather = await data?.['current'];
    let location = await data?.['location'];
    let date = await location?.localtime;

    return { weather, location, date };
}