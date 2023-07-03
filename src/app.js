/* Logic */
import { insertTime } from '@logic/time-logic.js';
import { insertDate } from '@logic/date-logic';

(async function App() {
    try {
        insertTime();
        insertDate();
    } catch (err) {
        throw new Error(err);
    }
})();