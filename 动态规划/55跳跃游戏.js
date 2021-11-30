var canJump = function(nums) {
    if(nums == null || nums.length == 1)
        return true;
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    if(dp[0] == 0)
        return false;
    for(let i = 1; i < nums.length; i++){
        //dp存放在i位置能跳的最远距离
        dp[i] = Math.max(nums[i],dp[i-1]-1);
        //如果没到头的时候能跳的距离已经为0了，那就肯定跳不到末尾
        if(dp[i] == 0 && i != nums.length - 1)
            return false;
    }
    return true;
};