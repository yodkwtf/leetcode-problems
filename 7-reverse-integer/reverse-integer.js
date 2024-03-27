/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const str = x.toString();
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    const reveresedMod = parseInt(reverseStr)

    return reveresedMod > 2 ** 31 - 1 ? 0 : reveresedMod * Math.sign(x);
};