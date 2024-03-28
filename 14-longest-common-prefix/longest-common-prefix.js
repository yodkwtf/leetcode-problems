/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = strs[0];

    for (let c=1;c<strs.length;c++) {
        for (let i = 0; i <= commonPrefix.length; i++) {
            if (strs[c][i] !== commonPrefix[i]) {
                if (i === 0) {
                    return ""
                }
                commonPrefix = commonPrefix.substring(0, i)
            }
        }
    }

    return commonPrefix;
};