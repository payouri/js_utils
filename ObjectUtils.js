export const hasProperties = function (obj, propArray) {
    return propArray.reduce((acc, prop) => acc && obj.hasOwnProperty(prop), true);
};
export const getDiffs = function (o1, o2) {
    return Object.keys(o2).reduce((diff, key) => {
        if (o1[key] === o2[key]) return diff
        return {
            ...diff,
            [key]: o2[key]
        }
    }, {})
};
export const mergeDeep = (target, source) => {
    let output = Object.assign({}, target);
    if (Validators.isObject(target) && Validators.isObject(source)) {
        Object.keys(source).forEach(key => {
            if (Validators.isObject(source[key])) {
                if (!(key in target))
                    Object.assign(output, {
                        [key]: source[key]
                    });
                else
                    output[key] = ObjectUtils.mergeDeep(target[key], source[key]);
            } else {
                Object.assign(output, {
                    [key]: source[key]
                });
            }
        });
    }
    return output;
};


export default {

}