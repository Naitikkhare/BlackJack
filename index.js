let cards = []
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let isAlive = false
// let blackJack = false
let sum = 0
let message = ""
let player = {
    name: window.prompt("Enter your name:")
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name 

function startGame() {
    cards = []
    isAlive = true
    let fcard = getRandom()
    let scard = getRandom()
    cards.push(fcard)
    cards.push(scard)
    sum = fcard + scard
    renderGame()
    
}

function getRandom() {
    let rcard =  Math.floor(Math.random() *10)+1
    if( rcard === 1){
        var r = window.prompt("1 or 11 (you got ace)")
        rcard = parseInt(r)
    }
    return rcard
}

function renderGame() {
    cardEl.textContent = "Cards : "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = "Sum : " + sum

    if(sum < 21){
        messageEl.textContent = "Draw a new card!!"
    }
    else if(sum === 21){
        messageEl.textContent = "You got BlackJAck!!"
        isAlive = false;
        // blackJack = true;
    }
    else{
        isAlive = false;
        messageEl.textContent = "You are out of the game"
    }
}

function newCard() {
    if(isAlive){
        let c = getRandom()
        sum += c
        cards.push(c)
        renderGame()
    }
}