function getCurrentTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let dayState = 'AM';

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
