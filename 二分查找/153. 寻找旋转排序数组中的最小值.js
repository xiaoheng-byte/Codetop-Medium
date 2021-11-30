/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    //Step1: 定义左右两指针
    let left = 0, right = nums.length - 1;
    //Step2: 开启循环: 终止条件为左右指针还没碰到一起
    while(left < right){
        //Step3: 循环内部定义mid
        let mid = Math.floor((right + left) / 2);
        //Step4: 判断,缩小范围,移动指针
        if(nums[right] < nums[mid]){
            left = mid+1;
        }else
            right = mid;
    }
    return nums[left];
};