export default class DateView {
    renderDate({ day, month, year }) {
        let newDate = document.createElement('date-component');
        newDate.classList.add('current');
        newDate.dataset.day = day;
        newDate.dataset.month = month;
        newDate.dataset.year = year;

        const dateLayout = null || document.querySelector('.date');
        const initialDate = document.querySelector('date-component.initial-state');
        const currentDate = document.querySelector('date-component.current');

        /* if (dateLayout && initialDate) {
            initialDate.remove();
            dateLayout.appendChild(newDate);
        } else if (dateLayout && currentDate) {
            currentDate.remove();
            dateLayout.appendChild(newDate);
        } */

        if (dateLayout) {
            if (initialDate) initialDate.remove();
            if (currentDate) currentDate.remove();
            dateLayout.appendChild(newDate);
        }
    }
}