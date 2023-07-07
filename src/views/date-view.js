export default class DateView {
    renderDate({ day, month, year }) {
        let date = document.createElement('date-component');
        date.dataset.day = day;
        date.dataset.month = month;
        date.dataset.year = year;

        const dateLayout = null || document.querySelector('.date');

        if (dateLayout !== null) {
            dateLayout.appendChild(date);
        }
    }
}