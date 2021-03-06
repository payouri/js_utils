/** @module DateUtils */
/**
 * @function daysInMonth
 * @description Get the number of days in a month
 * 
 * @param {Number} month from 0 to 11
 * @param {Number} year from 1970 YYYY format
 * 
 * @returns {Number} Number of days in the request moth
*/
export const daysInMonth = function (month, year) {
    return new Date(Date.UTC(year, month + 1, 0)).getDate();
}
/**
 * @function getLastDayOfTheMonth
 * @description Get the a Date object of the last day in specified month
 * 
 * @param {Number} month from 0 to 11
 * @param {Number} year from 1970 YYYY format
 * 
 * @returns {Date} Date
 */
export const getLastDayOfTheMonth = function (month, year) {
    return new Date(Date.UTC(year, month, daysInMonth(month, year)));
}
/**
 * @function getFirstDayOfTheMonth
 * @description Get the a Date object of the first day in specified month 
 * 
 * @param {Number} month from 0 to 11
 * @param {Number} year from 1970 YYYY format
 * 
 * @returns {Date} Date
*/
export const getFirstDayOfTheMonth = function (month, year) {
    return new Date(Date.UTC(year, month, 1));
}
/**
 * @typedef formatObject
 * @property {String} locale country locale
 * @property {Object<string, string>} [options] toLocaleDateString format object
*/
/**  
 * @typedef dateFormatType
 * @enum {"iso"|"string"|formatObject}
 */
/**
 * @function dateFromObjectId
 * @description Convert a Mongo ObjectID to a Date Object or a Date String depending on format param
 * 
 * @param {ObjectID} objectId object id to transform
 * @param {dateFormatType} [format] if undefined return Date object
 * 
 * @return {String|Number} formatted date string or timestamp in ms
 */
export const dateFromObjectId = function (objectId, format) {

    if (typeof format == 'object' && format.locale)
        return (new Date(parseInt(objectId.substring(0, 8), 16) * 1000)).toLocaleDateString(format.locale, format.options || {})

    if (format == 'iso')
        return (new Date(parseInt(objectId.substring(0, 8), 16) * 1000)).toISOString()

    if (format == 'string')
        return (new Date(parseInt(objectId.substring(0, 8), 16) * 1000)).toDateString()

    return new Date(parseInt(objectId.substring(0, 8), 16) * 1000).getTime()

};
/**
 * @function timeAgo
 * @description Returns a date or a timestamp to elapsed time format
 * 
 * @param {Date|Number} time 
 * @param {Object} options template property allow you to use different string for all time frames, prefix, and suffix 
 * @param {templates} [options.templates]
 * 
 * @returns {String} formatted time ago
 */
export const timeAgo = function (time, { templates } = {}) {
    /**
     * @typedef {Object} templates
     * @property {string} prefix
     * @property {string} suffix
     * @property {string} seconds
     * @property {string} minute
     * @property {string} minutes
     * @property {string} hour
     * @property {string} hours
     * @property {string} day
     * @property {string} days
     * @property {string} month
     * @property {string} months
     * @property {string} year
     * @property {string} years
    */
    const defaultTemplates = {
        prefix: "",
        suffix: " ago",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years"
    };

    const currentTemplates = { ...defaultTemplates, ...templates }

    const getTemplate = function (t, n) {
        return currentTemplates[t] && currentTemplates[t].replace(/%d/i, Math.abs(Math.round(n)));
    };

    const timer = function (time) {

        if (!time) return;
        if (!isNaN(Number(time))) time = new Date(time);
        if (time instanceof Date) time = String(time);

        time = time.replace(/\.\d+/, ""); // remove milliseconds
        time = time.replace(/-/, "/").replace(/-/, "/");
        time = time.replace(/T/, " ").replace(/Z/, " UTC");
        time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
        time = new Date(time * 1000 || time);

        const now = new Date();
        const seconds = ((now.getTime() - time) * .001) >> 0;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;
        const years = days / 365;

        return currentTemplates.prefix + (
            seconds < 45 && getTemplate('seconds', seconds) ||
            seconds < 90 && getTemplate('minute', 1) ||
            minutes < 45 && getTemplate('minutes', minutes) ||
            minutes < 90 && getTemplate('hour', 1) ||
            hours < 24 && getTemplate('hours', hours) ||
            hours < 42 && getTemplate('day', 1) ||
            days < 30 && getTemplate('days', days) ||
            days < 45 && getTemplate('month', 1) ||
            days < 365 && getTemplate('months', days / 30) ||
            years < 1.5 && getTemplate('year', 1) ||
            getTemplate('years', years)) + currentTemplates.suffix;
    };
    return timer(time);
};

export default {
    dateFromObjectId,
    timeAgo,
    daysInMonth,
    getLastDayOfTheMonth,
    getFirstDayOfTheMonth,
}