function remove_duplicates(arr){
    let i=0;
    arr.sort((a,b)=>a-b);
    for(let j=1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            arr[i+1]=arr[j]
            i++;
        }
       
    }
    // console.log(i)
    arr.length=i+1;
    // console.log(arr)


}
let arr1=[1,1,2,3,4,5]
let arr2=[2,3,4,4,5,6]
remove_duplicates(arr1)
remove_duplicates(arr2)
let arr3=[...arr1,...arr2]
// console.log(arr3.sort((a,b)=>a-b))

remove_duplicates(arr3)




console.log(arr3)