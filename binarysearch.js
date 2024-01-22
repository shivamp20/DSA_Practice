let arr=[3,4,6,7,9,12,16,17]
let low =0;
let high=arr.length-1;
target=9;

while(low<=high){
    let center=(low+high)/2
    let mid=parseInt(center)
    
    // console.log(mid)
    if(arr[mid]===target)
    {
        // console.log(arr[mid])
        console.log(true)
        break;
    }
    else if(arr[mid]<target){
        low=mid+1;
        

    }
    else{
        high=mid-1;
    }
}