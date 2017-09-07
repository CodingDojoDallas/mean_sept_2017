class Player {
	constructor(name){
		this.name = name;
		this.hand = {
			cards: [],
			total: 0
		}
	}

	total(){
		let player = this;
		player.hand.total = 0;
		for(let card of player.hand.cards){
			let value = 0;
			console.log(`${player.name} recieved ${card.value} of ${card.suit}`)
			if(typeof card.value === 'string' && card.value != 'Ace'){
				console.log(`${card.value} value is 10`);
				value = 10;
			}
			else if(typeof card.value === 'string' && card.value === 'Ace'){
				if(this.hand.total < 11){
					console.log(`${card.value} value is 11`);
					value = 11
				}
				else {
					value = 1
				}
			}
			else {
				value = card.value
			}
			player.hand.total += value;
			console.log(`total is: ${player.hand.total}`)
		}
	}
}

class Card {
	constructor(suit, value){
		this.suit = suit;
		this.value = value;
	}
}

class Deck {
	constructor(){
		this.cards = [];
		this.reset()
		this.shuffle()
	}

	deal(players, num){
		if(players.constructor != Array){
			players = [players];
		}
		while(num--){
			for(let player of players){
				player.hand.cards.push(this.cards.pop())
			}
		}
		for(let player of players){
			player.total();
		}
	}

	reset(){
		const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
		for(const suit of suits){
			for(let i = 2; i < 15; i++){
				let value;
				switch(i){
					case 11:
						value = 'Jack'
						break;
					case 12:
						value = 'Queen'
						break;
					case 13:
						value = 'King'
						break;
					case 14:
						value = 'Ace'
						break;
					default:
						value = i
				}
				this.cards.push(new Card(suit, value))
			}
		}
	}

	display(){
		for(let card of this.cards){
			console.log(`${card.value} of ${card.suit}`)
		}
	}

	shuffle(){
		let m = this.cards.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.cards[m];
            this.cards[m] = this.cards[i]
            this.cards[i] = t;
        }
        console.log(`Cards are being shuffled`)
        return this.cards
	}

	hit(players, num){
		if(players.hand.total < 16){
			// player.hand.cards.push(this.cards.pop())
			// deck.deal(Cam, 1)
			if(players.constructor != Array){
				players = [players];
			}
			while(num--){
				for(let player of players){
					player.hand.cards.push(this.cards.pop())
				}
			}
			for(let player of players){
				player.total();
			}
		}
	}
}

let deck = new Deck();
let Kevin = new Player('Kevin');

// console.log(Cam.hand)

// deck.reset()
// deck.display()
// deck.shuffle()
// deck.display()

deck.deal(Kevin, 2)
deck.hit(Kevin, 1)



console.log(Kevin.hand)