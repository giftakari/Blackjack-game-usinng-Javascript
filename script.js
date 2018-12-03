
let suits = ['Hearts', 'Club', 'Diamond', 'Spades'];
let values = ['Ace', 'King', 'Queen',' Jack',
'Ten','Nine','Eight','Seven','Six','Five',
'Four','Three','Two','One'];


function createDeck(){
let deck = [];

for (let suitsIndex =0; suitsIndex < suits.length; suitsIndex++) {

  for (let valueIndex = 0; valueIndex< values.length; valueIndex++) {
    deck.push(values[valueIndex] + ' of ' + suits[suitsIndex]);
    }
  }
return deck;
}

function getNextCard(){
  return deck.shift();
}

let deck = createDeck();



//Log out the deck cards 

for( let i = 0; i < deck.length; i++ ){
  console.log(deck[i]);
}

let playerCards = [getNextCard(),getNextCard()];