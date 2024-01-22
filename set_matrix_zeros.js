let matrix = [[1,1,1],[1,0,1],[1,1,1]]
// let m=3;
// let n=3;
let arr=[]
let m=matrix[0].length;
let n=m;
let col=[]
let row=[]

for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        // console.log(matrix[i][j])
        if(matrix[i][j]===0){
            col[j]=1
            row[i]=1
        }
    }
}
for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(row[i]||col[j]){
            matrix[i][j]=0
        }

    }
}



console.log(matrix)