window.onload = function showDate() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Januar", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const date = new Date();
    let numberDay = date.getDay();
    let day = weekday[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let currentDate = `${time} on ${day} ${month} ${numberDay} ${year}`;
    document.getElementById("datetime").innerHTML = currentDate.toLocaleString();
}    
function message() {
    let userName = document.getElementById("name").value;
    let mood = document.getElementById("mood").value;
    let messageBack = `The brantleysoftware co. welcomes you, ${userName}! We're glad you are doing ${mood}!`;
    document.getElementById("message").innerHTML = messageBack.toLocaleString();
}

function calculateTotal() {
    let firstnumber = parseInt(document.getElementById("firstnumber").value);
    let secondnumber = parseInt(document.getElementById("secondnumber").value);
    let total = firstnumber + secondnumber;
    document.getElementById("total").innerHTML = total.toLocaleString();
}

function calculateTax() {
    let number = parseFloat(document.getElementById("taxNumber").value);
    let taxedNumber = (number * 1.07).toFixed(2);
    document.getElementById("taxation").innerHTML = taxedNumber.toLocaleString();
}

function calculateShipping() {
    let shipping = parseFloat(document.getElementById("price").value);
    let totalAndShipping = (shipping + 6.25).toFixed(2);
    document.getElementById("shipping").innerHTML = totalAndShipping.toLocaleString();
}

function mascotMessage() {
    let phrase = `Beefy Buffalo says "${document.getElementById("phrase").value}!"`;
    document.getElementById("catchPhrase").innerHTML = phrase.toLocaleString();
}

function surnameResponse() {
    let surname = `Hello Mr./Mrs. ${document.getElementById("surname").value}!`;
    document.getElementById("surnameMessage").innerHTML = surname.toLocaleString();
}

$(document).ready(function() {
    $('#header').load('components/header.html');
});