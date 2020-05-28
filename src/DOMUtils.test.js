/**
 * @jest-environment jsdom
*/
import * as DOMUtils from './DOMUtils'

describe('appendChildren', () => {
    test('with valid args', () => {
        const parent = DOMUtils.createElement();
        const els = jest.fn(() => DOMUtils.appendChildren(parent, [DOMUtils.createElement(), DOMUtils.createElement()]))
        const el = jest.fn(() => DOMUtils.appendChildren(parent, DOMUtils.createElement()))
        els()
        expect(els).toHaveReturnedWith(parent)
        el()
        expect(el).toHaveReturnedWith(parent)
    })
    test('with invalid args', () => {
        const parent = DOMUtils.createElement();
        let children = [null]
        expect(() => { DOMUtils.appendChildren(parent, children) }).toThrow(TypeError)
    })
})
test('setClasses', () => {

    const el = DOMUtils.createElement()
    const classes = jest.fn(() => DOMUtils.setClasses(el, ['a', 'b', 'c']))
    expect(classes()).toHaveProperty('className', 'a b c')

})
describe('attachEvts', () => {
    test('with valid args', () => {
        const cb = jest.fn()
        const el = DOMUtils.createElement()
        const event = 'click'
        const events = ['click', 'mousemove', false]
        DOMUtils.attachEvts(el, cb, events)
        DOMUtils.attachEvts(el, cb, event)
        el.dispatchEvent(new Event('click'))
        el.dispatchEvent(new Event('mousemove'))
        expect(cb).toHaveBeenCalledTimes(2)
    })
    test('with invalid args', () => {
        let el = null
        let cb = undefined
        let events = false
        expect(() => { DOMUtils.attachEvts(el) }).toThrow(TypeError)
        el = DOMUtils.createElement()
        expect(() => { DOMUtils.attachEvts(el, cb) }).toThrow(TypeError)
        cb = () => { }
        expect(() => { DOMUtils.attachEvts(el, cb, events) }).toThrow(TypeError)
    })
    /* attachEvts */
})
describe('detachEvts', () => {
    /* detachEvts */
    test('with valid args', () => {
        const cb = jest.fn()
        const el = DOMUtils.createElement()
        const event = 'click'
        const events = ['click', 'mousemove', false]
        DOMUtils.attachEvts(el, cb, events)
        DOMUtils.attachEvts(el, cb, event)
        DOMUtils.detachEvts(el, cb, events)
        DOMUtils.detachEvts(el, cb, event)
        el.dispatchEvent(new Event('click'))
        el.dispatchEvent(new Event('mousemove'))
        expect(cb).toHaveBeenCalledTimes(0)
    })

    test('with invalid args', () => {
        let el = null
        let cb = undefined
        let events = false
        expect(() => { DOMUtils.detachEvts(el) }).toThrow(TypeError)
        el = DOMUtils.createElement()
        expect(() => { DOMUtils.detachEvts(el, cb) }).toThrow(TypeError)
        cb = () => { }
        expect(() => { DOMUtils.detachEvts(el, cb, events) }).toThrow(TypeError)
    })
})
describe('createElement', () => {
    /* createElement */
    test('with valid args', () => {
        let attributes = {
            tabIndex: 0
        },
            classes = ['a', 'b', 'c'],
            styles = {
                border: '1px solid'
            },
            html = '<h1>Lorem Ipsum</h1>',
            text = 'text',
            tag = 'main'

        let elem = DOMUtils.createElement({
            tag,
            attributes,
            classes,
            styles,
            html,
        })
        // expect(elem).toHaveProperty('classList')
        expect(elem.style.border).toBe(styles.border)
        expect(elem.innerHTML).toBe(html)
        expect(elem.tabIndex).toBe(0)
        expect(elem.nodeName.toLowerCase()).toBe(tag)

        elem = DOMUtils.createElement({
            html: false,
            classes: false,
            styles: null,
            text,
        })

        expect(elem.classList.length).toBe(0)
        expect(elem.innerText).toBe(text)
    })
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
    const el = DOMUtils.createElement()
    const attr = jest.fn(() => DOMUtils.setAttributes(el, {
        dataTest: 'test',
        tabIndex: 1,
    }))
    expect(attr().getAttribute('tabIndex'))
        .toBe('1')
    expect(attr().dataset.test)
        .toBe('test')
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
    const el = DOMUtils.createElement()
    const attr = jest.fn(() => DOMUtils.hasAttributes(el, ['test']))
    expect(attr()).toBe(false)
    const attr2 = jest.fn(() => DOMUtils.hasAttributes(DOMUtils.setAttributes(el, { test: true }), ['test']))
    expect(attr2()).toBe(true)
})
test('addChildrenListener', () => {
    /* addChildrenListener */
})