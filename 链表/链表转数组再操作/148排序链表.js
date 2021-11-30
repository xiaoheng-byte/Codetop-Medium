/*
    先转成数组再排序
*/
var sortList = function(head) {
    let p;
    //转换后的数组arr
    let arr = [];
    //一个一个丢入数组
    while(head){
        p = head.next;
        head.next = null;
        arr.push(head);
        head = p;
    }
    //对数组排序
    res = arr.sort((a,b)=>a.val - b.val)
    //数组转回链表
    for(let i = 1; i < res.length; i++)
        res[i-1].next = res[i];
    //返回的res[0]就是链表头
    return res[0];  
};