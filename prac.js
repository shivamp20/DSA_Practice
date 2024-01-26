// function minPieces(original, desired) {
//     // console.log(original)
//     let n = original.length;
//     const indexMap = new Map()

//     for(let i=0;i<n;i++){
//         indexMap.set(original[i],i)
//     }
//     // console.log(indexMap)
//     let mincuts=0;
//     for(let i=0;i<n;i++){
//         if(original[i]!==desired[i]){
//             let current =i;
//             while(original[current]!==desired[i]){
//                 temp = original[current]
//                 original[current]=original[indexMap.get(desired[i])];
//                 original[indexMap.get(desired[i])]=temp

//                 //swapping is done, update the indices in indexmap
//                 indexMap.set(temp,indexMap.get(desired[i]))
//                 indexMap.set(desired[i],current)

//                 mincuts++;
//             }
//         }
//     }
//     // console.log(mincuts)
//     return mincuts
   
//     }

// let original = [1, 4, 3, 2];
// let desired = [1, 2, 4, 3];
// //shallow copy while passing the array
// console.log(minPieces([...original], desired));


let arr=["un","iq","ue"]
let arrNew=[]
for(let i=0;i<arr.length-1;i++){
    let j=arr.length+1;
    arr[j]=arr[i]+arr[i+1]
    
}

console.log(arr)


// let counts={}
// arr= arr.join("").split("")
// arr.forEach((v)=>(counts[v]=(counts[v]? ++counts[v]:1)))
// // console.log(counts)
