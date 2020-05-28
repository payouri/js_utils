import { randomPick } from './ArrayUtils'
/**
 * @module StringUtils
*/
/**
 * @function generateRandom
 * @description Generate a random string from a number of character and a pool of 
 * @param {Number} l string length
 * @param {String[]} pool possible characters to generate the string
 * 
 * @returns {String}
*/
export const generateRandom = (l = 6, pool) => {

    if (typeof l != 'number')
        return;

    if (!pool || !Array.isArray(pool) || pool.length == 0)
        pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$*#&!'.split('');

    let s = '';

    for (let i = 0; i < l; i++) {
        s += randomPick(pool);
    }

    return s;

}
/**
 * @function capitalize
 * @description turn first character of a string to uppercase
 * @param {String} s 
*/
export const capitalize = s => {
    return s && s[0].toUpperCase() + s.slice(1);
}
/**
 * @function unCapitalize
 * @description turn first character of a string to lowercase
 * @param {String} s 
 * 
 * @returns {String}
*/
export const unCapitalize = s => {
    return s && s[0].toLowerCase() + s.slice(1);
}
/**
 * @function capitalizeWords
 * @description turn each word first letter to uppercase
 * @param {String} s string to transform
 * 
 * @returns {String} 
*/
export const capitalizeWords = s => {
    return s.split(' ').map(s => capitalize(s)).join(' ');
}
/**
 * @function replaceAll
 * @description replace all occurrences of a search with a replacement in a String
 * @param {String} str
 * @param {String} search
 * @param {String} replacement
 * 
 * @returns {String}
*/
export const replaceAll = (str, search, replacement) => {
    return str.replace(new RegExp(search, 'g'), replacement);
}
/**
 * @function stringToFunction
 * @description Returns a function from a string property path
 * @param {String} str
 * @returns {Function} function 
 * @example
 * //returns addEventListener
 *  stringToFunction("window.addEventListener");
*/
export const stringToFunction = str => {
    let arr = str.split("."),
        fn = (global || this);
    for (let i = 0, len = arr.length; i < len; i++) {
        fn = fn[arr[i]];
    }
    if (typeof fn !== "function") {
        throw new TypeError("function not found");
    }
    return fn;
}
/**
 * @function secsToMin
 * @description transform a number in seconds in a string
 * 
 * @param {Number} d Seconds integer
 * 
 * @return {String} string in format hh:mm:ss
*/
export const secsToMin = d => {
    let hrs = ~~(d / 3600);
    let mins = ~~((d % 3600) / 60);
    let secs = ~~d % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;

}
/**
 * @function nFormatter
 * @description format a number in counterpart unit
 * @param {Number} num number to transform
 * @param {Number} digits number of decimal digits
 * @example
 * //returns "10M"
 * nFormatter(10000000)
*/
export const nFormatter = (num, digits = 0) => {
    const si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}
/**
 * @function encodeHTML
 * @description replace characters like chevrons in html string
 * 
 * @param {String} s 
 * 
 * @returns {String} 
*/
export const encodeHTML = s => {
    return typeof s == 'string' 
        ? s
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;') 
        : s;
}

/**
 * @function generateHexKey
 * @description code date timestamp in hexadecimal string
 * 
 * @returns {String}
 * @example
 * // current time: 1590247414800
 * // returns "1724221dc10"
 * generateHexKey()
*/
export const generateHexKey = () => String((new Date).getTime().toString(16))

export default {
    capitalize,
    capitalizeWords,
    generateRandom,
    replaceAll,
    secsToMin,
    stringToFunction,
    unCapitalize,
    nFormatter,
    encodeHTML,
    generateHexKey,
}