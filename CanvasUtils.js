import { createElement } from './DOMUtils'

export const createDOMCanvas = ({...args}) => createElement({
    tag: 'canvas',
    ...args
});
export const CanvasView = class {
    constructor(canvasElem, {...options} = {}) {
        const { root } = options;
        this.DOMElem = canvasElem || CanvasUtils.createDOMCanvas(...options);
        this.root = canvasElem?canvasElem.parentNode:root
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