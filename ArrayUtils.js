export const intersection = (arr1, arr2) => arr1.filter(element => arr2.includes(element));
export const randomPick = array => {
    if (Array.isArray(array))
        return array[Math.floor(Math.random() * array.length)];
    else
        throw new TypeError('Param "array" is not an array');
};
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

export const mergeArrays = (...arrays) => (removeDups = false) => {
    let jointArray = []

    for(let i = 0, n = arrays.length; i < n; i++) {
        jointArray = [...jointArray, ...arrays[i]]
    }
    return removeDups ? jointArray.filter((item, index) => jointArray.indexOf(item) === index) : jointArray
}

export const getElementAt = function(iterable, n) {
    if(iterable.length == 0) {
        return undefined;
    }
    const i = n%iterable.length;
    return i >= 0 ? iterable[i] : iterable[iterable.length + i];
}

export default {
    chunkArray,
    falsyBounce,
    intersection,
    mergeArrays,
    randomPick,
    getElementAt,
}