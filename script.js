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


    /// Functions to display styles.
function displaySeason12() {
    idStart.style.display = 'none';
    idSeason3.style.display = 'none';
    idSeason4.style.display = 'none';
    idSeason5.style.display = 'none';
    idSeason6.style.display = 'none';
    idSeason7.style.display = 'none';
    idSeason8.style.display = 'none';
    idSeason9.style.display = 'none';
    idSeason12.style.display = 'block';
    root.style.setProperty('--main-color', '#e30922');
    root.style.setProperty('--background', '#fcd720');
    root.style.setProperty('--shadow', '5px 5px .1px black');
}

function displaySeason3() {
    idStart.style.display = 'none';
    idSeason4.style.display = 'none';
    idSeason5.style.display = 'none';
    idSeason6.style.display = 'none';
    idSeason7.style.display = 'none';
    idSeason8.style.display = 'none';
    idSeason9.style.display = 'none';
    idSeason12.style.display = 'none';
    idSeason3.style.display = 'block';
    root.style.setProperty('--main-color', '#e93f33');
    root.style.setProperty('--background', '#2d97fb');
    root.style.setProperty('--shadow', '5px 5px .1px #060606');
}

function displaySeason4() {
    idStart.style.display = 'none';
    idSeason3.style.display = 'none';
    idSeason5.style.display = 'none';
    idSeason6.style.display = 'none';
    idSeason7.style.display = 'none';
    idSeason8.style.display = 'none';
    idSeason9.style.display = 'none';
    idSeason12.style.display = 'none';
    idSeason4.style.display = 'block';
    root.style.setProperty('--main-color', '#fad34c');
    root.style.setProperty('--background', '#cbcacc');
    root.style.setProperty('--shadow', '5px 5px .1px #473bc7');
}

function displaySeason5() {
    idStart.style.display = 'none';
    idSeason3.style.display = 'none';
    idSeason4.style.display = 'none';
    idSeason6.style.display = 'none';
    idSeason7.style.display = 'none';
    idSeason8.style.display = 'none';
    idSeason9.style.display = 'none';
    idSeason12.style.display = 'none';
    idSeason5.style.display = 'block';
    root.style.setProperty('--main-color', '#1853fe');
    root.style.setProperty('--background', '#e2e0e2');
    root.style.setProperty('--shadow', '5px 5px .1px #534c54');
}

function displaySeason6() {
    idStart.style.display = 'none';
    idSeason3.style.display = 'none';
    idSeason4.style.display = 'none';
    idSeason5.style.display = 'none';
    idSeason7.style.display = 'none';
    idSeason8.style.display = 'none';
    idSeason9.style.display = 'none';
    idSeason12.style.display = 'none';
    idSeason6.style.display = 'block';
    root.style.setProperty('--main-color', '#001ea0');
    root.style.setProperty('--background', '#66fd92');
    root.style.setProperty('--shadow', '5px 5px .1px #009a18');
}

function displaySeason7() {
    idStart.style.display = 'none';
    idSeason3.style.display = 'none';
    idSeason4.style.display = 'none';
    idSeason5.style.display = 'none';
    idSeason6.style.display = 'none';
    idSeason8.style.display = 'none';
    idSeason9.style.display = 'none';
    idSeason12.style.display = 'none';
    idSeason7.style.display = 'block';
    root.style.setProperty('--main-color', '#f4f62e');
    root.style.setProperty('--background', '#7a5451');
    root.style.setProperty('--shadow', '5px 5px .1px #21481f');
}

function displaySeason8() {
    idStart.style.display = 'none';
    idSeason3.style.display = 'none';
    idSeason4.style.display = 'none';
    idSeason5.style.display = 'none';
    idSeason6.style.display = 'none';
    idSeason7.style.display = 'none';
    idSeason9.style.display = 'none';
    idSeason12.style.display = 'none';
    idSeason8.style.display = 'block';
    root.style.setProperty('--main-color', '#2686fb');
    root.style.setProperty('--background', '#b0aeb1');
    root.style.setProperty('--shadow', '5px 5px .1px #020102');
}

function displaySeason9() {
    idStart.style.display = 'none';
    idSeason3.style.display = 'none';
    idSeason4.style.display = 'none';
    idSeason5.style.display = 'none';
    idSeason6.style.display = 'none';
    idSeason7.style.display = 'none';
    idSeason8.style.display = 'none';
    idSeason12.style.display = 'none';
    idSeason9.style.display = 'block';
    root.style.setProperty('--main-color', '#469166');
    root.style.setProperty('--background', '#8282a8');
    root.style.setProperty('--shadow', '5px 5px .1px #020102');
}

if (allQuotes[index].season == 1 || allQuotes[index].season == 2) {
    displaySeason12();
} else if (allQuotes[index].season == 3) {
    displaySeason3();
} else if (allQuotes[index].season == 4) {
    displaySeason4();
} else if (allQuotes[index].season == 5) {
    displaySeason5();
} else if (allQuotes[index].season == 6) {
    displaySeason6();
} else if (allQuotes[index].season == 7) {
    displaySeason7();
} else if (allQuotes[index].season == 8) {
    displaySeason8();
} else if (allQuotes[index].season == 9) {
    displaySeason9();
}


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
newTweetButton.style.display = 'block';
let tweetUrl = `https://twitter.com/intent/tweet?text=${pushQuote}%20${pushAuthor}%20#seinfeld`;
newTweetButton.addEventListener('click', function() {
    window.open(`${tweetUrl}`, `_blank`);
});

/// End of displayQuote.
}


/// Buttons variables.
let newQuoteButton = document.querySelector('#new-quote');
let newTweetButton = document.getElementById("new-tweet");


/// Press the button to get the quote.
newQuoteButton.addEventListener('click', displayQuote);