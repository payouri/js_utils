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

export default {
    capitalize,
    capitalizeWords,
    generateRandom,
    replaceAll,
    secsToMin,
    stringToFunction,
    unCapitalize,
}