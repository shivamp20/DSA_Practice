// let arr=[1,2,3,4,5,6,7]
//brute approach
// temp=[]
// temp[0]=arr[0]
// temp[1]=arr[1]
// temp[2]=arr[2]
// let d=3;

const { reverse } = require("dns");

// for(let i=d;i<arr.length;i++){
//     arr[i-d]=arr[i];
// }

// // console.log(temp)
// let j=0;
// for(let i=d+1;i<arr.length;i++){
//     arr[i]=temp[j]
//     j++;
// }
// console.log(arr)

//optimal solution

let arr=[1,2,3,4,5,6,7]
let d=3;
let i=d;


for(let j=0;j<=d;j++){
    temp=arr[j];
    arr[j]=arr[i];
    arr[i]=temp;
    i++

}

[arr[d+2],arr[d+3]]=[arr[d+3],arr[d+2]]
temp=arr[d+1]
arr[d+1]=arr[d+2]
arr[d+2]=temp
console.log(arr)


