
const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quotedisplay');
const quoteInputElement = document.getElementById('quoteInputElement');
const restart = document.getElementById('restart').value;
const timer = document.getElementById('timer')
var sec = timer;
var set;
var p;

function getRandomQuote() {



    return fetch(RANDOM_QUOTE_API_URL).then(response => response.json())
        .then(data => data.content)
}

async function getNextQuote() {
    const quote = await getRandomQuote()
    console.log(quote)

    quoteDisplayElement.innerHTML = quote;

    const wordSpan = quoteDisplayElement.innerText.split(' ');


    p = wordSpan.length;
    console.log(p)


    quoteInputElement.value = null;

}


getNextQuote()

function match() {

    if (quoteInputElement.value == 0) {
        start()
    }
    else {
        if (quoteDisplayElement.innerText == quoteInputElement.value) {
            alert('matched')
            console.log(set)
            clearInterval(set)
            timer.textContent = '0'

            getNextQuote()

        }
    }

}


let startTime
function start() {
    timer.innerHTML = 0;
    startTime = new Date();
    set = setInterval(() => {

        timer.innerText = getTimertime()
        console.log(timer)
    }, 1000)


}

function getTimertime() {
    return Math.floor((new Date - startTime) / 1000)
}


function restartGame() {
    console.log(quoteInputElement)
    quoteInputElement.value = null;
    getNextQuote()
    match()
    console.log(set)
    clearInterval(set)
    timer.textContent = '0';
}

document.getElementById("quoteInputElement").addEventListener("keypress", match);