/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  // for .. of -> 중간에 return 발생하면 break; 
  // foreach -> 중간에 return 발생하더라도 계속 진행 : 메서드로 콜백함수를 실행 
  let num1 = Infinity, num2 = Infinity;

  for (let num of nums) {
    if (num <= num1) {
      num1 = num;
    } else if (num <= num2) {
      num2 = num;
    } else {
      return true;
    }
  }
  return false;
};