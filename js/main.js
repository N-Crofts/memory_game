console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"]; 

var cardsInPlay = [];

var flipCard = function(cardsId) {
	console.log("User flipped " + cards[cardsId]);
	cardsInPlay.push(cards[cardsId]);
}

flipCard(0);
flipCard(2);

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1])	{
		alert("You've found a match!");
	} else {
		alert("Sorry, try again");
	}
}

checkForMatch();

