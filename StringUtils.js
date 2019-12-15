import { randomPick } from './ArrayUtils'

/**
     @param Number l
    @param String[] pool 
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
export const capitalize = s => {
    return s && s[0].toUpperCase() + s.slice(1);
}
export const unCapitalize = s => {
    return s && s[0].toLowerCase() + s.slice(1);
}
export const capitalizeWords = s => {
    return s.split(' ').map(s => capitalize(s)).join(' ');
}
export const replaceAll = (str, search, replacement) => {
    return str.replace(new RegExp(search, 'g'), replacement);
}
export const stringToFunction = str => {
    let arr = str.split("."),
        fn = (window || this);
    for (let i = 0, len = arr.length; i < len; i++) {
        fn = fn[arr[i]];
    }
    if (typeof fn !== "function") {
        throw new Error("function not found");
    }
    return fn;
}
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
export const encodeHTML = s => {
    return typeof s == 'string' ? s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;') : s;
}

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
}