var person=["John", "Conner"];
var salaries=[10, 20];
function addSalary(){
    let name = prompt("Enter your name");
    if (/^[A-Za-z]*$/.test(name)) {

    }
    else {
        name = prompt("Please enter your name, only alphabetic letters")
    }
    let salary = parseFloat(prompt("Enter your salary"));
    while (salary === "" || isNaN(salary)) {
        salary = parseFloat(prompt("Please enter your salary, numbers only."))
    }
    person.push(name);
    salaries.push(salary);
}

function displayResults(){
    let avgSal = 0;
    let highestSal = 0;
    for (i = 0; i < salaries.length; i++) {
        avgSal += salaries[i];
        if (salaries[i] > highestSal) {
            highestSal = salaries[i];
        }
    }
    avgSal = avgSal / salaries.length;

    document.getElementById("highestSal").innerHTML = highestSal.toLocaleString();
    document.getElementById("avgSal").innerHTML = avgSal.toLocaleString();
}

function displaySalary(){
    let table = document.getElementById("salTable");
    let headerRow = table.insertRow(0);
    let empName = headerRow.insertCell(0);
    let sal = headerRow.insertCell(1);
    empName.innerHTML = "Employee Names";
    sal.innerHTML = "Salaries";

    for (i = 0; i < person.length; i++) {
        let count = 1;
        let newRow = table.insertRow(count);
        empName = newRow.insertCell(0);
        sal = newRow.insertCell(1);
        empName.innerHTML = person[i].toLocaleString();
        sal.innerHTML = salaries[i].toLocaleString();
        count++;
    }
}

function updateList() {
    var list = document.getElementById("employees");

    for (i = 0; i < person.length; i++) {
        var option = document.createElement("option");
        option.value = person[i];
        option.innerHTML = person[i].toLocaleString();
        list.appendChild(option);
    }
}