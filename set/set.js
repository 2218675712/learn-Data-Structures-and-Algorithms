let mySet = new Set();
mySet.add(1)
// 只能添加一个
mySet.add(2)
mySet.add(2)
mySet.add('some text')
let o = {a: 1, b: 2}
mySet.add(o)
// 虽然看上去一样,但是在内存当中的地址不一样
mySet.add({a: 1, b: 2})
console.log(mySet)
const has = mySet.has(o)
console.log(has)
mySet.delete(2)
console.log(mySet)
console.log(mySet.size)
// 遍历set对象
for (const mySetElement of mySet) {
    console.log(mySetElement)
}
// set转array
const myArr = [...mySet]
const myArr1 = Array.from(mySet)
// array转set
const myset1 = new Set([1, 2, 3, 4])
// 求交集
const intersection = new Set([...mySet].filter(x => myset1.has(x)))
// 求差集
const difference = new Set([...mySet].filter(x => !myset1.has(x)))
