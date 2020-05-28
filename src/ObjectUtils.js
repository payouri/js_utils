/** @module ObjectUtils */
import { isObject } from './Validators'
/**
 * @function hasProperties
 * @description Tell whatever a list of property are set on an object
 * 
 * @param {Object} obj 
 * @param {Array} propArray list of props to check
 * 
 * @returns {Boolean} true if all props listed in propArray are set on the object
*/
export const hasProperties = function (obj, propArray) {
    return propArray.reduce((acc, prop) => acc && Object.prototype.hasOwnProperty.call(obj, prop), true);
};
/**
 * @function getDiffs
 * @description Iterates over an object and check for diffing properties
 * /!\ Only diffing fields from o2 will be in return
 * 
 * @param {Object} o1 object to compare
 * @param {Object} o2 object to compare
 * 
 * @returns {Object} contains differences between the two entries
 */
export const getDiffs = function (o1, o2) {
    return Object.keys(o2).reduce((diff, key) => {
        if (o1[key] === o2[key]) return diff
        return {
            ...diff,
            [key]: o2[key]
        }
    }, {})
};
/**
 * @function mergeDeep
 * @description Merges two objects recursively.
 * Fields present on both target and 
 * source will be merge or overwritten for scalar fields 
 * 
 * @param {Object} target 
 * @param {Object} source 
 * 
 * @returns {Object} object with deeply merged properties
 */
export const mergeDeep = (target, source) => {
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target))
                    Object.assign(output, {
                        [key]: source[key]
                    });
                else if(isObject(target[key]))
                    output[key] = mergeDeep(target[key], source[key]);
                else 
                    Object.assign(output, {
                        [key]: source[key]
                    });
            } else {
                Object.assign(output, {
                    [key]: source[key]
                });
            }
        });
    }
    return output;
};

/**
 *  
*/
export default {
    hasProperties,
    getDiffs,
    mergeDeep,
}