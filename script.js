let secretNumber;
let resultDisplay = document.getElementById('result');
function randomNumber(){
    secretNumber=Math.floor(Math.random()*100) + 1;
}
randomNumber();

function checkValue(){
    let guess = parseInt(document.getElementById('number').value);

    if(!(guess>1)&&!(guess<100)){
        resultDisplay.innerText="Please enter a value";
        resultDisplay.style.color = "White";
    }
    else if(guess>100||guess<1){
        resultDisplay.innerText="The value must be between 1 and 100";
        resultDisplay.style.color = "Purple";
    }
    else if (guess > secretNumber) {
        resultDisplay.innerText="Too High";
        resultDisplay.style.color = "Red";
    }
    else if(guess<secretNumber) {
        resultDisplay.innerText="Too Low";
        resultDisplay.style.color = "Blue";
    }
    else {
        resultDisplay.innerText="You got it!";
        resultDisplay.style.color = "Green";
        pointCounter();
    }
}

