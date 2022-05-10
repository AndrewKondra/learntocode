console.log('Hello World');

function sumNumbers(x, y, multNumbers) {
    let a = multNumbers + (x + y);
    return a;
}
function multNumbers(m, n) {
    let b = m * n;
    return b;
}
let answer = sumNumbers(2, 3, multNumbers(5, 7));
console.log(answer);




