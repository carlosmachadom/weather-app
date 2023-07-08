export default async function fetchData({ API, options }) {
    try {
        let response = await fetch(API, options);
        let data = await response.json();
        return data;
    } catch (e) {
        throw new Error(e);
    }
}