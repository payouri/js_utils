import * as ArrayUtils from './ArrayUtils'

test('intersection', () => {
    const inter = jest.fn(() => ArrayUtils.intersection([1, 3, 7], [7, 5, 4, 10]))
    inter();
    expect(inter).toHaveReturnedWith([7])
})
test('randomPick', () => {
    const pick = jest.fn(() => ArrayUtils.randomPick(['a', 'b', 10]))
    pick()
    expect(pick).toHaveReturned()
})
test('chunkArray', () => {
    const chunks = jest.fn(() => ArrayUtils.chunkArray([1, 3, 7, 7, 5, 4, 10, 22, 45], 3))
    expect(chunks()).toHaveLength(3)
})
test('falsyBounce', () => {
    const arr = jest.fn(() => ArrayUtils.falsyBounce([null, 1, 0, true, '', 'aaa']))
    expect(arr()).toHaveLength(3)
})
test('mergeArrays', () => {
    const merge = jest.fn(() => ArrayUtils.mergeArrays([1, 3, 7], [7, 5, 4, 10], [2, 4])(false))
    expect(merge()).toHaveLength(9)
})
test('mergeArrays remove duplicates', () => {
    const merge = jest.fn(() => ArrayUtils.mergeArrays([1, 3, 7], [7, 5, 4, 10], [3, 4])(true))
    expect(merge()).toHaveLength(6)
})
test('getElementAt positive', () => {
    const fn = jest.fn(() => ArrayUtils.getElementAt([1, 2, 3, 4, 5], 7))
    expect(fn()).toBe(3)
})
test('getElementAt negative', () => {
    const fn = jest.fn(() => ArrayUtils.getElementAt([1, 2, 3, 4, 5], -4))
    expect(fn()).toBe(2)
})