function getCurrentTime(tz) {
    let time = new Date();

    let currentTimeZone = tz;

    let optionZone = { timeZone: currentTimeZone }

    const region = Intl.DateTimeFormat().resolvedOptions();

    let timeToWork = time.toLocaleTimeString(region.locale, optionZone);
    let formatFractured = timeToWork.split(' ');

    let currentTime = formatFractured[0].split(':');
    let hours = parseInt(currentTime[0]);
    let minutes = parseInt(currentTime[1]);
    let seconds = parseInt(currentTime[2]);
    let dayState = formatFractured[1];

    if (hours > 12) {
        hours = hours - 12;
        dayState = 'PM';
    }

    if (hours == 0) {
        hours = 12;
        dayState = 'AM';
    }

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return {
        hours,
        minutes,
        seconds,
        dayState
    }
}

export { getCurrentTime }
