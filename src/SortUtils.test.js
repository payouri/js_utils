import { localeSort, sortByNestedProperty, quickSort } from './SortUtils'

test('localeSort', () => {
    const arr = [
        'John',
        'Louis',
        'Franck',
        'Ramon'
    ]
    arr.sort((a, b) => localeSort(a, b, 'fr-FR', { sensitivity: 'base' }))
    expect(arr).toStrictEqual([
        'Franck',
        'John',
        'Louis',
        'Ramon'
    ])
})
test('sortByNestedProperty', () => {
    const arr = [
        { name: 'John', },
        { name: 'Louis', },
        { name: 'Franck', },
        { name: 'Ramon' },
        { name: 'John', },
    ]
    const sortFn = sortByNestedProperty('name')
    arr.sort((a, b) => sortFn(a, b))
    expect(arr).toStrictEqual([
        { name: 'Franck', },
        { name: 'John', },
        { name: 'John', },
        { name: 'Louis', },
        { name: 'Ramon' },
    ])
})
test('quickSort', () => {
    const arr = [
        'John',
        'Louis',
        'Franck',
        'Ramon'
    ]
    const fn = jest.fn(() => quickSort(arr))
    fn()
    expect(fn).toHaveReturnedWith([
        'Franck',
        'John',
        'Louis',
        'Ramon'
    ])
})