/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // first 
  // const result = [];
  //   for (var i=0; i<nums.length; i++) {
  //     let sum = nums.reduce((a,b,idx) => { 
  //       return idx===i ? a : a*b;
  //     }, 1);
  //     result.push(sum);
  //   }
  //   return result;

  // 왼쪽 오른쪽 순회  
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    let left = 1;
    for (let i=0; i< n; i++) {
      result[i] = left;
      left *= nums[i];
    }
    
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
      result[i] *= right;
      right *= nums[i];
    }
    
    return result;
};