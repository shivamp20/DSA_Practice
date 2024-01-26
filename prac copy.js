let nums = [2,2,1,1,1,2,2]
let count={}
let maxFreq=0;
let maxElement=null
// let obj={a:1,b:2,c:3}


for(const num of nums){
    count[num]=(count[num])?++count[num]:1
}
for(num in count){
    // console.log(count[num])
    if(count[num]>maxFreq){
        maxFreq=count[num]
        maxElement=num
    }
}
console.log(maxElement)



    