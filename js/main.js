
console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
]

var cardsInPlay = [];

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');	
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', function() {
			flipCard(this);
		});
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var flipCard = function (elem) {
	var cardId = elem.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);

	elem.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch(elem, cardId);
	}
}

var checkForMatch = function (elem, cardId) {
	elem.setAttribute('src', cards[cardId].cardImage);
		if (cardsInPlay[0] === cardsInPlay[1])	{
			alert("You've found a match!");
		} else {
			alert("Sorry, try again");
		}
}

createBoard();

