export const intersection = (arr1, arr2) => arr1.filter(element => arr2.includes(element));
export const randomPick = array => {
    if (Array.isArray(array))
        return array[Math.floor(Math.random() * myArray.length)];
    else
        throw new TypeError('Param "array" is not an array');
};
export const chunkArray = (array, size) => {
    let result = []
    for (i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
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

export const mergeArrays = (...arrays) => {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index)
    return uniqueArray
}

export default {
    chunkArray,
    falsyBounce,
    intersection,
    mergeArrays,
    randomPick,
}