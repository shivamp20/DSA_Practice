let arr=[1,2,4,5]
let flag=0
let temp=0
//brute
// for(let i=1;i<arr.length;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(i===arr[j]){
//             flag=1;
//             break;

//         }
//         else{
//             flag=0;
//             temp=i;
            
//         }
//     }


// }
// console.log(temp)

//optimal solution
let n=arr.length;
let sum1=n*(n+1)/2;
// console.log(sum1)
let sum2=0;
for(let i=0;i<n-1;i++){
    sum2+=arr[i];
}
let missing_num=sum1-sum2
console.log(missing_num)