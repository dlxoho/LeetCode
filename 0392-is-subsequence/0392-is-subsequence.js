/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length==0 && t.length==0) return true;
    let max = s.length - 1;
    let idx=0;
    for (let el of t) {
      let val = s[idx];
      if (el == val) {
        idx++;
      }
      if (idx > max) {
        return true;
      }
    }
    return false;
};