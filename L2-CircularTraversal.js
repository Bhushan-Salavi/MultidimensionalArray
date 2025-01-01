function reverseUTraversal(matrix) {
    const n = matrix.length; 
    let result = "";
    for (let i = n - 1; i >= 0; i--) {
        result += matrix[i][0] + " ";
    }
    for (let i = 1; i < n; i++) {
        result += matrix[0][i] + " ";
    }
    for (let i = 1; i < n; i++) {
        result += matrix[i][n - 1] + " ";
    }
    for (let i = n - 2; i >= 0; i--) {
        result += matrix[n - 1][i] + " ";
    }
    console.log(result.trim()); 
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
reverseUTraversal(matrix);

