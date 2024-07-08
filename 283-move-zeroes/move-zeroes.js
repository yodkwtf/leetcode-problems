/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let n of nums) {
        if (n === 0) {
            const index = nums.indexOf(n);
            nums.splice(index, 1);
            nums.push(0);
        }
    }

    return nums;
};

// function moveZeroesBetter(nums) {
//   var idx = 0;
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[idx] = nums[i];
//       nums[i] = idx === i ? nums[i] : 0;
//       idx++;
//     }
//   }
// }