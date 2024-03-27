/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x);
    let reversedStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return reversedStr === str;
};