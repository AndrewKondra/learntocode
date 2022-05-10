console.log('Hello World');

document.getElementById("hello").addEventListener("click", numClicks);
x = 1

function numClicks() {
    let y = x++
    console.log('Hello ' + y + ' times');
}
