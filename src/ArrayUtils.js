/** @module ArrayUtils */
/** 
 * @function intersection
 * @desc Check if some element of array 1 intersect array 2
 *  
 * @param {Array} arr1 array to check for intersection
 * @param {Array} arr2 array to check for intersection
 * 
 * @returns {Array} intersecting elements
*/
export const intersection = (arr1, arr2) => arr1.filter(element => arr2.includes(element));
/** 
 * @function randomPick
 * @desc Return a random element from the input array
 * 
 * @param {Array} array 
 * 
 * @returns {any} random element from array 
 */
export const randomPick = array => {
    if (Array.isArray(array))
        return array[Math.floor(Math.random() * array.length)];
    else
        throw new TypeError('Param "array" is not an array');
};
/** 
 * @function chunkArray
 * @desc Split an array into smaller array (chunks)
 * 
 * @param {Array} array list of elements
 * @param {Number} size integer defining the number of elements in each chunk
 * 
 * @returns {Array} array containing the generated chunks 
 */
export const chunkArray = (array, size) => {
    let result = []
    let chunkIndex = 0;
    for (let i = 0, n = array.length; i < n; i += size) {
        let chunk = array.slice(i, i + size)
        result[chunkIndex] = chunk
        chunkIndex++
    }
    return result
};
/** 
 * @function falsyBounce
 * @desc Returns an array stripped of al falsy values
 * 
 * @param {Array} array 
 * 
 * @returns {Array} array containing no falsy values
 */
export const falsyBounce = array => {
    let result = []
    //loop through with each array value
    for (let value of array) {
        // push into result if truthy
        if (value) {
            result.push(value)
        }
    }
    return result
};

/** 
 * @function mergeArrays
 * @desc Merge arrays in a single array
 * 
 * @param  {...Arrays} arrays arrays to merge
 * 
 * @returns {Function} function that take a boolean as entry
*/
export const mergeArrays = (...arrays) => (removeDups = false) => {
    let jointArray = []

    for (let i = 0, n = arrays.length; i < n; i++) {
        jointArray = [...jointArray, ...arrays[i]]
    }
    return removeDups ? jointArray.filter((item, index) => jointArray.indexOf(item) === index) : jointArray
}
/** 
 * @function getElementAt
 * @desc Get element of an iterable 
 * @param {Array} iterable 
 * @param {Number} n 
 * 
 * @returns {any}
 */
export const getElementAt = function (iterable, n) {
    if (iterable.length == 0) {
        return undefined;
    }
    const i = n % iterable.length;
    return i >= 0 ? iterable[i] : iterable[iterable.length + i];
}

/**
 * @namespace ArrayUtils
*/
export default {
    chunkArray,
    falsyBounce,
    intersection,
    mergeArrays,
    randomPick,
    getElementAt,
}