/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const reveresedMod = parseInt(x.toString().split('').reverse().join(''))
    return reveresedMod > 2 ** 31 - 1 ? 0 : reveresedMod * Math.sign(x);
};