// Game Data
const symbols = ["A","B","C","D","E","F","G","H"];


// HTML Elements
const gameBoard = document.getElementById("game-board");
const movesElement = document.getElementById("moves");
const matchesElement = document.getElementById("matches");
const messageElement = document.getElementById("message");
const restartButton = document.getElementById("restart-btn");


// Game Variables
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matches = 0;


// Start Game
function startGame() {

    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;
    matches = 0;

    movesElement.textContent = moves;
    matchesElement.textContent = matches;
    messageElement.textContent = "";
    gameBoard.innerHTML = "";


    // Create pairs
    const cardSymbols = [
        ...symbols,
        ...symbols
    ];


    // Shuffle cards
    cardSymbols.sort(() => Math.random() - 0.5);


    // Create card elements
    cardSymbols.forEach((symbol) => {

        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.innerHTML = `
            <span class="card-content">
                ${symbol}
            </span>
        `;


        card.addEventListener("click", () => {
            flipCard(card);
        });


        gameBoard.appendChild(card);

    });

}


// Flip Card

function flipCard(card) {

    // Prevent invalid clicks

    if (
        lockBoard ||
        card === firstCard ||
        card.classList.contains("flipped") ||
        card.classList.contains("matched")
    ) {
        return;
    }


    // Show card
    card.classList.add("flipped");


    // First card
    if (firstCard === null) {
        firstCard = card;
        return;
    }


    // Second card
    secondCard = card;
    moves++;
    movesElement.textContent = moves;
    checkMatch();

}


// Check Match

function checkMatch() {

    const isMatch =
        firstCard.dataset.symbol ===
        secondCard.dataset.symbol;


    if (isMatch) {
        handleMatch();
    } else {
        handleMismatch();
    }

}


// Handle Match

function handleMatch() {

    firstCard.classList.add("matched");

    secondCard.classList.add("matched");

    matches++;

    matchesElement.textContent = matches;


    resetTurn();


    // Check if all cards are matched

    if (matches === symbols.length) {

        messageElement.textContent =
            `You Win! You completed the game in ${moves} moves.`;

    }

}


// Handle Wrong Match

function handleMismatch() {

    lockBoard = true;


    setTimeout(() => {

        firstCard.classList.remove("flipped");

        secondCard.classList.remove("flipped");

        resetTurn();

    }, 800);

}


// Reset Turn

function resetTurn() {

    firstCard = null;

    secondCard = null;

    lockBoard = false;

}


// Restart Game

restartButton.addEventListener(
    "click",
    startGame
);


// Start Application

startGame();

