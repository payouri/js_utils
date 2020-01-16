export const localeSort = (a, b, locale, opts) => {
    return a.localeCompare(b, locale, opts)
}
export const sortByNestedProperty = prop => {
    prop = prop.split('.')
    const len = prop.length
    return function (a, b) {
        let i = 0
        while (i < len) { a = a[prop[i]]; b = b[prop[i]]; i++ }
        return (a < b ? -1 : (a > b ? 1 : 0))
    }
}
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
    localeSort,
    quickSort,
}