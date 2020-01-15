export const random = (min, max) => {
    return Math.random() * (max - min) + min;
}
export const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const clamp = (num, min, max) => {
    return num <= min ? min : num >= max ? max : num;
}
export default {
    clamp,
    random,
    randomInt,
}