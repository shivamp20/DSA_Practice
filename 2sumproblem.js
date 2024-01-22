let arr=[2,6,5,8,11]
arr.sort((a,b)=>a-b)
let i=0;
let j=arr.length-1;
let target=14
let val=false
//brute
// while(i<arr.length){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]+arr[j]===target){
//             val=true
//             // console.log(i)
//             break;
//         }
//     }

//     i++;
// }
// console.log(val)

//optimal
console.log(arr)
for(let k=0;k<arr.length;k++){
    if(arr[i]+arr[j]===target){
        val=true
        // console.log(i,j)
    }
    else if(arr[i]+arr[j]<target){
        i++;
    }
    else if(arr[i]+arr[j]>target){
        j--;
    }
}
console.log(val)


