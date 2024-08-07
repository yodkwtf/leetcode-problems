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
                    return "";
                }
                commonPrefix = commonPrefix.substring(0, i)
            }
        }
    }

    return commonPrefix;
};

// better
// var longestCommonPrefix = function(strs) {
//   if (!strs.length) return '';
//   let prefix = '';
//   let maxPrefixLength = Math.min(...strs.map(str => str.length));
//   for (let i = 0; i < maxPrefixLength; i++) {
//     let char = strs[0][i];
//     if (strs.every(str => str[i] === char)) {
//       prefix += char;
//     } else {
//       break;
//     }
//   };  
//   return prefix;
// };