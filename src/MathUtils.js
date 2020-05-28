/** @module MathUtils */
/**
 * @function random
 * @description get a random number between two boundaries
 * @param {Number} min lower boundary
 * @param {Number} max higher boundary
 * 
 * @returns {Number} float
*/
export const random = (min, max) => {
    return Math.random() * (max - min) + min;
}
/**
 * @function randomInt
 * @description get a random integer between two boundaries
 * @param {Number} min lower boundary
 * @param {Number} max higher boundary
 * 
 * @returns {Number} integer
*/
export const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @function clamp
 * @description clamp a number between two boundaries
 * @param {Number} num number to clamp
 * @param {Number} min lower boundary
 * @param {Number} max higher boundary
 * 
 * @returns {Number}
*/
export const clamp = (num, min, max) => {
    return num <= min ? min : num >= max ? max : num;
}
export default {
    clamp,
    random,
    randomInt,
}