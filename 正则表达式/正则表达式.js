/**
 * 179. 最大数
 * @param {number[]} nums
 * @return {string}
 * Step1: 根据组合后数字的大小排序
 * Step2: 排序后的数组转成字符串
 * Step3: 多个0合并成一个0
 */
var largestNumber = function(nums) {
    return nums.sort((a,b)=>(''+ b + a) - ('' + a + b)).join('').replace(/^0+$/g,'0');
};