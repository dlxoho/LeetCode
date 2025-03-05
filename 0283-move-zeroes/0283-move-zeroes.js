/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let max = nums.length;
  let base = 0;
  for (let i=0; i<max; i++) {
    if (nums[i] != 0) {
      nums[base] = nums[i];
      base++;
    }
   }

  for(let k=base;k<max;k++) {
    nums[k] = 0;
  }
};