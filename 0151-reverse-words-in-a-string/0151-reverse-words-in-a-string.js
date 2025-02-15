/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.trim().split(" ").filter(a => {
    return a ?? "";
  });
  return arr.reverse().join(" ");
};