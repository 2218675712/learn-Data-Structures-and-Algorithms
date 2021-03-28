class MinHeap {
    constructor() {
        this.heap = []
    }

    /**
     * 获取父节点
     * @param i
     * @returns {number}
     */
    getParentIndex(i) {
        // 等于Math.floor((i-1)/2)
        return (i - 1) >> 1
    }

    /**
     * 获取左侧节点
     * @param i
     */
    getLeftIndex(i) {
        return i * 2 + 1
    }

    /**
     * 获取右侧节点
     * @param i
     */
    getRightIndex(i) {
        return i * 2 + 2
    }

    /**
     * 交换变量
     * @param i1    根节点
     * @param i2    当前节点
     */
    swap(i1, i2) {
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }

    /**
     * 上移操作
     * @param index
     */
    shiftUp(index) {
        if (index === 0) {
            return
        }
        const parentIndex = this.getParentIndex(index)
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }

    /**
     * 插入节点
     * @param value
     */
    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1);
    }

    /**
     * 下移操作
     * @param index
     */
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }

    /**
     * 删除堆顶
     */
    pop() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }

    /**
     * 获取堆顶
     * @returns {*} 返回数组头部
     */
    peek() {
        return this.heap[0]
    }

    /**
     * 获取堆的大小
     * @returns {number} 返回堆的长度
     */
    size() {
        return this.heap.length
    }

}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const h = new MinHeap()
    nums.forEach(n => {
        h.insert(n)
        if (h.size() > k) {
            h.pop()
        }
    })
    return h.peek()
};
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
