/** @module EventUtils */
/**
 * @function debounce 
 * @description
 * @param {Function} fn 
 * @param {Number} time 
 * @param {Boolean} immediate 
 */
export const debounce = function (fn, time, immediate) {
  let timeout;

  return function () {
    const context = this,
      args = arguments;

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(function () {

      timeout = null;

      if (!immediate) {
        fn.apply(context, args);
      }
    }, time);

    if (callNow) fn.apply(context, args);
  }
}

/**
 * @function throttle
 * @description
 * @param {Function} fn 
 * @param {Number} delay 
*/
export const throttle = function (fn, delay = 250) {

  let lastCall = 0;
  return function (...args) {

    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);

  }
}

export default {
  debounce,
  throttle
}