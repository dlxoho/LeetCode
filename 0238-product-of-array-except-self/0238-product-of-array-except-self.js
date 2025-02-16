/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // const result = [];
  //   for (var i=0; i<nums.length; i++) {
  //     let sum = nums.reduce((a,b,idx) => { 
  //       return idx===i ? a : a*b;
  //     }, 1);
  //     result.push(sum);
  //   }
  //   return result;

    const n = nums.length;
    const result = new Array(n).fill(1);
    
    let prefix = 1;
    for (let i=0; i< n; i++) {
      result[i] = prefix;
      prefix *= nums[i];
    }
    
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
      result[i] *= suffix;
      suffix *= nums[i];
    }
    
    return result;
};