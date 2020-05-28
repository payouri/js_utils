/** @module Validators */
/**
 * @function isObject
 * @description Simple object check
 * 
 * @param item
 * 
 * @returns {boolean}
*/
export const isObject = item => {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * @function isValidEmail
 * @description Regexp working for french mobile and house numbers
 * 
 * @param {String} email string to be validated
 * 
 * @returns {Boolean}
*/
export const isValidEmail = (email) => {
    /** @const {Regexp} emailRegExp 
     * @description email regex returns true when a valid email string
     * @example 
     * Regexp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    */
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.test(String(email).toLowerCase());
}
/**
 * @function isValidPhone
 * @description Regexp working for french mobile and house numbers
 * There might be some flaws with the regexp
 * 
 * @param {String} number phone number to validate 
 * 
 * @returns {Boolean}
*/
export const isValidPhone = (number) => {
    /** @const {Regexp} phoneRegExp 
     * @description phone regex returns true when a valid phone string
     * @example
     * Regexp(/^((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7})){1}$/gm)
    */
    const phoneRegExp = /^((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7})){1}$/gm
    return phoneRegExp.test(String(number));
}

export default {
    isObject,
    isValidEmail,
    isValidPhone,
}