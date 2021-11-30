/*
二叉树遍历的特点
中序：左根右
前序：根左右
后序：左右根
*/
var buildTree = function(preorder, inorder) {
    //判空
    if(!preorder.length)    
        return null;
    //新建根节点等于前序遍历的第一个节点
    let root = new TreeNode(preorder[0]);
    //mid记录根节点在中序遍历的哪个位置
    let mid = inorder.indexOf(root.val)
    root.left = buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid))
    root.right = buildTree(preorder.slice(mid+1,preorder.length),inorder.slice(mid+1,inorder.length));
    return root;
};

var buildTree = function(inorder, postorder) {
    //判空
    if(!inorder.length)
        return null;
    //新建根节点等于后序遍历的最后一个节点
    let root = new TreeNode(postorder[postorder.length-1]);
    //mid记录根节点在中序遍历的哪个位置
    let mid = inorder.indexOf(root.val);
    root.left = buildTree(inorder.slice(0,mid), postorder.slice(0,mid));
    root.right = buildTree(inorder.slice(mid+1,inorder.length), postorder.slice(mid,postorder.length-1));
    return root;
};