/**
 * 
 * @param {HTMLElement} parentEl 
 * @param  {HTMLElement|HTMLElement[]} children 
 */
export const appendChildren = (parentEl, ...children) => {
      children.forEach(child => {
        
        const appendChild = child => {        
          if(child instanceof HTMLElement)
            parentEl.appendChild(child);
          else
            console.warn(child, ', isn\'t an instance of HTMLElement');
        }
        
        if(Array.isArray(child))
          child.forEach(childArrayEl => {
            appendChild(childArrayEl);
          })
        else
          appendChild(child)
      })
      return parentEl;
};

/**
* @param {Node} el Node
* @param {Function} cb 
* @param {Array} evts 
* @param {Boolean} bubble 
*
* @return el
**/
export const attachEvts = (el, cb, evts, bubble = false) => {
    if(el instanceof HTMLElement || el instanceof window.constructor)
        if(typeof cb == 'function') {
            if(Array.isArray(evts)) {
                for(let e of evts) {
                    if(typeof e == 'string')
                    el.addEventListener(e, cb, bubble);
                    return el;
                }
            } else if(typeof evts == 'string') {
                el.addEventListener(evts, cb, bubble);
                return el;
            } else
                throw new TypeError('Param 3 "evts", is not an array');
        } else
            throw new TypeError('Param 2 "cb", is not a function');
    else
        throw new TypeError('Param 1 "el", is not an instance of HTMLElement');
};

/**
* @param el: Node
* @param cb: Function
* @param evts: Array
* @param bubble: Boolean
*
* @return void
**/
export const detachEvts = (el, cb, evts, bubble = false) => {
    
    if(bubble) bubble = true;
    else bubble = false;

    if(el instanceof HTMLElement || el instanceof window.constructor)
        if(typeof cb == 'function') {
            if(Array.isArray(evts)) {
                for(let e of evts) {
                    if(typeof e == 'string') {
                        el.removeEventListener(e, cb, bubble);
                    }
                }
                return el
            } else if(typeof e == 'string') {
                el.removeEventListener(e, cb, bubble);
                return el
            } else 
                throw new TypeError('Param 3 "evts", is not an array')
        } else
            throw new TypeError('Param 2 "cb", is not a function')  
    else
        throw new TypeError('Param 1 "el", is not an instance of HTMLElement');
};

/**
* @param options: {attributes: object, styles: object, classes: string[]}
* @return instance of HTMLElement
**/
export const createElement = ({text = '', classes = [], attributes = {}, styles = {}, ...rest} = {}) => {
    let { tag } = rest;
      
    if(!tag || typeof tag != 'string' )
        tag = 'div';
      
    const elem = document.createElement(tag);
      
    if(typeof attributes == 'string'|| Object.entries(attributes).length > 0) {
        setAttributes(elem, attributes);
    }
    if(typeof styles == 'string' || Object.entries(styles).length > 0) {
        setStyles(elem, styles);
    }
    if(classes.length > 0) {
        setClasses(elem, classes);
    }
      
    elem.innerHTML = text;
      
    return elem
};
/**
* @param el: Node
*
* @return obj
**/
export const getBoundEvents = el => {
    if(el instanceof HTMLElement) {
        const obj = {};
        for(let prop in el) {
            if(prop.substring(0, 2) == 'on' && el[prop] != null)
                obj[prop] = el[prop];
        }
        return obj;
    }
};

export const isChildrenOf = (childNode, parentNode)  => {
    return parentNode.contains(childNode);
};

/**
* @param el Node
* @param newParent Node
*/
export const moveNode = (el, newParent) => {
    if(el instanceof HTMLElement) 
        if(newParent instanceof HTMLElement) {
            if(!newParent.contains(el)) {
                if(el.parentNode) 
                    el.parentNode.removeChild(el);
                newParent.appendChild(el);
            }
            return el
        } else
            throw new TypeError('Param 2 "newParent", is not an instance of HTMLElement');  
    else
        throw new TypeError('Param 1 "el", is not an instance of HTMLElement');
};

/**
* @param el: Node
* @param classes: string[];
*
* @return void
**/
export const setClasses = (el, classes = []) => {
    if(el instanceof HTMLElement || el instanceof SVGElement) {
        if(Array.isArray(classes)) {
            if(el.classList.length == 0) {
                el.classList = classes.join(' ');
            }
            else {
                for(let c of classes) {
                    if(typeof c == 'string')
                        el.classList.add(c);
                }
            }
        } else if(typeof classes == 'string') {
            el.classList += `${el.classList.length>0?' ':''}${classes}`;  
        }
        return el;
    } else
        throw new Error('Param 1 "el", is not an instance of HTMLElement');
};

/**
*  @param {HTMLElement} el  
*  @param {String[]} classes
*/
export const removeClasses = (el, classes) => {
    if(el instanceof HTMLElement || el instanceof SVGElement)
        if(Array.isArray(classes)) {
            for(let s in classes) {
                el.classList.remove(s);
            }
            return el;
        } else if(classes = 'all') {
            el.classList = '';
            return el;
        } else 
          throw new TypeError('Param 2 "classes", is not an array')
    else
        throw new TypeError('Param 1 "el", is not an instance of HTMLElement');
};
    /**
    * @param el: Node
    * @param attrs: Object
    *
    * @return void
    **/
export const setAttributes = (el, attrs = {}) => {
    if(el instanceof HTMLElement || el instanceof SVGElement) {
        for(let attr in attrs) {
            if(attr.substring(0, 4) != 'data')
                el.setAttribute(attr, attrs[attr]);
            else 
                el.dataset[attr[4].toLowerCase() + attr.substring(5)] = attrs[attr];
        }
        return el;
    } else
        throw new Error('Param 1 "el", is not an instance of HTMLElement');
};

/** getAttributes 
*
*
**/
export const getAttributes = (el, attrs) => {
    if(el instanceof HTMLElement || el instanceof SVGElement) {
        const obj = {};
        for(let attr of attrs) {
            obj[attr] = el.attributes[attr];
        }
        return obj;
    } else
        throw new Error('Param 1 "el", is not an instance of HTMLElement');
};

/**
* @param el
* @param attrs
*
* @return void
**/
export const removeAttributes = (el, attrs) => {
    if(el instanceof HTMLElement)
        if(Array.isArray(attrs)) {
            for(let attr of attrs) {
                if(typeof attr == 'string')
                    el.removeAttribute(attr)
            }
            return el
        } 
        else if(attrs == 'all') {
            for(let attr of el.attributes) {
                if(attr.name != 'class' && attr.name != 'style') {
                    el.removeAttribute(attr.name);
                }
            }
            return el
        } else
            throw new Error('TypeError: Param 2 "attrs", is not an array')
    else
        throw new Error('TypeError: Param 1 "el", is not an instance of HTMLElement')
};

/**
* @param el: Node
* @param attrs: Object
*
* @return void
**/
export const setDataAttributes = (el, {...attrs}) => {
    if(el instanceof HTMLElement)
        for(let attr in attrs) {
            el.dataset[attr] = attrs[attr];
        }
    else
        throw new Error('Param 1 "el", is not an instance of HTMLElement');
};

/**
* @param el: Node
* @param attrs: string[]
*
* @return void
**/
export const removeDataAttributes = (el, attrs) => {
    typeof attrs == 'string' ? attrs = [attrs]:attrs;
    if(el instanceof HTMLElement)
        if(Array.isArray(attrs))
            for(let attr of attrs) {
                if(el.dataset[attr]) {
                    el.removeAttribute(['data-' + attr]);
                }
        }
        else
            throw new Error('Param 2 "attrs", is not an array');
    else
        throw new Error('Param 1 "el", is not an instance of HTMLElement');
};

export const setProperties = (el, {...props}) => {
    if(el instanceof HTMLElement)
        for(let prop in props) {
            el.style.setProperty(`--${prop}`, props[prop].value?props[prop].value:'', props[prop].priority?props[prop].priority:undefined);
        }
};

export const removeProperties = (el, props) => {
    if(el instanceof HTMLElement)
        if(Array.isArray(props))
            for(let prop of props) {
                if(typeof prop == 'string')
                    el.style.removeProperty(`--${prop}`);
            }
        else if(typeof props == 'string')
            el.style.removeProperty(`--${props}`);
};

/**
* @param el: Node
* @param attrs: Object
*
* @return void
**/
export const setStyles = (el, {...styles} = {}) => {
    if(el instanceof HTMLElement || el instanceof ShadowRoot)
        for(let s in styles) {
            if(el.style[s] != undefined) {
                el.style[s] = styles[s];
            }
        }
    else
        throw new TypeError('Param 1 "el", is not an instance of HTMLElement');
};

    /**
    * @param el: Node
    * @param styles: string[]
    *
    * @return void
    **/
export const removeStyles = (el, styles) => {
    if(el instanceof HTMLElement)
        if(Array.isArray(styles))
            for(let s of styles) {
                if(el.style[s] != undefined) {
                el.style[s] = '';
                }
            }
        else if(styles == 'all') {
            Object.keys(el.style).filter(s => {
                if(el.style[s] && isNaN(Number(s)))
                    el.style[s] = '';
            })
          // for(let s in el.style) {
          // }
          // el.styles.map(s => {
          //   typeof s != 'undefined'?s='':s;
          // });
        }
        else 
            throw new Error('TypeError: Param 2 "styles", is not an array')
    else
        throw new Error('TypeError: Param 1 "el", is not an instance of HTMLElement');
};

    /**
    *  
    *
    **/
export const wrapNode = (el, {...options} = {}) => {
    if(el instanceof HTMLElement) {
        
        const wrap = createElement({...options});
        el.parentNode.replaceChild(wrap, el);
        wrap.appendChild(el);
        return wrap;
        
    }
    else
        throw new Error('TypeError: Param 1 "el", is not an instance of HTMLElement');
};

export const parseSelector = selectorString => {
      
};

export const hasClasses = (targetEl, classes) => {
      
    if(Array.isArray(classes))
        return classes.reduce((acc, val) => acc && targetEl.classlist.contains(val), true);
      
    else if(typeof classes == 'string')
        return targetEl.classlist.contains(classes);
      
};

export const hasAttributes = (targetEl, attributes) => {
      
    if(Array.isArray(attributes))
        return attributes.reduce((acc, val) => acc && targetEl.hasAttribute(val), true);
      
    else if(typeof attributes == 'string')
        return targetEl.hasAttribute(attributes);
      
};

export const addChildrenListener = (parentEl, childrenSelector, events, handler, bubble) => {
    if(parentEl instanceof HTMLElement) {
        
        
        // const { id, classes, attributes, tag, } = typeof childrenSelector == 'object' ? childrenSelector : {};
        
        
        const handlerWrapper = eventObject => {
          
          // eventObject.stopPropagation();
          
          const { target } = eventObject;
          
          
  //         console.log(eventObject);
          
  //         // console.log(tag && target.nodeName !== tag.toUpperCase());
  //         if(tag && target.nodeName !== tag.toUpperCase())
  //           return;
          
  //         // console.log(id && target.id !== id);
  //         if(id && target.id !== id)
  //           return;
             
  //         // console.log(!hasClasses(target, classes));
  //         if(classes && !hasClasses(target, classes))
  //           return;
          
  //         // console.log(!hasAttributes(target, attributes))
  //         if(attributes && !hasAttributes(target, attributes))
  //           return;
          
  //         if(typeof childrenSelector == 'string' && !target.matches(childrenSelector))
  //           return
          
          const desiredTarget = target.closest(childrenSelector)
          // if(typeof childrenSelector == 'string' && )
            // return
          
          const wantedEvent = new Proxy(eventObject, {
            get: function(e, prop) {
              if(prop == 'target')
                return desiredTarget;
              else
                return e[prop];
            }
          })
          
          if(desiredTarget) {
           
            typeof handler == 'function' && handler(wantedEvent); 
            
          }        
        }
        
        attachEvts(parentEl, handlerWrapper, events, true);
        
      }
      else
        throw new TypeError('Param 1 "parentEl", is not an instance of HTMLElement');
};

export default {
    appendChildren,
    addListeners: attachEvts,
    attachEvts,
    removeListeners: detachEvts,
    detachEvts,
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
    parseSelector,
    hasClasses,
    hasAttributes,
    addChildrenListener,
}