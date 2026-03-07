function closePage(){
    alert("Thank you for visiting!");
    window.close();
}

function component1(){
    document.getElementById("portfolioContent").innerHTML = "";

    function convertTemperature(input) {
        input = input.toLowerCase().trim();

        let value = parseFloat(input);

        if (isNaN(value)) {
            alert("Invalid temperature value.");
            return;
        }

        if (input.includes("c")) {
            let fahrenheit = (value * 9/5) + 32;
            alert(value + "°C is equal to " + fahrenheit.toFixed(2) + "°F");
        } 
        else if (input.includes("f")) {
            let celsius = (value - 32) * 5/9;
            alert(value + "°F is equal to " + celsius.toFixed(2) + "°C");
        } 
        else {
            alert("Please include C/celsius or F/fahrenheit in your input.");
        }
    }

    let userInput = prompt("Enter temperature (example: 30C or 100F):");
    convertTemperature(userInput);
}

function component2(){
    document.getElementById("portfolioContent").innerHTML = "";

    let word1 = prompt("Enter Word1")?.toLowerCase().trim() ?? null;
    if (word1 === null ) {
        alert("process cancelled.");
        return;
    }
    

    if (!isNaN(word1)) {
        alert("Invalid input. Please enter valid words.");
        return;
    }
    let word2 = prompt("Enter Word2")?.toLowerCase().trim() ?? null;
    if (word2 === null) {
        alert("process cancelled.");
        return;
    }
    if (!isNaN(word2)) {
        alert("Invalid input. Please enter valid words.");
        return;
    }
    else if (word1.length > word2.length) {
        alert(`${word1} is longer than ${word2}.`);
    }
    else if (word1.length < word2.length) {
        alert(`${word2} is longer than ${word1}.`);
    }
    else {
        alert("both words are the same length.");
    }

}

function component3(){
    document.getElementById("portfolioContent").innerHTML = "";
    
    month = prompt("Enter your birthday:")?.toLowerCase().trim() ?? null;
    if (month === null) {
        alert("process cancelled.");
        return;
    }
    if (!isNaN(month)) {
        alert("Invalid input. Please enter a valid month.");
        return;
    }

    switch(month) {

    case "january":
        alert (` your birthday is in January, your birthstone is Garnet`);
        break;
    case "february":
        alert (` your birthday is in February, your birthstone is Amethyst`);
        break;
    case "march":
        alert (` your birthday is in March, your birthstone is Aquamarine`);
        break;
    case "april":
        alert (` your birthday is in April, your birthstone is Diamond`);
        break;
    case "may":
        alert (` your birthday is in May, your birthstone is Emerald`);
        break;
    case "june":
        alert (` your birthday is in June, your birthstone is Alexandrite & Pearl`);
        break;
    case "july":
        alert (` your birthday is in July, your birthstone is Ruby`);
        break;
    case "august":
        alert (` your birthday is in August, your birthstone is Peridot`);
        break;
    case "september":
        alert (` your birthday is in September, your birthstone is Sapphire`);
        break;
    case "october":
        alert (` your birthday is in October, your birthstone is Opal & Tourmaline`);
        break;
    case "november":
        alert (` your birthday is in November, your birthstone is Citrine & Topaz`);
        break;
    case "december":
        alert (` your birthday is in December, your birthstone is Blue Topaz, Zircon, & Tanzanite`);
        break;
    default:
        alert (`Invalid Input .You can try again.`)

    }
}

function component4() {

    document.getElementById("portfolioContent").innerHTML = "";

    const validOperations = ["+", "-", "*", "/", "sum", "diff", "product", "quotient"];
    let op, num1, num2;

    // OPERATION INPUT
    while (true) {
        op = prompt("Choose operation\n+ || Sum\n- || Diff\n* || Product\n/ || Quotient")?.toLowerCase().trim();

        if (op === null) {
            alert("Process cancelled.");
            return;
        }

        if (validOperations.includes(op)) break;

        alert("Invalid operation. Try again.");
    }

    // NUM1 INPUT
    while (true) {
        let input = prompt("Enter num1:");

        if (input === null) {
            alert("Process cancelled.");
            return;
        }

        num1 = Number(input.trim());

        if (!isNaN(num1)) break;

        alert("Invalid number. Try again.");
    }

    // NUM2 INPUT
    while (true) {
        let input = prompt("Enter num2:");

        if (input === null) {
            alert("Process cancelled.");
            return;
        }

        num2 = Number(input.trim());

        if (!isNaN(num2)) break;

        alert("Invalid number. Try again.");
    }

    // CALCULATION
    switch (op) {

        case "+":
        case "sum":
            alert(`Sum: ${num1 + num2}`);
            break;

        case "-":
        case "diff":
            alert(`Difference: ${num1 - num2}`);
            break;

        case "*":
        case "product":
            alert(`Product: ${num1 * num2}`);
            break;

        case "/":
        case "quotient":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
            } else {
                alert(`Quotient: ${num1 / num2}`);
            }
            break;
    }
}

function component5() {

    document.getElementById("portfolioContent").innerHTML = "";

    function computeAcceleration(u, v, t) {
        if (t === 0) {
            alert("Time cannot be zero.");
            return;
        }

        acceleration = (v - u) / t;
        alert("Acceleration is: " + acceleration + " m/s²");
    }
    let u, v, t;
    while (true) {
        u = prompt("Enter initial velocity (m/s):");
        if (u === null) {
            alert("Process cancelled.");
            return;
        }
        u = Number(u.trim());
        if (!isNaN(u)) break;
        alert("Invalid number. Try again.");
    }
    while (true) {
        v = prompt("Enter final velocity (m/s):");
        if (v === null) {
            alert("Process cancelled.");
            return;
        }
        v = Number(v.trim());
        if (!isNaN(v)) break;
        alert("Invalid number. Try again.");
    }

    while (true) {
        t = prompt("Enter time taken (s):");
        if (t === null) {
            alert("Process cancelled.");
            return;
        }
        t = Number(t.trim());
        if (!isNaN(t)) break;
        alert("Invalid number. Try again.");
    }
    computeAcceleration(u, v, t);
}

