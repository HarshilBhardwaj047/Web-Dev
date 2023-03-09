var num1, num2, operator;

function getNumber(num) {
    if (operator == null) {
        num1 = document.getElementById("result").value += num;
    } else {
        num2 = document.getElementById("result").value += num;
    }
}

function getOperator(op) {
    operator = op;
    document.getElementById("result").value = "";
}

function clearScreen() {
    num1 = null;
    num2 = null;
    operator = null;
    document.getElementById("result").value = "";
}

function calculate() {
    var result;
    switch (operator) {
        case "+":
            result = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    document.getElementById("result").value = result;
}