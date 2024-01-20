document.addEventListener("DOMContentLoaded", load)
const screen = document.querySelector("#screen")
function load () {
    calculator()
}

function  calculator() {
    const numbers = document.querySelectorAll(".num")
    const operators = document.querySelectorAll(".oper")
    const ac = document.querySelector("#clear")
    const equal = document.querySelector("#equal")
    const backspace = document.querySelector("#del")
    backspace.addEventListener("click", ()=> {
        const currentValue = screen.value
        screen.value = currentValue.slice(0, -1)
    })
    numbers.forEach(number => {
        number.addEventListener("click", () =>{
            display(number.textContent)
        })
    })

    operators.forEach(operator => {
        operator.addEventListener("click", () =>{
            display(operator.textContent)
        })
    })
    ac.addEventListener('click',()=>{
        screen.value = ''
    })
    equal.addEventListener('click', calculate)
}

function display(value) {
    if (value == '/' || value == '%') {
        screen.value += `${value}`
    } else {
        screen.value += value
    }
}


function calculate() {
    screen.value = eval(screen.value)
}

