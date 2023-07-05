function getCurrentDate() {
    let date = new Date();

    let currentTimeZone = Intl.DateTimeFormat().resolvedOptions();
    const region = Intl.DateTimeFormat().resolvedOptions();

    let dateOptions = {
        timeZone: currentTimeZone.timeZone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }

    let currentDate = date.toLocaleDateString(region.locale, dateOptions).split('/');

    return currentDate;
}

export { getCurrentDate } 