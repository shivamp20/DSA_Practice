let arr=[10,20,30,40,50]
let position=2;
// let i=0;
function deleteval(arr,position){

 for(let i=position;i<arr.length-1;i++){
    arr[i]=arr[i+1];

 }
 arr.length=arr.length-1
}

deleteval(arr,position)
console.log(arr)