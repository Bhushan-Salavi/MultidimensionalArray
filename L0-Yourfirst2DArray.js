
function print2DArray(N, M, arr) {
    for (let i = 0; i < N; i++) {
        let rowResult = ""
        for (let j = 0; j < M; j++) {
            rowResult += arr[i][j] + " ";  
        }
        console.log(rowResult.trim());  
    }
}
const N = 3;
const M = 2;
const arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

print2DArray(N, M, arr);
