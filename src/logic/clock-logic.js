/* Models */
import Clock from '@models/clock-model.js';

/* Views */
import ClockView from '@views/clock-view.js';

/* Controllers */
import ClockController from '@controllers/clock-controller.js';

/* utils */
import { getCurrentTime } from '@utils/get-curren-time';

function startClock() {
    let clock = new Clock();
    let clockView = new ClockView();
    let clockController = new ClockController({ model: clock, view: clockView });

    const currenTime = getCurrentTime();

    clockController.updateHours({
        hours: currenTime.hours,
        minutes: currenTime.minutes,
        seconds: currenTime.seconds,
        ds: currenTime.dayState
    });

    clockController.getCurrentHour();
}

export { startClock }