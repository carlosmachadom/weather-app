function getCurrentDate(tz) {
    let date = new Date();
    let currentTimeZone = tz;
    const region = Intl.DateTimeFormat().resolvedOptions();

    let dateOptions = {
        timeZone: currentTimeZone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }

    let currentDate = date.toLocaleDateString(region.locale, dateOptions).split(' ');

    let day = currentDate[2].split(',')[0];
    let month = currentDate[1];
    let year = currentDate[3];

    day = day < 10 ? `0${day}` : day;

    return {
        day,
        month,
        year
    };
}

export { getCurrentDate } 