var minPathSum = function(grid) {
    if(grid == null || grid.length == 0)
        return 0;
    let [m,n] = [grid.length, grid[0].length];
    let dp = new Array(m).fill(0).map(x=> new Array(n).fill(0));
    //初始化第一个为矩阵第一个元素
    dp[0][0] = grid[0][0];
    //行累加
    for(let i = 1; i < m;i++)
        dp[i][0] = grid[i][0] + dp[i-1][0];
    //列累加
    for(let i = 1; i < n; i++)
        dp[0][i] = grid[0][i] + dp[0][i-1];
    //遍历内部每一个元素
    for(let i = 1; i < m; i++)
        for(let j = 1; j < n; j++){
            //内部元素的dp值 = 当前grid值 + 它上面dp和左边dp中较小的
            dp[i][j] = grid[i][j] + Math.min(dp[i-1][j],dp[i][j-1]);
        }
    //返回dp数组的最后一个
    return dp[m-1][n-1];
};