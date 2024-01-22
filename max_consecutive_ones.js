let arr=[1,1,0,1,1,1,0,1,1]
let max=0;
let cnt=0;

for(let i=0;i<arr.length-1;i++){
    if(arr[i]===1){
        cnt++;
       
    }
    else{
        cnt=0
    }
    if(cnt>max){
        max=cnt
    }
}
console.log(max)