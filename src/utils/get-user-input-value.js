import getCityData from "@helpers/fetch-general-cities-data";

export default async function getCityInputValue() {
    const value = document.querySelector('.desired-location-input').value.toLowerCase();
    const cityRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/;

    if (value !== "" && cityRegex.test(value)) {
        const realCity = await getCityData({ city: value });

        if (realCity === undefined) {
            return null;
        }

        const cityName = await realCity[0]?.['display_name'];
        const city = await cityName?.split(',')[0].toLowerCase();

        if (city.includes(value)) {
            return value;
        }
    }
} 