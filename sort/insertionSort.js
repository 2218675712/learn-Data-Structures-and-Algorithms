Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i += 1) {
        const temp = this[i]
        let j = i
        while (j > 0) {
            if (this[j - 1] > temp) {
                this[j] = this[j - 1]
            } else {
                break
            }
            j -= 1
        }
        this[j] = temp
    }

}
const arr = [3, 44, 38, 5, 47, 15, 36]
arr.insertionSort()
console.log(arr)

