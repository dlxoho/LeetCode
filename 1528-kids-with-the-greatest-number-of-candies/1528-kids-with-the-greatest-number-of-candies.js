/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  let arr = [];
  
  candies.forEach(el => {
    var ea = el + extraCandies;
    let flag = false;
    if (ea >= max) {
      flag = true;
    }
    arr.push(flag);
  });
  
  return arr;
};