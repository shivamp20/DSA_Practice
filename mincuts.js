const arr = [1, 2, 3, 4, 3, 5, 3];
const numberToMove = 3;
let i=0;
for(let j=0;j<arr.length;j++){
    if(arr[j]!==numberToMove){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++;
    }
}
console.log(arr)