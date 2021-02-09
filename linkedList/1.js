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
var reverseList = function (head) {
    let p1 = head;
    let p2 = null;
    while (p1) {
        let temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp
    }
    logList(p2)
    return p2
};

reverseList(getListFromArray([1, 2, 3, 4, 5]))
