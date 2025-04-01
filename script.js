const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const choices = document.querySelectorAll('button');
const resultsDisplay = document.getElementById('results');
let computerChoice;
let userChoice;
let results;

choices.forEach(choice => choice.addEventListener('click', (e) => 
    {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResults();
        
    }))


    function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        if (randomNumber === 1) {
            computerChoice = 'rock'
        }
        if (randomNumber === 2) {
            computerChoice = 'paper'
        }
        if (randomNumber === 3) {
            computerChoice = 'scissors'
        }

        computerChoiceDisplay.innerHTML = computerChoice;
    } 

    function getResults() {
        if (computerChoice === userChoice) {
            results = 'It is a draw!';
        } 
        if (computerChoice === 'rock' && userChoice === 'paper') {
            results = 'You win!';
        }
        if (computerChoice === 'rock' && userChoice === 'scissors') {
            results = 'You lose!';
        }
        if (computerChoice === 'scissors' && userChoice === 'rock') {
            results = 'You win!';
        }
        if (computerChoice === 'scissors' && userChoice === 'paper') {
            results = 'You lose!';
        }
        if (computerChoice === 'paper' && userChoice === 'rock') {
            results = 'You lose!';
        }
        if (computerChoice === 'paper' && userChoice === 'scissors') {
            results = 'You win!';
        }

        resultsDisplay.innerHTML = results;

    }
