var spiralOrder = function(matrix) {
    const res = [];
    const[m,n] = [matrix.length, matrix[0].length];
    if(!m || !n)    return res;
    let[left,right,up,down] = [0,n-1,0,m-1];
    while(1){
        //从左到右
        for(let i = left; i <= right; i++)
            res.push(matrix[up][i]);
        up++;
        if(up > down)   break;
        //从上到下
        for(let i = up; i <= down; i++)
            res.push(matrix[i][right]);
        right--;
        if(right < left)    break;
        //从右到左
        for(let i = right; i >= left; i--)
            res.push(matrix[down][i]);
        down--;
        if(up > down)   break;
        //从下到上
        for(let i = down; i >= up; i--)
            res.push(matrix[i][left]);
        left++;
        if(right < left)    break;
    }
    return res;
};