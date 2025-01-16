var quotes = [
  "The best way to predict the future is to create it.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Be the change that you wish to see in the world.",
  "In the middle of every difficulty lies opportunity.",
  "Do what you can, with what you have, where you are.",
  "Success usually comes to those who are too busy to be looking for it."
];

var quoteElement = document.getElementById("quote");
var newQuoteButton = document.getElementById("newQuoteButton");

newQuoteButton.onclick = function () {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerHTML = quotes[randomIndex];
};
