/** @module GeomUtils */
/** 
 * @typedef Point
 * @param {Number} x float
 * @param {Number} y float
*/
/**
 * @function calcPointCoordsOnCircle
 * @description
 * @param {Number} cx 
 * @param {Number} cy 
 * @param {Number} r 
 * @param {*} ang 
 * @returns {Point}
*/
export const calcPointCoordsOnCircle = function(cx, cy, r, ang) {
    return {
        x: cx + r * Math.cos(ang),
        y: cy + r * Math.sin(ang)
    }
}
/**
 * @function distBetweenTwoPts
 * @description
 * @param {Point} a {x: number, y: number}
 * @param {Point} b {x: number, y: number}
 * @return {Number}
*/
export const distBetweenTwoPts = (a, b) => {
    if (a && b && a.x && a.y && b.x && b.y)
        return Math.sqrt(Math.pow(b.y - a.y, 2) + Math.pow(b.x - a.x, 2));
    else
        return NaN;
}
/**
 * @function getCirclePerimeter
 * @description
 * @param {Number} radius circle radius
 * @return {Number}
*/
export const getCirclePerimeter = radius => {
    const r = Number(radius);
    if (!isNaN(r))
        return 2 * Math.PI * r;
    else
        throw new Error('TypeError: Param "radius" is not a valid number')
}
/**
 * @function getDiscArea
 * @description
 * @param {Number} radius circle radius
 * @return {Number}
*/
export const getDiscArea = (radius) => {
    const r = Number(radius);
    if (!isNaN(r))
        return Math.PI * Math.pow(r, 2);
    else
        throw new Error('TypeError: Param "radius" is not a valid number')
}

export default {
    calcPointCoordsOnCircle,
    distBetweenTwoPts,
    getCirclePerimeter,
    getDiscArea,
}