var sumNumbers = function(root) {
    if(root == null)
        return 0;
    let sum = 0;
    function dfs(root,cur){
        //operation
        cur = cur*10 + root.val;
        //判断终止条件，加入
        if(!root.left && !root.right)   sum += cur;
        //遍历左边
        if(root.left)       dfs(root.left,cur);   
        //遍历右边
        if(root.right)      dfs(root.right,cur);
    }
    dfs(root,0);
    return sum;    
};