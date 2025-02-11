/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  let stringArr = s.split("");
  
  let tempArr = [];
  stringArr.forEach(el => {
    if (vowels.includes(el)) {
      tempArr.push(el);
    }
  });

  var max = tempArr.length-1;
  for (var i=0; i<stringArr.length; i++) {
    if (vowels.includes(stringArr[i])) {
      stringArr.splice(i,1,tempArr[max]);
      max--;
    }
  }

  return stringArr.join("");
};