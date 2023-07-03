function getCurrentDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();

    return {
        year,
        month,
        day
    }
}