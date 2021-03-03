const bt = require('./bt')
/*const preorder = (root) => {
    if (!root) {
        return
    }
    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
}*/

/**
 * 先序遍历非递归版
 * @param root
 */
const preorder = (root) => {
    if (!root) {
        return
    }
    const stack = [root];

    while (stack.length) {
        const n = stack.pop();
        console.log(n.val)
        // 栈后进先出所以要反着
        if (n.right) {
            stack.push(n.right)
        }
        if (n.left) {
            stack.push(n.left)
        }
    }
}
preorder(bt)
