export const calcPointCoordsOnCircle = function(cx, cy, r, ang) {

    return {
        x: cx + r * Math.cos(ang),
        y: cy + r * Math.sin(ang)
    }

}
/**
 * @param a: {x: number, y: number}
 * @param b: {x: number, y: number}
 * @return number
 **/
export const distBetweenTwoPts = (a, b) => {
    if (a.x && a.y && b.x && b.y)
        return Math.sqrt(Math.pow(b.y - a.y, 2) + Math.pow(b.x - a.x, 2));
    else
        return NaN;
}
/**
 * @param radius: number
 * @return number
 **/
export const getCirclePerimeter = (radius) => {
    const r = Number(radius);
    if (!isNaN(r))
        return 2 * Math.PI * r;
    else
        throw new Error('TypeError: Param "radius" is not a valid number')
}
/**
 * @param radius: number
 * @return number
 **/
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