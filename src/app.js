/* Logic */
import { startClock } from '@logic/clock-logic.js';

(async function App() {
    try {
        startClock();
    } catch (err) {
        throw new Error(err);
    }
})();