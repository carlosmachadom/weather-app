import fetchData from "@helpers/fetch-general-data";

export default async function getCurrentData({ latitude, longitude }) {
    let lat = latitude;
    let long = longitude;
    let endpoint = `/current.json`;
    let query = `?q=${lat}%2C${long}`;

    let data = await fetchData({ endpoint, query });

    let weather = await data['current'];
    let location = await data['location'];
    let date = await location.localtime;

    return { weather, location, date };
}