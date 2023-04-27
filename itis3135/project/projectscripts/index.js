function math() {
    document.getElementById("result1").innerHTML = "";
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    console.log(num1);
    var operator = document.getElementById("operator").value;
    console.log(operator);
    if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
        alert("The operator must be one of the following: '+', '-', '*', '/'");
        return false;
    }
    let result = 0;
    if (operator == "+") {
        result = num1 + num2;
        document.getElementById("result1").innerHTML += result.toLocaleString();
    }
    else if (operator == "-") {
        result = num1 - num2;
        document.getElementById("result1").innerHTML += result.toLocaleString();

    }
    else if (operator == "*") {
        result = num1 * num2;
        document.getElementById("result1").innerHTML += result.toLocaleString();
    }
    else if (operator == "/") {
        console.log(num1 / num2);
        result = num1 / num2;
        document.getElementById("result1").innerHTML += result.toLocaleString();
    }
}

function answer() {
    var result = document.getElementById("q1s").value;
    if (result == "meaning") {
        document.getElementById("videoload").setAttribute('src', 'videos/')
    }
    else if (result == "prayers") {
        document.getElementById("videoload").setAttribute('src', 'videos/')
    }
    else if (result == "milk") {
        document.getElementById("videoload").setAttribute('src', 'videos/')
    }
    else if (result == "audio") {
        document.getElementById("videoload").setAttribute('src', 'videos/')
    }
}

