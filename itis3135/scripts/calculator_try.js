window.onload = function() {
    document.getElementById("1").onclick = showNum;
    document.getElementById("2").onclick = showNum;
    document.getElementById("3").onclick = showNum;
    document.getElementById("4").onclick = showNum;
    document.getElementById("5").onclick = showNum;
    document.getElementById("6").onclick = showNum;
    document.getElementById("7").onclick = showNum;
    document.getElementById("8").onclick = showNum;
    document.getElementById("9").onclick = showNum;
    document.getElementById("0").onclick = showNum;
    document.getElementById("+").onclick = showNum;
    document.getElementById("-").onclick = showNum;
    document.getElementById("x").onclick = showNum;
    document.getElementById("/").onclick = showNum;
    document.getElementById(".").onclick = showNum;
    document.getElementById("ac").onclick = showNum;
    document.getElementById("neg").onclick = showNum;
    document.getElementById("=").onclick = showNum;
};

var outputNumber = 0;
var operation = "";
var tempOperation = "";

function showNum() {
    number = this.textContent;

    if (isNaN(number) == false) {
        document.getElementById("display").innerHTML += number;
    }
    else if (number == "Neg" && document.getElementById("display").innerHTML.includes('-') == false) {
        document.getElementById("display").innerHTML = '-' + document.getElementById("display").innerHTML;
    }
    else if (number == '.' && document.getElementById("display").innerHTML.includes('.') == false) {
        document.getElementById("display").innerHTML += number;
    }
    else if (number == 'AC') {
        document.getElementById("display").innerHTML = "";
        outputNumber = 0;
    }
    if (number == "+") {
        operation = "addition";
        if (document.getElementById("display").innerHTML != "") {
            outputNumber = parseFloat(document.getElementById("display").innerHTML);
            document.getElementById("display").innerHTML = "";
        }
        else {
            outputNumber = outputNumber;
        }
    }
    else if (number == "-") {
        operation = "subtraction";
        if (document.getElementById("display").innerHTML != "") {
            outputNumber = parseFloat(document.getElementById("display").innerHTML);
            document.getElementById("display").innerHTML = "";
        }
        else {
            outputNumber = outputNumber;
        }
    }
    else if (number == "x" ){
        operation = "multiplication";
        if (document.getElementById("display").innerHTML != "") {
            outputNumber = parseFloat(document.getElementById("display").innerHTML);
            document.getElementById("display").innerHTML = "";
        }
        else {
            outputNumber = outputNumber;
        }
    }
    else if (number == "/" ){
        operation = "division";
        if (document.getElementById("display").innerHTML != "") {
            outputNumber = parseFloat(document.getElementById("display").innerHTML);
            document.getElementById("display").innerHTML = "";
        }
        else {
            outputNumber = outputNumber;
        }
    }
    else if (number == "=") {
        let newNumber = parseFloat(document.getElementById("display").innerHTML);
        console.log(newNumber);
        console.log(operation);
        if (operation == "addition") {
            outputNumber += newNumber;
            document.getElementById("display").innerHTML = outputNumber;
            operation = "";
        }
        else if (operation == "subtraction") {
            outputNumber -= newNumber;
            document.getElementById("display").innerHTML = outputNumber;
            operation = "";


        }
        else if (operation == "multiplication") {
            outputNumber *= newNumber;
            document.getElementById("display").innerHTML = outputNumber;
            operation = "";


        }
        else if (operation == "division") {
            outputNumber /= newNumber;
            document.getElementById("display").innerHTML = outputNumber;
            operation = "";

        }
    }

}