let arr=[10,20,30,40,50]
let val=40;
function searchVal(arr,val){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==val){
            return true
        }
    }

}

console.log(searchVal(arr,val))
