/* Date Elements */
import DateModel from "@models/date-model";
import DateView from "@views/date-view";
import DateController from "@controllers/date-controller";
import { getCurrentDate } from "@utils/get-current-date";

/* Time Elements */
import TimeModel from '@models/time-model.js';
import TimeView from '@views/time-view.js';
import TimeController from '@controllers/time-controller.js';
import { getCurrentTime } from '@utils/get-curren-time';

/* Date Logic */
function insertDate(tz) {
    let dateModel = new DateModel();
    let dateView = new DateView();
    let dateController = new DateController({ model: dateModel, view: dateView });

    let timezone = tz;

    const currentDate = getCurrentDate(timezone);

    dateController.updateDate({
        day: currentDate.day,
        month: currentDate.month,
        year: currentDate.year,
    });

    dateController.getCurrentDate();
}

/* Time Logic */
function insertTime(tz) {
    let timeModel = new TimeModel();
    let timeView = new TimeView();
    let timeController = new TimeController({ model: timeModel, view: timeView });

    let timezone = tz;

    const currenTime = getCurrentTime(timezone);

    timeController.updateHours({
        hours: currenTime.hours,
        minutes: currenTime.minutes,
        seconds: currenTime.seconds,
        ds: currenTime.dayState,
        tz: timezone
    });

    timeController.getCurrentHour();
}

function insertDateTimeComponents({ location }) {
    let timezone = location.tz_id;
    insertDate(timezone);
    insertTime(timezone);
}

export { insertDateTimeComponents };