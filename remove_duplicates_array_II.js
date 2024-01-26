let nums = [1,1,1,2,2,2,3,3]

let k = 2;
for(let i=2;i<nums.length;i++){
    if(nums[i]!==nums[k-2]|| nums[i]!==nums[k-1]){
        nums[k]=nums[i]
        k++;
        console.log(nums)
    }
}
console.log(k)

