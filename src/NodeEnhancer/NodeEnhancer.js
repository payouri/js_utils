/** @module NodeEnhancer */

import {
    appendChildren,
    wrapNode,
    addListeners,
    removeListeners,
    setAttributes,
    setClasses,
    setStyles,
    setProperties,
    removeAttributes,
    removeClasses,
    removeStyles,
    removeProperties,
    findElements,
    setDataAttributes,
    removeDataAttributes,
    hasAttributes,
    hasClasses,
    moveNode,
    getAttributes,

} from '../DOMUtils.js'


const utils = {
    appendChildren,
    wrapNode,
    addListeners,
    removeListeners,
    setAttributes,
    removeAttributes,
    setClasses,
    removeClasses,
    setStyles,
    removeStyles,
    setProperties,
    removeProperties,
    setDataAttributes,
    removeDataAttributes,
}
/**
 * @typedef {Array} ExtraElementsArray
 * @description array with extra props set
 * @deprecated
 * 
 * @property {Function} appendChildren
 * @property {Function} wrapNode
 * @property {Function} addListeners
 * @property {Function} removeListeners
 * @property {Function} setAttributes
 * @property {Function} removeAttributes
 * @property {Function} setClasses
 * @property {Function} removeClasses
 * @property {Function} setStyles
 * @property {Function} removeStyles
 * @property {Function} setProperties
 * @property {Function} removeProperties
 * @property {Function} setDataAttributes
 * @property {Function} removeDataAttributes
*/

/** 
 * @type {Object.<string, function>}
 * @description created to later be assigned through Object.setProperties 
 * @private
 * @constant
 * @deprecated
*/
const extraElementDescriptor = {};
for (let util in utils) {
    extraElementDescriptor[util] = {
        value: function (...args) {
            callForEachElem(this, utils[util], ...args)
            return this
        }
    }
}

/**
 * @function callForEachElem
 * @private
 * @constant
 * @description Call a function for each elements in an array
 *  
 * @param {Element[]} array array of element for which to call func
 * @param {Function} func this function receive an array element as first parameter, then ...args 
 * @param  {...any} args additional parameters to pass to func
 * 
 * @returns {Array} array parameter
*/
const callForEachElem = (array, func, ...args) => {
    for (let i = 0, n = array.length; i < n; i++) {
        func(array[i], ...args)
    }
    return array
}

/**
 * @function extra
 * @description Create an Instance of Extra
 * @public
 * @constant
 * @param {Element|Element[]|String} nodes can either be a selector string or a/some Element type object
 * 
 * @returns {Extra} Extra Wrapper Instance
 * @example
 * // with selector string
 * // return ExtraInstance
 * extra('.menu .link')
*/
export const extra = nodes => {
    if (typeof nodes == 'string') {
        nodes = document.querySelectorAll(nodes)
    }
    if (!Array.isArray(nodes)) nodes = Array.from(nodes)
    return new Extra(nodes)
}
/**
 * @function e
 * @constant
 * @public
 * @description alias of {@link #extra} function
 * 
*/
export const e = extra

export default e

/** 
 * @description Extra is a wrapper a la jQuery that allows to modify dom element through DOMUtils superset of the DOM API 
*/
export class Extra extends Array {
    /**
     * @constructor
     * @param  {...Element} [elements] Initial selection of Elements
     * @example
     * new Extra(document.querySelectorAll('.menu .link'))
    */
    constructor(...elements) {
        super(...elements)
        this.appendChildren = this.appendChildren.bind(this)
        this.wrapNode = this.wrapNode.bind(this)
        this.addListeners = this.addListeners.bind(this)
        this.removeListeners = this.removeListeners.bind(this)
        this.setAttributes = this.setAttributes.bind(this)
        this.removeAttributes = this.removeAttributes.bind(this)
        this.setClasses = this.setClasses.bind(this)
        this.removeClasses = this.removeClasses.bind(this)
        this.setStyles = this.setStyles.bind(this)
        this.removeStyles = this.removeStyles.bind(this)
        this.setProperties = this.setProperties.bind(this)
        this.removeProperties = this.removeProperties.bind(this)
        this.setDataAttributes = this.setDataAttributes.bind(this)
        this.removeDataAttributes = this.removeDataAttributes.bind(this)
    }
    /**
     * @description Adds children to the FIRST selected Elements.
     * @param {...Element} args 
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    appendChildren(...args) { appendChildren(this[0], ...args); return this }
    /**
     * @description Wraps selected Elements in a new Element.
     * 
     * @param {import('../DOMUtils.js').createElementOptions} options options object for the freshly created wrappers
     * @param {module:DOMUtils.createElementOptions} options options object for the freshly created wrappers
    */
    wrapNode(options) { callForEachElem(this, wrapNode, options); return this }
    /**
     * @description Adds listeners to each selected Elements.
     * 
     * @param {Function} fun handler function
     * @param {String|String[]} events
     * @param {Boolean} bubble
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    addListeners(fun, events, bubble) { callForEachElem(this, addListeners, fun, events, bubble); return this }
    /**
     * @description Removes listeners from each selected Elements.
     * 
     * @param {Function} fun
     * @param {String|String[]} events
     * @param {Boolean} bubble
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    removeListeners(fun, events, bubble) { callForEachElem(this, removeListeners, fun, events, bubble); return this }
    /**
     * @description Set attributes of each selected Elements.
     * 
     * @param {Object.<string, (String|Number)>} attributes
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    setAttributes(attributes) { callForEachElem(this, setAttributes, attributes); return this }
    /**
     * @description Removes attributes of each selected Elements.
     * 
     * @param {String[]} attributes
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    removeAttributes(attributes) { callForEachElem(this, removeAttributes, attributes); return this }
    /**
     * @param {String[]} classes 
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    setClasses(classes) { callForEachElem(this, setClasses, classes); return this }
    /**
     * @param {String[]} classes 
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    removeClasses(classes) { callForEachElem(this, removeClasses, classes); return this }
    /**
     * @param {Object.<string, (String|Number)>} styles 
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    setStyles(styles) { callForEachElem(this, setStyles, styles); return this }
    /**
     * @param {Object.<string, (String|Number)>} styles 
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    removeStyles(styles) { callForEachElem(this, removeStyles, styles); return this }
    /** 
     * @param {Object.<string, (String|Number)>} customProperties
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    setProperties(customProperties) { callForEachElem(this, setProperties, customProperties); return this }
    /** 
     * @param {Object.<string, (String|Number)>} customProperties
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    removeProperties(customProperties) { callForEachElem(this, removeProperties, customProperties); return this }
    /**
     * @param {Object.<string, (String|Number)>} attributes
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    setDataAttributes(attributes) { callForEachElem(this, setDataAttributes, attributes); return this }
    /**
     * @param {String[]} attributes
     * 
     * @returns {Extra} Extra Wrapper Instance
    */
    removeDataAttributes(attributes) { callForEachElem(this, removeDataAttributes, attributes); return this }
    /**
     * @description Return an object with attributes set on the FIRST selected Element
     * @param {String[]} attributes 
     * 
     * @returns {Object.<string, (string|null)>} attributes set as key/values
     */
    getAttributes(attributes) { return getAttributes(this[0], attributes) }
}