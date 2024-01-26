let nums1 = [1,2,3,0,0,0] 
let m = 3, nums2 = [2,5,6], n = 3

var merge = function(nums1, m, nums2, n) {
    let j=0;
    let len = m+n;
    for(let i=0;i<len;i++){
        if(nums1[i]===0){
            console.log("hello")
            console.log(nums2[j])
            nums1[i]=nums2[j]
            j++;
        }
 
    }
    nums1.sort((a,b)=>a-b)
    return nums1
     
 };

 let res = merge(nums1,m,nums2,n)
 console.log(res)