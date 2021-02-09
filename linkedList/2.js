const {
    _max,
    _ceil,
    _min,
    _floor,
    _pow,
    _round,
    log,
    ListNode,
    getListFromArray,
    getArrayFromList,
    logList
} = require('../常用刷题')
let addTwoNumbers = function (l1, l2) {
    let l3 = new ListNode()
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while (p1 || p2) {
        const v1 = p1 ? p1.val : 0
        const v2 = p2 ? p2.val : 0
        const val = v1 + v2 + carry
        carry = Math.floor(val / 10)
        p3.next = new ListNode(val % 10)
        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
        p3=p3.next
    }
    if (carry) p3.next = new ListNode(carry)
    logList(l3.next)
    return l3.next
}
const l1 = getListFromArray([2, 4, 3])
const l2 = getListFromArray([5, 6, 4])
addTwoNumbers(l1, l2)
