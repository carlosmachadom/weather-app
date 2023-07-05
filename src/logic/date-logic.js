/* Model */
import DateModel from "@models/date-model";

/* View */
import DateView from "@views/date-view";

/* Controller */
import DateController from "@controllers/date-controller";

/* Utils */
import { getCurrentDate } from "@utils/get-current-date";

function insertDate() {
    let dateModel = new DateModel();
    let dateView = new DateView();
    let dateController = new DateController({ model: dateModel, view: dateView });

    const currentDate = getCurrentDate();

    dateController.updateDate(currentDate);

    dateController.getCurrentDate();
}

export { insertDate }
