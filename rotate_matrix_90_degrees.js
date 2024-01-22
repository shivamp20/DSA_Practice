let matrix = [[1,2,3],[4,5,6],[7,8,9]]

let m=matrix.length;//row
let n = matrix[0].length;//column

for(let i=0;i<m-1;i++){
    for(let j=i+1;j<n;j++){
        temp=matrix[i][j]
        matrix[i][j]=matrix[j][i]
        matrix[j][i]=temp
    }
}
for(let i=0;i<m;i++){
    console.log(matrix[i].reverse())
}