/* Logic */
import { insertTime } from '@logic/time-logic.js';
import { insertDate } from '@logic/date-logic';
import fetchInitialInfo from '@logic/first-data-logic';

(async function App() {
    try {
        insertDate();
        insertTime();
        fetchInitialInfo();
    } catch (err) {
        throw new Error(err);
    }
})();