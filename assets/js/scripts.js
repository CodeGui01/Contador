var currentNumberwrapper = document.getElementById("currentNumber")
var currentNumber = 0;
var botao = document.querySelector("button")

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberwrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberwrapper.innerHTML = currentNumber;
}

if (currentNumber == 0) {
    botao.disabled = false;
}
    
    

