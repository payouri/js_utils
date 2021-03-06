/** @module OtherUtils */

/**
 * Adds a function to the microtask queue
 * 
 * @param {Function} func 
*/
export const nextTick = func => {
    setTimeout(func, 0)
}

/**
 * Needs to be refactored and tested
 * 
 * @param {Element} HTMLElem 
*/
export const getInlineTransforms = HTMLElem => {
    const transformTypes = [{
        name: 'scale',
        variants: ['X', 'Y', 'Z', '3d'],
    },
    {
        name: 'translate',
        variants: ['X', 'Y', 'Z', '3d'],
    },
    {
        name: 'rotate',
        variants: ['X', 'Y', 'Z', '3d'],
    },
    {
        name: 'skew',
        variants: ['X', 'Y'],
    },
    {
        name: 'perspective',
        variants: [],
    },
    {
        name: 'matrix',
        variants: ['3d'],
    },
    ],
        elemTransformStr = HTMLElem.style.transform.toLowerCase();

    return transformTypes.map(t => {
        const transformModel = {
            name: '',
            transform: {
                X: 0,
                Y: 0,
                Z: 0,
            }
        },
            transformPosition = elemTransformStr.indexOf(t.name);
        transformModel.name = t.name;
        if (transformPosition != -1) {
            let transformVariant = elemTransformStr.charAt(transformPosition + t.name.length).toUpperCase();
            if (transformVariant === '3') transformVariant = '3d';
            if (t.variants.includes(transformVariant) && transformVariant != '3d') {
                transformModel.transform[transformVariant] = elemTransformStr.substring(transformPosition + t.name.length + 2, elemTransformStr.indexOf(')', transformPosition))
            } else if (transformVariant == '3d' && t.name != 'matrix') {
                const transformValues = elemTransformStr.substring(transformPosition + t.name.length + 3, elemTransformStr.indexOf(')', transformPosition));
                let X = Y = Z = 0,
                    unit;
                let valuesArray = StringUtils.replaceAll(transformValues, ' ', '').split(',');
                X = valuesArray[0] ? valuesArray[0] : 0;
                Y = valuesArray[1] ? valuesArray[1] : 0;
                Z = valuesArray[2] ? valuesArray[2] : 0;
                unit = valuesArray[3] ? valuesArray[3] : 0;
                transformModel.transform = {
                    X,
                    Y,
                    Z,
                    unit
                };
            } else {
                const transformValues = elemTransformStr.substring(transformPosition + t.name.length + 1, elemTransformStr.indexOf(')', transformPosition));
                let X = Y = Z = 0;
                if (transformValues.indexOf(',') != -1) {
                    let valuesArray = StringUtils.replaceAll(transformValues, ' ', '').split(',');
                    if (t.name != 'matrix') {
                        X = valuesArray[0] ? valuesArray[0] : 0;
                        Y = valuesArray[1] ? valuesArray[1] : 0;
                        Z = valuesArray[2] ? valuesArray[2] : 0;
                        transformModel.transform = {
                            X,
                            Y,
                            Z
                        };
                    } else {
                        transformModel.transform = valuesArray;
                    }
                } else if (transformValues.length > 0) {
                    if (t.name != 'rotate' && t.name != 'perspective') {
                        X = transformValues;
                        Y = transformValues;
                        Z = 0;
                        transformModel.transform = {
                            X,
                            Y,
                            Z
                        };
                    } else {
                        X = 0;
                        Y = 0;
                        Z = transformValues;
                        transformModel.transform = {
                            X,
                            Y,
                            Z
                        };
                    }
                }
            }
        }
        return transformModel;
    });
}

/**
 * Normalize touch and mouse event x and y.
 * For touch events it only gets touches[0]
 * 
 * @param {Event} event 
*/
export const mouseTouchOffset = event => {

    const elemBCR = event.currentTarget && typeof event.currentTarget.getBoundingClientRect == 'function' ?
        event.currentTarget.getBoundingClientRect() :
        event.target && typeof event.target.getBoundingClientRect == 'function' ?
            event.target.getBoundingClientRect() : {
                x: 0,
                y: 0
            }

    if (event instanceof MouseEvent) {
        return {
            x: event.x - elemBCR.x,
            y: event.y - elemBCR.y,
        }
    } else if (event instanceof TouchEvent) {
        if (event.touches && event.touches[0])
            return {
                x: event.touches[0].clientX - elemBCR.x,
                y: event.touches[0].clientY - elemBCR.y,
            }
        else
            return {
                x: null,
                y: null
            }
    }
}
// touchesPosToArray: event => {
//   if(event instanceof TouchEvent) {
//     const touches = [];
//     if(event.touches.length > 0)
//       console.log(event.touches)
//       for(let touch in event.touches) {
//         console.log(touch);
//       }
//   }
// },
/**
 * Get touches[0] if it is set or returns null otherwise
 * @param {TouchEvent} 
*/
export const getFirstTouch = ({ touches }) => {

    if (touches && touches[0])
        return touches[0]
    else
        return null

}

export default {
    getInlineTransforms,
    mouseTouchOffset,
    getFirstTouch,
    nextTick,
}