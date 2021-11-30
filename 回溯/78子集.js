/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let res = []
    let temp = []
    function helper(index){
        //临时的放入答案里
        res.push(temp.slice())
        //开始遍历
        for(let i = index; i < nums.length; i++){
            //加入临时
            temp.push(nums[i])
            //递归下一个
            helper(i+1)
            //剪枝
            temp.pop()
        }
    }
    helper(0);
    return res;
};