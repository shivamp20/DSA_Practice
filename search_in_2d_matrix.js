let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 34;
let m = matrix.length;
let n = matrix[0].length;

function binarySearch(arr, target) {
  
  let low = 0;
  let high = arr.length - 1;
  

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      
      return true;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    
  }
  return false;
}
let result = false;
for (let i = 0; i < m; i++) {
  if (matrix[i][0] <= target && target <= matrix[i][n - 1]) {
    result = binarySearch(matrix[i], target);
  }
}
console.log(result);
