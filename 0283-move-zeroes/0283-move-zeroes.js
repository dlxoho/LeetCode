/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   // 설명 
   // 1. 0이 아닌값을 전부 앞으로 배치 
   // 2. 0의 개수부터 0 으로 채워주기 

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