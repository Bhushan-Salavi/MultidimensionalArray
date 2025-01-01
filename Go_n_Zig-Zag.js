function printZigZag(matrix) {
    const rows = matrix.length; 
    const cols = matrix[0].length; 
    let result = [];
    let leftToRight = false;
    for (let row = 0; row < rows; row++) {
        if (leftToRight) {
            for (let col = 0; col < cols; col++) {
                result.push(matrix[row][col]);
            }
        } else {
            for (let col = cols - 1; col >= 0; col--) {
                result.push(matrix[row][col]);
            }
        }
        leftToRight = !leftToRight; 
    }

    console.log(result.join(" "));
}
const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2]
];

printZigZag(matrix);
