const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function getLocation() {
    return new Promise((resolve, reject) => {
        const geo = navigator.geolocation;
        geo.getCurrentPosition(resolve, reject, geoOptions);
    });
}

async function handleSuccess(pos) {
    const { latitude, longitude } = pos.coords;
    return { latitude, longitude };
}

function getUserLocationWithFallback() {
    return new Promise((resolve) => {
        const fallbackLocation = { latitude: 40.71, longitude: -74.01 };
        resolve(fallbackLocation);
    });
}

export default async function getUserLocation() {
    try {
        const pos = await getLocation();
        const { latitude, longitude } = await handleSuccess(pos);
        let data = await { latitude, longitude }
        return data;
    } catch (error) {
        return await getUserLocationWithFallback();
    }
}