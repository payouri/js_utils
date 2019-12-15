/**
 * @jest-environment jsdom
*/
import * as DOMUtils from './DOMUtils'

test('appendChildren', () => {

    const parent = DOMUtils.createElement();
    const el = jest.fn(() => DOMUtils.appendChildren(parent, [DOMUtils.createElement(), DOMUtils.createElement()]))
    el()
    expect(el).toHaveReturnedWith(parent)

})
test('setClasses', () => {

    const el = DOMUtils.createElement()
    const classes = jest.fn(() => DOMUtils.setClasses(el, ['a', 'b', 'c']))
    expect(classes()).toHaveProperty('className', 'a b c')

})
test('attachEvts', () => {
    /* attachEvts */

})
test('detachEvts', () => {
    /* detachEvts */
})
test('createElement', () => {
    /* createElement */
})
test('getBoundEvents', () => {
    /* getBoundEvents */
})
test('isChildrenOf', () => {
    /* isChildrenOf */
})
test('moveNode', () => {
    /* moveNode */
})
test('setClasses', () => {
    /* setClasses */
})
test('removeClasses', () => {
    /* removeClasses */
})
test('setAttributes', () => {
    /* setAttributes */
})
test('getAttributes', () => {
    /* getAttributes */
})
test('removeAttributes', () => {
    /* removeAttributes */
})
test('setDataAttributes', () => {
    /* setDataAttributes */
})
test('removeDataAttributes', () => {
    /* removeDataAttributes */
})
test('setProperties', () => {
    /* setProperties */
})
test('removeProperties', () => {
    /* removeProperties */
})
test('setStyles', () => {
    /* setStyles */
})
test('removeStyles', () => {
    /* removeStyles */
})
test('wrapNode', () => {
    /* wrapNode */
})
test('hasClasses', () => {
    /* hasClasses */
})
test('hasAttributes', () => {
    /* hasAttributes */
})
test('addChildrenListener', () => {
    /* addChildrenListener */
})