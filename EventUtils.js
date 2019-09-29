export const debounce = function(fn, time = 250, immediate = false) {
    let timeout;
  
    return function(...args) {
        const functionCall = () => fn.apply(this, args);
  
        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
};

export const throttle = function(fn, delay = 250) {

    let lastCall = 0;
    return function (...args) {
        
        const now = (new Date).getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fn(...args);
        
    }
};

export default {
    debounce,
    throttle
}