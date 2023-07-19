function getCurrentTime(tz) {
    let time = new Date();
    let currentTimeZone = tz;
    let optionZone = { timeZone: currentTimeZone };

    const region = Intl.DateTimeFormat().resolvedOptions();

    let timeToWork = time.toLocaleTimeString(region.locale, optionZone);
    const [timeFormat, dayState] = timeToWork.split(' ');

    let [hours, minutes, seconds] = timeFormat.split(':');
    hours = parseInt(hours);

    if (hours > 12) {
        hours = hours - 12;
        dayState = 'PM';
    } else if (hours == 0) {
        hours = 12;
        dayState = 'AM';
    }

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
