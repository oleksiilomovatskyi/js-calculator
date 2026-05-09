const submitElement = document.getElementById('resultString')
const firstNum = document.getElementById('firstNum')
const secondNum = document.getElementById('secondNum')
const submitbtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiplyBtn.onclick = function () {
    action = '*'
}

divideBtn.onclick = function () {
    action = '/'
}

function printResult(result) {
     if (result < 0 ) {
        submitElement.style.color = 'red'
        } else {
        submitElement.style.color = 'green'
        }
        submitElement.textContent = result
    }


submitbtn.onclick = function () {
    if (action == '+') {
        const sum = Number(firstNum.value) + Number(secondNum.value) 
    printResult(sum)
} else if (action == '-') {
        const sum = Number(firstNum.value) - Number(secondNum.value) 
    printResult(sum)
} else if (action == '*') {
        const sum = Number(firstNum.value) * Number(secondNum.value) 
    submitElement.textContent = sum 
} else if (action == '/') {
        const sum = Number(firstNum.value) / Number(secondNum.value) 
    submitElement.textContent = sum 
}
}

