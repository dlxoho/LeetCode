// 
var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

    let arr = s.split("");
    let left = 0;
    let right = arr.length-1;
    while (left < right) {
      if (!vowels.has(arr[left])) {
        left++;
      }
      if (!vowels.has(arr[right])) {
        right--;
      }

      if (vowels.has(arr[left]) && vowels.has(arr[right])) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;   
      }
    }
    return arr.join("");
};
