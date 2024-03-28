/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = strs[0];

    for (let word of strs) {
        for (let i = 0; i <= commonPrefix.length; i++) {
            if (word[i] !== commonPrefix[i]) {
                if (i === 0) {
                    return ""
                }
                commonPrefix = commonPrefix.substring(0, i)
            }
        }
    }

    return commonPrefix;
};