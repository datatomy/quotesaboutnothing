/// All Quotes Array of Objects.
let allQuotes = [
    { quote: 'Not that there`s anything wrong with it.', author: 'Jerry Seinfeld', season: 1, episode: 1 },
    { quote: 'Are you still master of your domain?', author: 'George Constanza', season: 2, episode: 2 },
    { quote: 'Hello, Newman!', author: 'Kramer', season: 3, episode: 3 },
    { quote: 'You´re so good looking.', author: 'Elaine Benes', season: 4, episode: 4 },
    { quote: 'Not that there`s anything wrong with it.', author: 'Jerry Seinfeld', season: 5, episode: 1 },
    { quote: 'Are you still master of your domain?', author: 'George Constanza', season: 6, episode: 2 },
    { quote: 'Hello, Newman!', author: 'Kramer', season: 7, episode: 3 },
    { quote: 'You´re so good looking.', author: 'Elaine Benes', season: 8, episode: 4 },
    { quote: 'You´re so good looking.', author: 'Elaine Benes', season: 9, episode: 4 }
];

/// Start of the main function of display Quote.
function displayQuote(){


/// Select the number of the quote.
let index = Math.floor(Math.random()*allQuotes.length);
allQuotes[index];


/// Fill with a "0" te episode text.
function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // siempre devuelve tipo cadena
}

let episodeWithZero = zeroFill(allQuotes[index].episode, 2);


/// Display the quote.
let theQuote = document.querySelector('#the-quote');
theQuote.style.textAlign = 'left';
let theAuthor = document.querySelector('#the-author');
let pushQuote = `"${allQuotes[index].quote}"`;
let pushAuthor = `- ${allQuotes[index].author} (S0${allQuotes[index].season}E${episodeWithZero})`;

theQuote.innerHTML = pushQuote;
theAuthor.innerHTML = pushAuthor;


/// Change the img of the logos.

    /// Variables of imgs and CSS variables
let idStart = document.getElementById('logo-start')
let idSeason12 = document.getElementById('logo-12')
let idSeason3 = document.getElementById('logo-3')
let idSeason4 = document.getElementById('logo-4')
let idSeason5 = document.getElementById('logo-5')
let idSeason6 = document.getElementById('logo-6')
let idSeason7 = document.getElementById('logo-7')
let idSeason8 = document.getElementById('logo-8')
let idSeason9 = document.getElementById('logo-9')
let root = document.documentElement;
///root.style.setProperty('--background', 'red');


///season12 /// --main-color: #e30922; --background: #fcd720;
///season3 /// --background: #fcc805; --main-color: #0495f7; 
///season4 /// --main-color: black;
    // --border: 3px solid var(--main-color);
    // --shadow: 5px 5px .1px #4004c8;
    // --background: #cbcacc;
    // --background-color: #cbcacc;
    // --color: black;
///season5 /// --main-color: #1853fe; --shadow: 5px 5px .1px #534c54; --background: #e2e0e2;
///season6 /// --main-color: #001ea0; --shadow: 5px 5px .1px #009a18; --background: #66fd92;












/// Change the img of the characters.
let idJerry = document.getElementById('jerry-seinfeld');
let idGeorge = document.getElementById('george-constanza');
let idKramer = document.getElementById('kramer');
let idElaine = document.getElementById('elaine-benes');
let idAllCh = document.getElementById('all-characters');

function displayJerry() {
    idGeorge.style.display = 'none';
    idKramer.style.display = 'none';
    idElaine.style.display = 'none';
    idAllCh.style.display = 'none';
    idJerry.style.display = 'block';
};

function displayGeorge() {
    idJerry.style.display = 'none';
    idKramer.style.display = 'none';
    idElaine.style.display = 'none';
    idAllCh.style.display = 'none';
    idGeorge.style.display = 'block';
};

function displayKramer() {
    idJerry.style.display = 'none';
    idElaine.style.display = 'none';
    idGeorge.style.display = 'none';
    idAllCh.style.display = 'none';
    idKramer.style.display = 'block';
};

function displayElaine() {
    idJerry.style.display = 'none';
    idGeorge.style.display = 'none';
    idKramer.style.display = 'none';
    idAllCh.style.display = 'none';
    idElaine.style.display = 'block';
};

if (allQuotes[index].author == "Jerry Seinfeld") {
    displayJerry();
} else if (allQuotes[index].author == "George Constanza") {
    displayGeorge();
} else if (allQuotes[index].author == "Kramer") {
    displayKramer();
} else if (allQuotes[index].author == "Elaine Benes") {
    displayElaine();
}


/// Twitter button.
let newTweetButton = document.getElementById("new-tweet");
let tweetUrl = `https://twitter.com/intent/tweet?text=${pushQuote}%20${pushAuthor}%20#seinfeld`;
newTweetButton.addEventListener('click', function() {
    window.open(`${tweetUrl}`, `_blank`);
});

///End of displayQuote.
}


/// Press the button to get the quote.
let btn = document.querySelector('#new-quote');
btn.addEventListener('click', displayQuote);


