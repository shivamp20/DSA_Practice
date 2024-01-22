let arr=[1,0,2,3,2,0,0,4,5,1]
let numberToMove=0

let i=0;

for(let j=0;j<=arr.length-1;j++){
    if(arr[j]!==numberToMove){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++;
    }
}
console.log(arr)