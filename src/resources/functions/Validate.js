const isBetweenHours = (date, startTime, endTime) => {
    const parsedDate = moment(date).utcOffset(Config.settings.countryTimezone);
    return moment(parsedDate.format('HH:mm:ss'), 'HH:mm:ss').isBetween(
        moment(startTime, 'HH:mm:ss'),
        moment(endTime, 'HH:mm:ss'),
        undefined,
        '[]'
    );
}