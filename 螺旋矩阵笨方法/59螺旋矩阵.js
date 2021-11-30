/**
 * @param {number} n
 * @return {number[][]}
 */
//跟54一模一样的方法
 var generateMatrix = function(n) {
    let matrix = new Array(n).fill(0).map(x=> new Array(n).fill(0));
    let[left,right,up,down] = [0,n-1,0,n-1];
    let count = 1;
    while(1){
        for(let i = left; i <= right; i++){
            matrix[up][i] = count;
            count++;
        }     
        up++;
        if(up > down)   break;
        for(let i = up; i <= down; i++){
            matrix[i][right] = count;
            count++;
        }    
        right--;
        if(right < left)    break;
        for(let i = right; i >= left; i--){
            matrix[down][i] = count;
            count++;
        }
        down--;
        if(up > down)   break;
        for(let i = down; i >= up; i--){
            matrix[i][left] = count;
            count++;
        }
        left++;
        if(right < left)    break;
    }
    return matrix;
};