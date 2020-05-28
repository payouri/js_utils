/** @module SortUtils */
/**
 * @function localeSort
 * @description Shortcut for String.prototype.localeCompare function
 * @param {String} a 
 * @param {String} b 
 * @param {String} locale for exemple 
 * @param {Intl.Collator} opts 
*/
export const localeSort = (a, b, locale, opts) => {
    return a.localeCompare(b, locale, opts)
}
/**
 * @function sortByNestedProperty
 * @description sort by object properties
 * @param {String|Number|Symbol} prop object property to sort items by
 * 
 * @returns {Function} sort function 
*/
export const sortByNestedProperty = prop => {
    prop = prop.split('.')
    const len = prop.length
    return function (a, b) {
        let i = 0
        while (i < len) { a = a[prop[i]]; b = b[prop[i]]; i++ }
        return (a < b ? -1 : (a > b ? 1 : 0))
    }
}
/**
 * @function quickSort
 * @description
 * @param {Array} list 
 * 
 * @returns {Array}
*/
export const quickSort = list => {

    if (list.length < 2)
        return list

    let pivot = list[0]
    let left = []
    let right = []
    for (let i = 1, total = list.length; i < total; i++) {
        if (list[i] < pivot)
            left.push(list[i])
        else
            right.push(list[i])
    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];

}

export default {
    sortByNestedProperty,
    localeSort,
    quickSort,
}