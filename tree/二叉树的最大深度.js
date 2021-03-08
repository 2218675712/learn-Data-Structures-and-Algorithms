const bt = require('./bt')
var maxDepth = function (root) {
    if (root == null) return 0;  //最后一层的left,right;
    let left = maxDepth(root.left); //向左扎;
    let right = maxDepth(root.right);//向右扎：
    return Math.max(left, right) + 1; //选出最大的每层+1;
};
console.log(maxDepth(bt))
