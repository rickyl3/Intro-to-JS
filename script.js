function greet() {
    console.log("Hello World!");
}
function initialize() {
    num1 = 3;
    num2 = 7;
}
function addNumbers() {
    var result = num1 + num2;
    console.log(result);
}
function subtractNumbers() {

}
function multiplyNumbers() {

}
function divideNumbers() {

}

function shoutTen() {
    console.log("10!");
}

function initializeObject() {
    outputDiv = document.getElementById("divout");
}
function clickResponse() {
    outputDiv.innerHTML = "Now you've clicked the button.";
}

function initializeConditionals() {
    numberOutput = document.getElementById("numberout");
    negativeButton = document.getElementById("negativebtn");

    myNumber = 0;
    negativesAllowed = false;
    display();
}
function addOne() {
    myNumber++;
    display();
}
function subtractOne() {
    myNumber--;
    if (myNumber < 0 && !negativesAllowed) {
        myNumber = 0;
    }
    display();
}
function toggleNegatives() {
    negativesAllowed = !negativesAllowed;
    display();
}
function display() {
    numberOutput.innerHTML = myNumber;
    if (!negativesAllowed) {
        negativeButton.innerHTML = "Negatives are OFF";
    } else {
        negativeButton.innerHTML = "Negatives are ON";
    }
}