function getCurrentDate(tz) {
    let date = new Date();
    let currentTimeZone = tz;
    const region = Intl.DateTimeFormat().resolvedOptions();
    let langDate;

    let dateOptions = {
        timeZone: currentTimeZone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }

    if (region.locale !== "en-US") {
        langDate = "en-US";
    } else { 
        langDate = region.locale;
    }

    let currentDate = date.toLocaleDateString(langDate, dateOptions).split(' ');

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