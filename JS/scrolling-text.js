/* ADJUSTABLE VARIABLES */

// delays represented in miliseconds. (so 1000 is a second)
let second = 1000;
let textDelay = 0.05 * second;
let commaDelay = 0.21 * second;
let backspaceDelay = 0.03 * second;

//////////////////////////

/* CONST GLOBAL VARIABLES */
const quoteId = document.getElementById("typed-text");

////////////////////////////

/* BORROWED FUNCTIONS FROM ONLINE */
// Sleep function equivalent to Python Sleep:
// source: https://builtin.com/software-engineering-perspectives/javascript-sleep

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

////////////////////////////

let quotes = [
  {
    text: "Float like a butterfly, sting like a bee",
    author: "Muhammad Ali",
  },
  {
    text: "What doesn't kill you, makes you stronger",
    author: "Friedrich Nietzsche",
  },
  {
    text: "With great power, comes great responsibility",
    author: "Spiderman",
  },
  {
    text: "It ain't about how hard you get hit, it's about how hard you get hit, and keep moving forward",
    author: "Rocky Balboa",
  },
];

// picks a random number between 0 to length of quotes list.
function pickRandomQuote() {
  return Math.floor(Math.random() * quotes.length);
}

function renderUnderscore() {
  let underscore = document.createElement("span");
  underscore.setAttribute("id", "typing-underscore");
  underscore.textContent = "_";
  quoteId.appendChild(underscore);
}

function renderAuthor(quote) {
  let authorText = document.createElement("section");
  authorText.setAttribute("id", "typed-author");
  authorText.textContent = `- ${quote}`;

  quoteId.appendChild(authorText);
}

// CLARITY: This is an arrow function.
const playQuote = async (quote) => {
  let splitQuote = quote["text"].split("");

  let baseQuote_array = [];

  for (let i = 0; i < splitQuote.length; i++) {
    baseQuote_array.push(splitQuote[i]);

    quoteId.textContent = baseQuote_array.join("");

    if (splitQuote[i] === ",") {
      await sleep(commaDelay);
    } else {
      await sleep(textDelay);
    }
  }

  renderUnderscore();
  renderAuthor(quote["author"]);

  await sleep(second * 3);

  backspaceQuote();
};

const backspaceQuote = async () => {
  let splitQuote = quoteId.textContent.split("");

  while (splitQuote.length !== 0) {
    splitQuote.pop();

    quoteId.textContent = splitQuote.join("");

    await sleep(backspaceDelay);
  }
};

playQuote(quotes[pickRandomQuote()]);
