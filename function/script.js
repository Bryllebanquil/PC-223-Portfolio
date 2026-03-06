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

    let word1 = prompt("Enter Word1");
    if (!isNaN(word1)) {
        alert("Invalid, please enter letters only.");
    } else {
        let word2 = prompt("Enter Word2");
        if (!isNaN(word2)) {
            alert("Invalid, please enter letters only.");
        } else if (word1.length > word2.length) {
            alert(`${word1} is the longer word`);
        } else if (word1.length < word2.length) {
            alert(`${word2} is the longer word`);
        } else {
            alert("Both words have the same length");
        }
    }
}

function component3(){
    document.getElementById("portfolioContent").innerHTML = "";
    
    month = prompt("Enter your birthday:").toLowerCase().trim()

    switch(month) {

    case "january":
        alert (`Garnet`);
        break;
    case "february":
        alert (`Amethyst`);
        break;
    case "march":
        alert (`Aquamarine`);
        break;
    case "april":
        alert (`Diamond`);
        break;
    case "may":
        alert (`Emerald`);
        break;
    case "june":
        alert (`Alexandrite & Pearl`);
        break;
    case "july":
        alert (`Ruby`);
        break;
    case "august":
        alert (`Peridot`);
        break;
    case "september":
        alert (`Sapphire`);
        break;
    case "october":
        alert (`Opal & Tourmaline`);
        break;
    case "november":
        alert (`Citrine & Topaz`);
        break;
    case "december":
        alert (`Blue Topaz, Zircon, & Tanzanite`);
        break;
    default:
        alert (`Invalid Input .You can try again.`)

    }
}

function component4(){
    document.getElementById("portfolioContent").innerHTML = "";
    num1 = parseInt(prompt("Enter num1:"))
    num2 =parseInt(prompt("Enter num2:"))
    op = prompt("Choose operation (+/-/*//):")

    switch(op){

        case "+":
        case "A":
            alert (`Sum is:${num1 + num2}`);
            break;
        case "-":
        case "B":
            alert (`Diff:${num1 - num2}`)
            break;
        case "*":
        case "C":
            alert (`Product:${num1 * num2}`)
            break;
        case "/":
        case "D":
            if (num1 == 0 || num2 == 0) {
                alert("Invalid");
            }
            else{
                alert(`Div:${num1 / num2}`);
            }
        default:
            alert ("Invalid");
           
    }

}

function component5(){
    document.getElementById("portfolioContent").innerHTML = "";

    function computeAcceleration(u, v, t) {
        if (t === 0) {
            alert("Time cannot be zero.");
            return;
        }

        let acceleration = (v - u) / t;
        alert("Acceleration is: " + acceleration + " m/s²");
    }

    let initialVelocity = parseFloat(prompt("Enter initial velocity (m/s):"));
    let finalVelocity = parseFloat(prompt("Enter final velocity (m/s):"));
    let time = parseFloat(prompt("Enter time (seconds):"));

    computeAcceleration(initialVelocity, finalVelocity, time);
}

function toggleHeart(element) {
    element.classList.toggle("active");
    element.textContent = element.classList.contains("active") ? "♥" : "♡";
}

function addComment(button) {
    const card = button.closest(".card");
    const commentInput = card.querySelector(".comment");
    const display = card.querySelector(".display-comment");

    if (commentInput.value.trim() === "") {
        alert("Please write a comment.");
        return;
    }

    const p = document.createElement("p");
    p.textContent = commentInput.value;
    display.prepend(p);

    commentInput.value = "";
}