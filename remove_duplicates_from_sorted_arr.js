
//brute approach
let arr=[1,1,2,3,3,4,5,5]

// let unique_set= new Set(arr)
// console.log(unique_set)


//optimal

let i=0;

for(j=1;j<arr.length;j++){
    if(arr[i]!==arr[j]){
        arr[i+1]=arr[j]
        i++;
    }
    
   
}
console.log(i)
while(i<arr.length){
console.log(arr)
i--


}
