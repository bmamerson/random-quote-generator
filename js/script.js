/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * 'quotes' array 
 * This array contains objects representing quotes with various attributes.
 * Each object includes:
 * - 'quote' (string): The text of the quote.
 * - 'source' (string): The person or character who said the quote.
 * - 'citation' (string, optional): The source of the quote (e.g., book, movie, speech).
 * - 'year' (string, optional): The year the quote originated.
 * - 'tags' (string, optional): A category or theme related to the quote (e.g., "Inspiration", "Politics").
 ***/
const quotes = [
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas Edison",
    citation: "Attributed in writings about his work on the light bulb",
    tags: "Innovation"
  },
  {
    quote: "Why so serious?",
    source: "The Joker",
    citation: "The Dark Knight (film)",
    year: "2008",
    tags: "Pop Culture"
  },
  {
    quote: "In politics, stupidity is not a handicap.",
    source: "Napoleon Bonaparte",
    year: "Early 1800s"
  },
  {
    quote: "Stay hungry, stay foolish.",
    source: "Steve Jobs",
    citation: "Stanford University Commencement Speech",
    year: "2005",
    tags: "Inspiration"
  },
  {
    quote: "Do or do not. There is no try",
    source: "Yoda",
    citation: "Star Wars: Episode V – The Empire Strikes Back",
    year: "1980",
    tags: "Pop Culture"
  }
]

// Variable to store the previously generated random number
// Initialize with a value outside the possible range of indices
let previousRandomNumber = -1;

/***
 * Function to get a random quote from the provided array
***/
function getRandomQuote(array) {
  let newRandomNumber;  

  // Generate a random number that is not the same as the previous one
  do {
    newRandomNumber = Math.floor( Math.random() * array.length );
  } while ( newRandomNumber === previousRandomNumber);

  previousRandomNumber = newRandomNumber;
 
  return array[newRandomNumber];
}

/***
 * Function to generate a random value between 0 and 255 for RGB color
***/
const getColorValue = () => {
  return Math.floor( Math.random() * 256 );
}

/***
 * Function to get a random color to update the background-color on the body tag
***/
function randomBackgroundColor() {
  const backgroundColor = `rgb( ${getColorValue()}, ${getColorValue()}, ${getColorValue()} )`;

  document.querySelector('body').style.backgroundColor = backgroundColor;
}

/***
 * Function generates a random quote, formats it into HTML,
 * and displays it inside the element with the ID 'quote-box'.
***/
function printQuote() {
  // Get a random quote object from the 'quotes' array
  const randomQuote = getRandomQuote(quotes);

  randomBackgroundColor();

  // Start constructing the HTML string with the quote and source
  let quote = `<p class="quote">${randomQuote.quote}</p>
               <p class="source">${randomQuote.source}`;

  // Add the citation, year, or tags if they exist in the randomQuote object
  if (randomQuote.citation){
    quote += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year){
    quote += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.tags){
    quote += `<span class="tags">${randomQuote.tags}</span>`;
  }

  // Close the HTML string
  quote += "</p>";

  // Set the generated HTML as the content of the element with ID 'quote-box'
  return document.getElementById('quote-box').innerHTML = quote;
}

function changeQuote() {
  // Pass the 'printQuote' function as a reference to 'setInterval'
  setInterval(printQuote, 10000); // Call 'printQuote' every 10 seconds
}

// Call the function to start the quote change
changeQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);