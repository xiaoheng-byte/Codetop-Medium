/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//不要使用额外空间
 var rotate = function(nums, k) {
    k = k % nums.length;
    nums.unshift(...nums.splice(nums.length - k));
};

//287 寻找重复数
var findDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++)
        if(nums.indexOf(nums[i]) != i)
            return nums[i];
};