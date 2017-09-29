class Card {
  constructor(_suit, _value) {
    this.suit = _suit;
    this.value = _value;
  }
}

class Deck {
  constructor() {
    var suits = ['hearts','clubs','diamonds','spades'];
    var values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    this.deck = [];
    for (let value in values) {
      for (let suit in suits) {
        this.deck.push(new Card(suits[suit], value));
      }
    }
  }
  reset() {
    this.deck = [];
  }
  shuffle() {
  var m = this.deck.length, t, i;
  // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    return this.deck;
  }
  deal() {
    // var len = this.deck.length;
    // var i = Math.floor(Math.random() * len);
    return this.deck.pop();
  }
}

class Player {
  constructor(_name) {
    this.name = _name;
    this.hand = [];
  }
  drawHand(num, deck) {
    for (let i = 0; i < num; i++) {
      this.hand.push(deck.deal());
    }
  }
  drawCard(deck) {
    this.hand.push(deck.deal());
  }
  discard(suit, value) {
    var del = new Card(suit, value);
    return this.hand.pop(del);
  }
}

my_deck = new Deck();
console.log(my_deck);
my_deck.shuffle();
console.log(my_deck);
console.log(my_deck.deal());
ninja = new Player("Char Char Binks");
ninja.drawHand(20, my_deck);
console.log(ninja);
console.log(ninja.discard('hearts', 4));
console.log(my_deck);