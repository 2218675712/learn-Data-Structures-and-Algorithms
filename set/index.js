// 去重
const arr = [1, 1, 2, 2, 3, 4, 5]
// 转为集合,在转为数组
const arr2 = [...new Set(arr)]
console.log(arr2)
// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(1);
console.log(has)

// 求交集
const set1 = new Set([1, 2])
const set2 = new Set([2, 3])
const set3 = new Set([...set1].filter(item => set2.has(item)))
console.log(set3)
