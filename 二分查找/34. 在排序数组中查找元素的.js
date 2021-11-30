/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let start = -1, end = -1;
    while(left <= right){
        let mid = left + Math.floor((right - left)/2);
        if(nums[mid] == target){
            start = mid;
            end = mid;
            break;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    if(start == -1)
        return [start,end]
    while(nums[start] == target)
        start--;
    while(nums[end] == target)
        end++;
    if(start == end)
        return [start, end];
    else
        return [start+1, end - 1]
};  
