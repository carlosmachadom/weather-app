const API = process.env.API_CITY_URL;
import { showTextError } from "@utils/show-hide-text-error";

export default async function getCityData({ city }) {
    const url = API;
    const endpoint = '/search';
    const query = `?q=${city}&limit=1&format=json`;

    try {
        const response = await fetch(`${url}${endpoint}${query}`);
        const data = await response.json();

        if (data.length === 0) {
            showTextError();
        }

        return data;
    } catch (e) {
        throw new Error(e);
    }
}


