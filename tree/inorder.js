const bt = require('./bt')
/*const inorder = (root) => {
    if (!root) {
        return
    }
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}*/
/**
 * 中序遍历非递归版
 * @param root
 */
const inorder = (root) => {
    if (!root) {
        return
    }
    const stack = [];
    // 利用指针,将所有的左节点存入到堆栈
    let p = root
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const n = stack.pop();
        console.log(n.val);
        p = n.right
    }
}
inorder(bt)
