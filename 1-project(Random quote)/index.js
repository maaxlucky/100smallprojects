"use strict";

const newQuote = makeQuote().btnNewQuote

renderQuote()

function makeQuote() {
    const quoteText = document.createElement('div');
    const quoteAuthor = document.createElement('div');
    const btnNewQuote = document.querySelector('button')
    return {quoteText, quoteAuthor, btnNewQuote}
}

function fillQuote(){
    const emptyQuote = makeQuote()
    const arrays = getQuote()
    emptyQuote.quoteText.textContent = arrays.quoteArray[arrays.randInt];
    emptyQuote.quoteAuthor.textContent = arrays.authorArray[arrays.randInt];
    emptyQuote.btnNewQuote.textContent = 'New quote'
    return {emptyQuote}
}

function getQuote(){
    const quoteArray = ['Life-transforming ideas have always come to me through books.',
        'Love can be sordid only if you work at it.', 'There it was, hidden in alphabetical order.',
        'McCabe\'s Law: Nobody _has_ to do _anything_.'];
    const authorArray = ['Bell Hooks', 'Brooke McEldowney', 'Rita Holt', 'Charles McCabe'];
    const randInt = Math.floor(Math.random() * quoteArray.length)
    return {quoteArray, authorArray, randInt}
}

function renderQuote() {
    const container = document.querySelector('.container')
    const quote = fillQuote();
    container.innerHTML = '';
    container.appendChild(quote.emptyQuote.quoteText);
    container.appendChild(quote.emptyQuote.quoteAuthor);
}


newQuote.onclick = (event) => {
    renderQuote()
}
