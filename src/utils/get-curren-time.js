function getCurrentTime(tz) {
    let time = new Date();
    let currentTimeZone = tz;
    let optionZone = { timeZone: currentTimeZone, hour12: true };

    const region = Intl.DateTimeFormat().resolvedOptions();

    let timeToWork = time.toLocaleTimeString(region.locale, optionZone);
    let [timeFormat, dayState] = timeToWork.split(' ');

    let [hours, minutes, seconds] = timeFormat.split(':');
    hours = parseInt(hours);
    hours = hours.toString().padStart(2, '0');
    minutes = parseInt(minutes).toString().padStart(2, '0');
    seconds = parseInt(seconds).toString().padStart(2, '0');

    return {
        hours,
        minutes,
        seconds,
        dayState
    }
}

export { getCurrentTime }
