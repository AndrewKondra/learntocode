console.log('Hello World');

document.getElementById("hello").addEventListener("click", numClicks);
x = 1

function numClicks() {
    console.log('Hello ' + x++ + ' times');
}
