/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  
  let result = false;
  let cnt = 0;

  for (var i=0; i<flowerbed.length;i++) {
    var before = (i===0) ? 0 : flowerbed[i-1];
    var next = (i===flowerbed.length-1) ? 0 : flowerbed[i+1];
    
    if (flowerbed[i]===0 && before===0 && next===0) {
      flowerbed[i] = 1;
      cnt++;
    }
  }

  if (cnt >= n) 
    result = true;

  return result;
};