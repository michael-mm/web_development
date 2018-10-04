// Using Program Flow (for loops) to Blackjack

// Loop through arrays with the info we need

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

// Add 13 card values
let values = ['Ace', 'King', 'Queen', 'Jack', 
              'Ten', 'Nine', 'Eight', 'Seven', 'Six',
              'Five', 'Four', 'Three', 'Two'];

// Array to push & hold the suit and its values
let deck = [];

// Loop through all the suits, and for each suit, loop through all the values
for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
  
  for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
    deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
  }
}

for (let i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}
  
let playerCards = [deck[0], deck[2]];


console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);