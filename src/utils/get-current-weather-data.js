import fetchData from "@helpers/fetch-general-data";

export default async function getCurrentData({ latitude = null, longitude = null, city = null }) {
    let lat = latitude;
    let long = longitude;
    let c = city;

    let endpoint = `/current.json`;
    let query;

    if (long !== null && lat !== null && c === null) {
        query = `?q=${lat}%2C${long}`;
    } else if (long === null && lat === null && c !== null) {
        query = `?q=${c}`;
    } else {
        return;
    }

    let data = await fetchData({ endpoint, query });

    let weather = await data['current'];
    let location = await data['location'];
    let date = await location.localtime;

    return { weather, location, date };
}