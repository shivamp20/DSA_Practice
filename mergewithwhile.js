let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let arr3=[]
let i=0; let j=0;
// arr3.length=arr1.length+arr2.length
while(i<arr1.length && j<arr2.length){
    arr3[i]=arr1[i];
    i++;
    arr3[arr1.length+j]=arr2[j]
    j++;
    // arr3[j]=arr2[j]
   

}
console.log(arr3)