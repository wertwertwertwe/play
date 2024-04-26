function play(userChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = "";
    let result = ""


    document.getElementById("computerChoice").innerText = "Комп'ютер обирає...";
    setTimeout(function () {
        computerChoice = choices[Math.floor(Math.random() * 3)]
        document.getElementById("computerChoice").innerText = "Комп'ютер обрав: " + computerChoice;
    }, 1000)

    setTimeout(function () {
        if (userChoice === computerChoice) {
            result = "Нічия";
        } else if ((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissor" && computerChoice === "paper")) {
            result = "ВИ ПЕРЕМОГЛИ ! "
            document.getElementById('result').className = "win"
        } else {
            result = "Комп'ютер переміг :("
            document.getElementById('result').className = "lose"
        }


        document.getElementById("result").innerHTML = "Ви обрали: " + userChoice + ". " + result;
        document.getElementById("computerChoice").innerHTML = ""

    }, 1500)

}


function restart() {
    document.getElementById("result").innerText = "";
    document.getElementById("result").className = "";
    document.getElementById("computerChoice").innerText = "";
}