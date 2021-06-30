
let allQuotes = [
    { quote: 'Not that there`s anything wrong with it.', author: 'Jerry Seinfeld', season: 1, episode: 1 },
    { quote: 'Are you still master of your domain?', author: 'George Constanza', season: 1, episode: 2 },
    { quote: 'Hello, Newman!', author: 'Kramer', season: 1, episode: 3 },
    { quote: 'You´re so good looking.', author: 'Elaine Benes', season: 1, episode: 4 }
];


function displayQuote(){

let index = Math.floor(Math.random()*allQuotes.length);
allQuotes[index];

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



let theQuote = document.querySelector('#the-quote');
theQuote.style.textAlign = 'left';
let theAuthor = document.querySelector('#the-author');
let pushQuote = `"${allQuotes[index].quote}"`;
let pushAuthor = `-${allQuotes[index].author} (S0${allQuotes[index].season}E${episodeWithZero})`;

theQuote.innerHTML= pushQuote;
theAuthor.innerHTML= pushAuthor;

let idJerry = document.getElementById('jerry-seinfeld');
let idGeorge = document.getElementById('george-constanza');
let idKramer = document.getElementById('kramer');
let idElaine = document.getElementById('elaine-benes');

if (allQuotes[index].author == "Jerry Seinfeld") {
    idGeorge.style.display = 'none';
    idKramer.style.display = 'none';
    idElaine.style.display = 'none';
    idJerry.style.display = 'block';
} else if (allQuotes[index].author == "George Constanza") {
    idJerry.style.display = 'none';
    idKramer.style.display = 'none';
    idElaine.style.display = 'none';
    idGeorge.style.display = 'block';
} else if (allQuotes[index].author == "Kramer") {
    idJerry.style.display = 'none';
    idElaine.style.display = 'none';
    idGeorge.style.display = 'none';
    idKramer.style.display = 'block';
} else if (allQuotes[index].author == "Elaine Benes") {
    idJerry.style.display = 'none';
    idGeorge.style.display = 'none';
    idKramer.style.display = 'none';
    idElaine.style.display = 'block';
}

}

let btn = document.querySelector('#new-quote');
btn.addEventListener('click', displayQuote);
