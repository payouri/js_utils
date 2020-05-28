/** @module DOMUtils */
import { isObject } from './Validators';
/**
 * @function appendChildren
 * @description Append children element to parent element
 * 
 * @param {HTMLElement} parentEl - parent element
 * @param  {...HTMLElement} children - elements
 * @returns {HTMLElement} parent element
*/
export const appendChildren = (parentEl, ...children) => {
    children.forEach(child => {

        const appendChild = child => {
            if (child instanceof HTMLElement)
                parentEl.appendChild(child);
            else
                throw new TypeError(`${child}, isn't an instance of HTMLElement`);
        }

        if (Array.isArray(child))
            child.forEach(childArrayEl => {
                appendChild(childArrayEl);
            })
        else
            appendChild(child)
    })
    return parentEl;
};

/**
 * @function addListeners
 * @description Even though for simplicity sake you can pass a single string as event
 * I wouldn't recommend doing it as it adds unnecessary overhead
 * @param {HTMLElement|Window} el element to be attached with events needs to implement addEventListener
 * @param {Function} cb event handler function
 * @param {String|String[]} evts array of qualified event names
 * @param {Boolean} bubble 
 *
 * @return {HTMLElement|Window} el
**/
export const addListeners = (el, cb, evts, bubble = false) => {
    if (el && typeof el.addEventListener == 'function')
        if (typeof cb == 'function') {
            if (Array.isArray(evts)) {
                for (let e of evts) {
                    if (typeof e == 'string') {
                        el.addEventListener(e, cb, bubble)
                    }
                }
                return el
            } else if (typeof evts == 'string') {
                el.addEventListener(evts, cb, bubble)
                return el
            } else
                throw new TypeError('Param 3 "evts", is not an array');
        } else
            throw new TypeError('Param 2 "cb", is not a function');
    else
        throw new TypeError('Param 1 "el", is not an instance of HTMLElement');
};

/**
 * @function removeListeners
 * @description Even though for simplicity sake you can pass a single string as event
 * I wouldn't recommend doing it as it adds unnecessary overhead
 * 
 * @param {HTMLElement|Window} el element
 * @param {Function} cb handler reference
 * @param {String|String[]} evts array of events
 * @param {Boolean} bubble
 *
 * @return {HTMLElement|Window} void
**/
export const removeListeners = (el, cb, evts, bubble = false) => {
    bubble = !!bubble
    if (el && typeof el.removeEventListener == 'function')
        if (typeof cb == 'function') {
            if (Array.isArray(evts)) {
                for (let e of evts) {
                    if (typeof e == 'string') {
                        el.removeEventListener(e, cb, bubble);
                    }
                }
                return el
            } else if (typeof evts == 'string') {
                el.removeEventListener(evts, cb, bubble);
                return el
            } else
                throw new TypeError('Param 3 "evts", is not an array')
        } else
            throw new TypeError('Param 2 "cb", is not a function')
    else
        throw new TypeError('Param 1 "el", is not an instance of HTMLElement');
};
/**
 * @typedef {Object} createElementOptions
 * @property {String} [tag=div] - type of the element to create, defaults to div
 * @property {Object.<string, any>} [attributes] 
 * @property {Object.<string, any>} [styles] 
 * @property {String} [text] 
 * @property {String} [html] 
 * @property {String|String[]} [classes] 
*/
/**
 * @function createElement
 * @description Create a new HTMLElement
 * @param {createElementOptions} options - descriptor the newly created element
 * @return {HTMLElement} instance of HTMLElement
**/
export const createElement = ({ html, text, classes, attributes, styles, tag } = {}) => {
    // let { tag } = rest;
    if (!tag || typeof tag != 'string')
        tag = 'div';

    const elem = document.createElement(tag);

    if (typeof attributes == 'string' || isObject(attributes)) {
        setAttributes(elem, attributes);
    }
    if (typeof styles == 'string' || isObject(styles)) {
        setStyles(elem, styles);
    }
    if (typeof classes == 'string' || Array.isArray(classes)) {
        setClasses(elem, classes);
    }

    if (typeof text != 'undefined')
        elem.innerText = text;
    if (typeof html != 'undefined')
        elem.innerHTML = html;

    return elem
};
/**
 * @function getBoundEvents
 * @description Returns every event properties bound to an handler
 * 
 * @param {HTMLElement} el element
 *
 * @return {Object.<string, Function} every event bound to el through ".onEvent" properties
**/
export const getBoundEvents = el => {
    if (el instanceof HTMLElement || el == window.constructor) {
        const obj = {};
        for (let prop in el) {
            if (prop.substring(0, 2) == 'on' && typeof el[prop] == 'function')
                obj[prop] = el[prop];
        }
        return obj
    }
};
/**
 * @function isChildrenOfn
 * @deprecated better directly using native method HTMLElement.contains
 * @param {HTMLElement} childNode 
 * @param {HTMLElement} parentNode 
*/
export const isChildrenOf = (childNode, parentNode) => {
    return parentNode.contains(childNode);
};
/**
 * @function moveNode
 * @description Change element parent
 * 
 * @param {HTMLElement} el element to move
 * @param {HTMLElement} newParent new parent element
 * 
 * @returns {HTMLElement} element
*/
export const moveNode = (el, newParent) => {
    if (el instanceof HTMLElement) {
        if (newParent instanceof HTMLElement) {
            if (!newParent.contains(el)) {
                if (el.parentNode) {
                    el.parentNode.removeChild(el);
                }
                newParent.appendChild(el);
            }
            return el
        } else
            throw new TypeError('Param 2 "newParent", is not an instance of HTMLElement');
    } else
        throw new TypeError('Param 1 "el", is not an instance of HTMLElement');
};

/**
 * @function setClasses
 * @description Adds an array of classes to an element
 * 
 * @param {HTMLElement} el element
 * @param {String[]} classes classes to be set
 *
 * @return {HTMLElement} element
**/
export const setClasses = (el, classes) => {
    if (el && el.classList instanceof DOMTokenList) {
        if (Array.isArray(classes)) {
            if (el.classList.length == 0) {
                el.classList = classes.join(' ');
            }
            else {
                for (let c of classes) {
                    if (typeof c == 'string')
                        el.classList.add(c);
                }
            }
        } else if (typeof classes == 'string') {
            el.classList += `${el.classList.length > 0 ? ' ' : ''}${classes}`;
        }
        return el;
    } else
        throw new TypeError('Param 1 "el", doesn\'t implement classList as DOMTokenList');
};

/**
 * @function removeClasses
 * @description Remove classes from element.classList
 * 
 * @param {HTMLElement} el element
 * @param {String[]|"all"} classes classes to be unset
 * 
 * @returns {HTMLElement} element
*/
export const removeClasses = (el, classes) => {
    if (el && el.classList instanceof DOMTokenList) {
        if (Array.isArray(classes)) {
            for (let s in classes) {
                el.classList.remove(s);
            }
        } else if (classes = 'all') {
            el.classList = '';
        }
        return el;
    } else
        throw new TypeError('Param 1 "el", doesn\'t implement classList as DOMTokenList');
};
/**
 * @function setAttributes
 * @description Set element attributes
 * 
 * @param {HTMLElement} el - element
 * @param {Object.<string, any>} attrs - attributes to set
 *
 * @return {HTMLElement} element
**/
export const setAttributes = (el, attrs) => {
    if (el && el.attributes instanceof NamedNodeMap) {
        for (let attr in attrs) {
            if (attr.substring(0, 4) != 'data')
                el.setAttribute(attr, attrs[attr]);
            else
                el.dataset[attr[4].toLowerCase() + attr.substring(5)] = attrs[attr];
        }
        return el;
    } else
        throw new Error('Param 1 "el", doesn\'t implement attributes as NamedNodeMap');
};

/** 
 * @function getAttributes
 * @description Get attributes of an element
 *  
 * @param {HTMLElement} el
 * @param {String[]} attrs attributes to get
 * 
 * @returns {Object.<string, any>} attribute/value object
**/
export const getAttributes = (el, attrs) => {
    if (el && el.attributes instanceof NamedNodeMap) {
        const obj = {};
        for (let attr of attrs) {
            obj[attr] = el.attributes[attr];
        }
        return obj;
    } else
        throw new Error('Param 1 "el", doesn\'t implement attributes as NamedNodeMap');
};

/**
 * @function removeAttributes
 * @description Remove attributes from an element
 * 
 * @param {HTMLElement} el element
 * @param {String[]|"all"} attrs attributes to be unset
 *
 * @return {HTMLElement} element
**/
export const removeAttributes = (el, attrs) => {
    if (el && el.attributes instanceof NamedNodeMap) {
        if (Array.isArray(attrs)) {
            for (const attr of attrs) {
                if (typeof attr == 'string')
                    el.removeAttribute(attr)
            }
            return el
        }
        else if (attrs === 'all') {
            for (const attr of el.attributes) {
                if (attr.name != 'class' && attr.name != 'style') {
                    el.removeAttribute(attr.name);
                }
            }
            return el
        } else
            throw new TypeError('Param 2 "attrs", is not an array or "all"')
    } else
        throw new TypeError('Param 1 "el", doesn\'t implement attributes as NamedNodeMap')
};

/**
 * @function setDataAttributes
 * @description Set data- attributes of an element
 * 
 * @param {HTMLElement} el element
 * @param {Object.<string, string>} attrs data- attributes to be set
 *
 * @return {HTMLElement} element
**/
export const setDataAttributes = (el, attrs) => {
    if (el && el.dataset instanceof DOMStringMap) {
        for (let attr in attrs) {
            el.dataset[attr] = attrs[attr];
        }
        return el
    } else
        throw new TypeError('Param 1 "el", doesn\'t implement dataset as DOMStringMap');
};

/**
 * @function removeDataAttributes
 * @description Remove data- attributes from an element
 * 
 * @param {HTMLElement} el element
 * @param {Object.<string, string>} attrs data- attributes to be removed
 *
 * @return {HTMLElement} element
**/
export const removeDataAttributes = (el, attrs) => {
    typeof attrs == 'string' ? attrs = [attrs] : attrs;
    if (el && el.dataset instanceof DOMStringMap) {
        if (Array.isArray(attrs)) {
            for (let attr of attrs) {
                el.removeAttribute(`data-${attr}`)
            }
            return el
        } else
            throw new TypeError('Param 2 "attrs", is not an array');
    } else
        throw new TypeError('Param 1 "el", doesn\'t implement dataset as DOMStringMap');
};

/**
 * @typedef {Object} CSSPropertyObject
 * @property {String|Number} value property value
 * @property {"important"|""} priority css property priority
*/
/**
 * @function setProperties
 * @description Set custom properties of an element
 * 
 * @param {HTMLElement} el element
 * @param {Object.<string, (String|Number)>|Object.<string, CSSPropertyObject>} props custom properties to be set
 * 
 * @returns {HTMLElement} element
*/
export const setProperties = (el, props) => {
    if (el && el.style instanceof CSSStyleDeclaration) {
        for (let prop in props) {
            if (typeof props[prop] == 'object')
                el.style.setProperty(`--${prop}`, props[prop].value, props[prop].priority)
            else
                el.style.setProperty(`--${prop}`, props[prop])
        }
        return el
    } else
        throw new TypeError('Param 1 "el", doesn\'t implement style as CSSStyleDeclaration');
};

/**
 * @function removeProperties
 * @description Remove custom properties of an element
 *  
 * @param {HTMLElement} el element
 * @param {String|String[]} props array of custom properties to unset
 * 
 * @returns {HTMLElement} element
*/
export const removeProperties = (el, props) => {
    if (el && el.style instanceof CSSStyleDeclaration) {
        if (Array.isArray(props)) {
            for (let prop of props) {
                if (typeof prop == 'string')
                    el.style.removeProperty(`--${prop}`);
            }
        } else if (typeof props == 'string') {
            el.style.removeProperty(`--${props}`);
        }
        return el
    } else
        throw new TypeError('Param 1 "el", doesn\'t implement style as CSSStyleDeclaration');
};

/**
 * @function setStyles
 * @description Set inline styles of an element
 * 
 * @param {HTMLElement} el element 
 * @param {Object.<string, (String|Number)>} styles inline styles to apply
 *
 * @return {HTMLElement} element
**/
export const setStyles = (el, styles) => {
    if (el && el.style instanceof CSSStyleDeclaration) {
        for (let s in styles) {
            if (el.style[s] != undefined) {
                el.style[s] = styles[s];
            }
        }
        return el
    } else
        throw new TypeError('Param 1 "el", doesn\'t implement style as CSSStyleDeclaration');
};

/**
 * @function removeStyles
 * @description Unset inline styles of an element
 * 
 * @param {HTMLElement} el element
 * @param {String[]|"all"} styles inline styles to be removed
 *
 * @return {HTMLElement} element
**/
export const removeStyles = (el, styles) => {
    if (el && el.style instanceof CSSStyleDeclaration) {
        if (Array.isArray(styles)) {
            for (let s of styles) {
                if (el.style[s] != undefined) {
                    el.style[s] = null;
                }
            }
        } else if (styles === 'all') {
            Object.keys(el.style).filter(s => {
                if (el.style[s] && isNaN(Number(s)))
                    el.style[s] = null;
            })
        }
        return el
    } else
        throw new TypeError('Param 1 "el", doesn\'t implement style as CSSStyleDeclaration');
};

/**
 * @function wrapNode
 * @description Wrap a node in a created element, returns wrapper
 * 
 * @param {HTMLElement} el element to be wrapped
 * @param {createElementOptions} options definitions for the created wrapper element
 * 
 * @returns {HTMLElement} newly created wrapper element with element as children
*/
export const wrapNode = (el, options) => {
    if (el instanceof HTMLElement) {
        const wrap = createElement(options);
        el.parentNode.replaceChild(wrap, el);
        wrap.appendChild(el);
        return wrap;
    }
    else
        throw new TypeError('TypeError: Param 1 "el", is not an instance of HTMLElement');
};

/**
 * @function findElements
 * @description Find elements matching predicate object properties
 * Needs at least one of id, tag, classes, attributes prop to be valid
 * 
 * @param {Object} predicate object
 * @param {HTMLElement|Document} [predicate.root=Document]
 * @param {String} predicate.id matches #id
 * @param {String} predicate.tag matches <tag />
 * @param {String[]} predicate.classes matches .classes
 * @param {String[]} predicate.attributes matches [attr]
 * 
 * @returns {Element[]} elements matching predicate
*/
export const findElements = ({ root, id, tag, classes, attributes,  }) => {
    try {
        if(!root || typeof root.querySelectorAll != 'function')
            root = document
        if(typeof tag != 'string')
            tag = ''
        if(Array.isArray(classes))
            classes = `.${classes.join('.')}`
        else
            classes = ''
        if(Array.isArray(attributes))
            attributes = attributes.map(attr => `[${attr}]`).join('')
        else
            attributes = ''
        if(typeof id == 'string')
            id = '#' + id
        else
            id = ''
        return Array.from(root.querySelectorAll(`${tag}${id}${classes}${attributes}`))
    } catch(err) {
        throw SyntaxError('predicate needs to have at least one valid field')
    }
};

/**
 * @function hasClasses
 * @description Returns true if element matches all classes in array
 * 
 * @param {HTMLElement} targetEl element
 * @param {String|String[]} classes classes to be tested
 * 
 * @returns {Boolean} true if element has classes
 */
export const hasClasses = (targetEl, classes) => {
    if (Array.isArray(classes))
        return classes.reduce((acc, val) => acc && targetEl.classlist.contains(val), true);

    else if (typeof classes == 'string')
        return targetEl.classlist.contains(classes);
};

/**
 * @function hasAttributes
 * @description Returns true if element matches all attributes in array
 * 
 * @param {HTMLElement} targetEl element
 * @param {String|String[]} attributes attributes to be tested
 * 
 * @returns {Boolean} true if element has attributes
*/
export const hasAttributes = (targetEl, attributes) => {

    if (Array.isArray(attributes))
        return attributes.reduce((acc, val) => acc && targetEl.hasAttribute(val), true);

    else if (typeof attributes == 'string')
        return targetEl.hasAttribute(attributes);

};

/**
 * @function addChildrenListener
 * @description bind event listener to a parent 
 * 
 * @param {HTMLElement|Document|Window} parentEl 
 * @param {String} childrenSelector 
 * @param {String[]} events 
 * @param {Function} handler 
 * @param {Boolean} bubble 
 */
export const addChildrenListener = (parentEl, childrenSelector, events, handler, bubble) => {
    if (parentEl instanceof HTMLElement) {


        // const { id, classes, attributes, tag, } = typeof childrenSelector == 'object' ? childrenSelector : {};


        const handlerWrapper = eventObject => {

            const { target } = eventObject

            const desiredTarget = target.closest(childrenSelector)
            // if(typeof childrenSelector == 'string' && )
            // return

            const wantedEvent = new Proxy(eventObject, {
                get: function (e, prop) {
                    if (prop == 'target')
                        return desiredTarget;
                    else
                        return e[prop];
                }
            })

            if (desiredTarget) {

                typeof handler == 'function' && handler(wantedEvent);

            }
        }

        addListeners(parentEl, handlerWrapper, events, true);

    }
    else
        throw new TypeError('Param 1 "parentEl", is not an instance of HTMLElement');
};

/** 
 * @function attachEvts
 * @description alias for DOMUtils.addListeners function
 * @see {@link DOMUtils.addListeners}
*/
export const attachEvts = addListeners

/** 
 * @function detachEvts
 * @description alias for DOMUtils.removeListeners function
 * @see {@link DOMUtils.removeListeners}
*/
export const detachEvts = removeListeners

export default {
    appendChildren,
    attachEvts: addListeners,
    addListeners,
    detachEvts: removeListeners,
    removeListeners,
    createElement,
    getBoundEvents,
    isChildrenOf,
    moveNode,
    setClasses,
    removeClasses,
    setAttributes,
    getAttributes,
    removeAttributes,
    setDataAttributes,
    removeDataAttributes,
    setProperties,
    removeProperties,
    setStyles,
    removeStyles,
    wrapNode,
    findElements,
    hasClasses,
    hasAttributes,
    addChildrenListener,
}