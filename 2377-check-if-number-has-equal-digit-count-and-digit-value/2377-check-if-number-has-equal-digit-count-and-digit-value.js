/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {

    var arr = num.split('');
    for(var i=0; i<arr.length; i++) {
        var value = arr[i];
        var cnt = 0;
        for(var k=0; k<arr.length; k++) {
            if (i == arr[k]) {
                cnt++;
            }
        }
        if (cnt != value) {
            return false;
        }
    }
    return true;

};