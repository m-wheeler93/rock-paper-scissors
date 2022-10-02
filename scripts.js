const playerDisplay = document.getElementById("user-choice");
const computerDisplay = document.getElementById("computer-choice");
const result = document.getElementById("result");
const options = document.querySelectorAll("button");
let playerChoice;
let computerChoice;

options.forEach((option) =>
	option.addEventListener("click", (e) => {
		playerChoice = e.target.innerHTML;
		playerDisplay.innerHTML = playerChoice;
		computerDecision();
	})
);

function computerDecision() {
	const optionNumber = Math.floor(Math.random() * options.length);

	if (optionNumber === 1) {
		computerChoice = "ROCK";
	} else if (optionNumber === 2) {
		computerChoice = "PAPER";
	} else {
		computerChoice = "SCISSORS";
	}

	computerDisplay.innerHTML = computerChoice;

	decideWinner();
}

function decideWinner() {
	if (
		(computerChoice === "ROCK" && playerChoice === "SCISSORS") ||
		(computerChoice === "PAPER" && playerChoice === "ROCK") ||
		(computerChoice === "SCISSORS" && playerChoice === "PAPER")
	) {
		result.style.color = "red";
		result.innerHTML = "Sorry, you lose!";
	} else if (
		(computerChoice === "ROCK" && playerChoice === "ROCK") ||
		(computerChoice === "PAPER" && playerChoice === "PAPER") ||
		(computerChoice === "SCISSORS" && playerChoice === "SCISSORS")
	) {
		result.style.color = "whitesmoke";
		result.innerHTML = "It's a Tie!";
	} else if (
		(computerChoice === "SCISSORS" && playerChoice === "ROCK") ||
		(computerChoice === "PAPER" && playerChoice === "SCISSORS") ||
		(computerChoice === "ROCK" && playerChoice === "PAPER")
	) {
		result.style.color = "lime";
		result.innerHTML = "You Win!";
	}
}
