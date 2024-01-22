let arr=[21,22,34,43,12,11,98,98]
let largest=arr[0]
let second_largest=-1;

for(let i=1;i<arr.length-1;i++){
    if(arr[i]>largest){
        second_largest=largest
        largest=arr[i]
        // second_largest=largest
    }
}

console.log(largest,second_largest)