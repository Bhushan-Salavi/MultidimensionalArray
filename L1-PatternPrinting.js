function printPattern(N) {
    let firstRow = "";
    for (let i = 0; i < N; i++) {
        firstRow += "* ";
    }
    console.log(firstRow);
    for (let i = 0; i < N - 2; i++) {
        console.log("*");
    }
    let lastRow = "";
    for (let i = 0; i < N; i++) {
        lastRow += "* ";
    }
    console.log(lastRow);
}
const N = 5;
printPattern(N);
