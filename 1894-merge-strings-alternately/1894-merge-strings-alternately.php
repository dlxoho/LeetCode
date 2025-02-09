class Solution {

    /**
     * @param String $word1
     * @param String $word2
     * @return String
     */
    function mergeAlternately($word1, $word2) {
      $arr1 = str_split($word1);
      $arr2 = str_split($word2);
      $result = "";
      $max = max(count($arr1),count($arr2));
      for ($i=0; $i<=$max; $i++) {
        if ($arr1[$i]) {
          $result .= $arr1[$i];
        }
        if ($arr2[$i]) {
          $result .= $arr2[$i];
        }
      }

      return $result;
    }
}