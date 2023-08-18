import getCityData from "@helpers/fetch-general-cities-data";

function normalice(str) {
    const accentMap = {
        'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE',
        'Ç': 'C',
        'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E',
        'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I',
        'Ð': 'D',
        'Ñ': 'N',
        'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O', 'Ø': 'O',
        'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U',
        'Ý': 'Y',
        'Þ': 'Th',
        'ß': 'ss',
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae',
        'ç': 'c',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
        'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
        'ð': 'd',
        'ñ': 'n',
        'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ø': 'o',
        'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
        'ý': 'y',
        'þ': 'th',
        'ÿ': 'y',
        'ẞ': 'SS',
    };

    return str.replace(/[\u0300-\u036f]/g, '') // Eliminar diacríticos
        .replace(/[^\u0000-\u007E]/g, letra => accentMap[letra] || letra);
}

export default async function getCityInputValue() {
    let finalValue = null;
    const value = document.querySelector('.desired-location-input').value.toLowerCase();
    const cityRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/;

    if (value !== "" && cityRegex.test(value)) {
        const realCity = await getCityData({ city: value });

        if (realCity === undefined) {
            return null;
        }

        const cityName = await realCity[0]?.['display_name'];
        const city = await cityName?.split(',')[0].toLowerCase();

        const regex = /^[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿẞ]+$/;

        if (regex.test(value)) {
            let cityToCompare = normalice(city);
            let valueToCompare = normalice(value);

            if (cityToCompare.includes(valueToCompare)) finalValue = value;
        } else {
            finalValue = value;
        }

        return finalValue;
    }

} 