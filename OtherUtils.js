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
export const mouseTouchOffset = event => {

    const type = event.type ? event.type : null;

    const elemBCR = event.currentTarget && !(event.currentTarget instanceof window.constructor) ?
        event.currentTarget.getBoundingClientRect() : {
            x: 0,
            y: 0
        };

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
export const getFirstTouch = ({ touches }) => {

    if(touches && touches[0])
        return touches[0]
    else
        return null

}

export default {
    getInlineTransforms,
    mouseTouchOffset,
    getFirstTouch,
}