Array.prototype.mergeSort = function () {
    // 分操作
    const rec = (arr) => {
        if (arr.length === 1) {
            return arr
        }
        // 获取中间数
        const mid = Math.floor(arr.length / 2)
        // 拿到拆分的左数组
        const left = arr.slice(0, mid)
        const right = arr.slice(mid, arr.length)
        // 进行递归
        const orderLeft = rec(left)
        const orderRight = rec(right)
        const res = []
        // 进行合并
        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            } else if (orderLeft.length) {
                res.push(orderLeft.shift())
            } else if (orderRight.length) {
                res.push(orderRight.shift())
            }
        }
        return res
    }

    const res = rec(this)
    res.forEach((n, i) => this[i] = n)
}
const arr = [5, 4, 3, 2, 1]
arr.mergeSort()
