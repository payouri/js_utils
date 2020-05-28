/** @module CanvasUtils */
import { createElement } from './DOMUtils'

/**
 * 
 * @param {Create} args 
 */
export const createDOMCanvas = args => createElement({
    tag: 'canvas',
    ...args
});
export const CanvasView = class {
    constructor(canvasElem, { root, context = '' } = {}) {
        
        this._DOMElem = canvasElem || CanvasUtils.createDOMCanvas(...options);
        this._ctx = this._DOMElem.getContext(context ? context : '2d')
        this._root = root ? root : this._DOMElem.parentNode

    }
    get DOMElem() {
        return this._DOMElem;
    }
    get root() {
        return this._root;
    }
    set DOMElem(el) {
        if(el instanceof HTMLCanvasElement)
          this._DOMElem = el;
    }
    set root(el) {
        if(el instanceof HTMLElement)
          this._root = el;
    }
    render() {
        
    }
}

export default {
    CanvasView,
    createDOMCanvas,
}