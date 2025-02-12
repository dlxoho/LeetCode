// 투 포인터 
// 배열, 리스트같은 선형 자료 구조에서 두개의 포인터(인덱스) 를 사용하여 해결 
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
