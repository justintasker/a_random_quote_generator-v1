/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array
***/
var quotes = [
    {  quote: "I would have gone with you to the end. Into the very fires of Mordor ",
      source: "Aragorn",
      citation: "The Fellowship of the Ring",
      year: "2001"
  },
    {   quote: "There's some good in this world, Mr. Frodo... and it's worth fighting for ",
      source: " Sam Gamgee",
      citation: "The Fellowship of the Ring",
      year: "2001"
  },
    {   quote: "A hunted man sometimes wearies of distrust and longs for friendship ",
      source: "Aragorn",
      citation: "The Fellowship of the Ring",
      year: "2001"
  },
    {   quote: "All we have to decide is what to do with the time that is given to us ",
      source: "Gandalf",
      citation: "The Fellowship of the Ring",
      year: "2001"
  },
    {   quote: "It is not the strength of the body, but the strength of the spirit ",
      source: "J.R.R. Tolkien"
}
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
var randomQuote  = Math.floor ( Math.random() * quotes.length  ) ;
return quotes[randomQuote];
}

/***
 * `printQuote` function
***/
function printQuote() {
displayQuote = getRandomQuote()
htmlString = ' ';
htmlString += "<p  class = 'quote' >" + displayQuote.quote + '</p>';
htmlString += "<p class = 'source'>" + displayQuote.source;

if  ( displayQuote.citation != " " ) {
 htmlString += '<span class="citation">' + displayQuote.citation + '</span>';
}
if ( displayQuote.year != " " ) {
 htmlString += '<span class="year">' + displayQuote.year + '</span>';

 htmlString += "</p>"
}
document.getElementById('quote-box').innerHTML = htmlString;
}


/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
