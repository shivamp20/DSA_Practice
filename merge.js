let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let arr3=[]
let flag=0;
// arr3.length=arr1.length+arr2.length;
// for(let i=0;i<=arr1.length-1;i++){
//     arr3[i]=arr1[i]
//     flag++;
// }
// let j=0;
// for(let i=flag;i<=arr3.length-1;i++){
//     arr3[i]=arr2[j]
//     j++;
// }

arr3=[...arr1,...arr2]


console.log(arr3)