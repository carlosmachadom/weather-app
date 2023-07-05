export default class DateView {
    renderDate(currentDate) {
        let date = document.createElement('date-component');
        date.dataset.date = currentDate;

        const clock = null || document.querySelector('.clock');

        if (clock !== null) {
            clock.appendChild(date);
        }
    }
}