
var MyHashMap = function() {
    this.map = new Array(1000).fill(null).map(() => []);
};

// 해시 함수 추가
MyHashMap.prototype.hash = function(key) {
    return key % 1000; // 간단한 모듈로 해싱
};

MyHashMap.prototype.put = function(key, value) {
    const hashKey = this.hash(key);
    const bucket = this.map[hashKey];
    
    for (var i=0; i<bucket.length; i++) {
        if (bucket[i][0] === key) { // 정확한 비교를 위해 === 사용
            bucket[i][1] = value;
            return;
        }
    }
    bucket.push([key, value]);
};

MyHashMap.prototype.get = function(key) {
    const hashKey = this.hash(key);
    const bucket = this.map[hashKey];
    
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            return bucket[i][1];
        }
    }
    return -1;
};

MyHashMap.prototype.remove = function(key) {
    const hashKey = this.hash(key);
    const bucket = this.map[hashKey];
    
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1);
            return;
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */