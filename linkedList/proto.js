/*
const obj = {}
const func = () => {

}
const arr = []
console.log(func instanceof Object)     //true
console.log(func instanceof Function)   //true
console.log(arr instanceof Array)       //true
console.log(arr instanceof Object)      //true
*/
/*

const obj = {}
Object.prototype.x = '10';
console.log(obj.x)      //10
const func = () => {
}
Function.prototype.y = '20'
console.log(func.x)     //10
console.log(func.y)     //20
*/

/*
const instanceof1 = (A, B) => {
    let p = A
    while (p) {
        if (p === B.prototype) {
            return true
        }
        p = p.__proto__;
    }
    return false
}
instanceof1([], Array);
*/
var foo = {};
F = function () {

};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';
console.log(foo.a);
console.log(foo.b);
console.log(F.a);
console.log(F.b);
/*
value a
undefined
value a
value b
 */
