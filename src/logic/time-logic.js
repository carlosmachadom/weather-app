/* Models */
import TimeModel from '@models/time-model.js';

/* Views */
import TimeView from '@views/time-view.js';

/* Controllers */
import TimeController from '@controllers/time-controller.js';

/* utils */
import { getCurrentTime } from '@utils/get-curren-time';

function insertTime() {
    let timeModel = new TimeModel();
    let timeView = new TimeView();
    let timeController = new TimeController({ model: timeModel, view: timeView });

    const currenTime = getCurrentTime();

    timeController.updateHours({
        hours: currenTime.hours,
        minutes: currenTime.minutes,
        seconds: currenTime.seconds,
        ds: currenTime.dayState
    });

    timeController.getCurrentHour();
}

export { insertTime }