/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let sArr = s.split("");
    let tArr = t.split("");
    let result = sArr.length==0 && tArr.length==0 ? true : false;
    
    let max = sArr.length - 1;
    let idx=0;
    for (let el of tArr) {
      let val = sArr[idx];
      if (el == val) {
        idx++;
      }
      if (idx > max) {
        result = true;
        break;
      }
    }
    return result;
};