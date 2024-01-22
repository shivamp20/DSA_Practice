

function insertVal(arr,value){
    for(let i=n-1;i>=location;i--){
        if(i!==location){
            arr[i+1]=arr[i];
            
        }
        else{
            
            arr[i+1]=arr[i]
            arr[i]=value

            
        }
    }

}

let arr=[10,20,30,50,60,70];
let n=arr.length
let value=40
location=3;

insertVal(arr,value);
console.log(arr)