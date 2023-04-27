function validateEntry(value) {
    //Checks to make sure value can be parsed to a float, and if it can't this won't return true, which won't allow getShape() to execute
    if (isNaN(parseFloat(value)) == false) {
        return true;
    }
    return false;
}

function getShape() {
    //Uses validateEntry() to make sure this function should execute, and if it does, it uses a switch block to determine what to fill
    //the messgae element with. 
    if (validateEntry(document.getElementById("numberSides").value) == true) {
        let numberOfSides = parseFloat(document.getElementById("numberSides").value);
        numberOfSides = Math.round(Math.abs(numberOfSides));
        switch (numberOfSides) {
            case 0: 
            document.getElementById("shapeName").innerText = "This is not a shape!";
            break;
            case 1: 
            document.getElementById("shapeName").innerText = "This is a monogon!";
            break;
            case 2: 
            document.getElementById("shapeName").innerText = "This is a bigon!";
            break;
            case 3: 
            document.getElementById("shapeName").innerText = "This is a triangle!";
            break;
            case 4: 
            document.getElementById("shapeName").innerText = "This is a quadrilateral!";
            break;
            case 5: 
            document.getElementById("shapeName").innerText = "This is a pentagon!";
            break;
            case 6: 
            document.getElementById("shapeName").innerText = "This is a hexagon!";
            break;
            case 7: 
            document.getElementById("shapeName").innerText = "This is a heptagon!";
            break;
            case 8: 
            document.getElementById("shapeName").innerText = "This is a octagon!";
            break;
            case 9: 
            document.getElementById("shapeName").innerText = "This is a enneagon!";
            break;
            case 10: 
            document.getElementById("shapeName").innerText = "This is a hendecagon!";
            break;
        }
    }
}

