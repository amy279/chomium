const quotes = [
    {
        quote:"Enjoy the little things, for one day you may look back and realize they were the big ones.",
        author:"Robert Breault",
    },
    {
        quote:"Risky is the new safe.",
        author:"unknown",
    },
    {
        quote:"quote3",
        author:"author3",
    },
    {
        quote:"quote4",
        author:"author4",
    },
    {
        quote:"quote5",
        author:"author5",
    },
    {
        quote:"quote6",
        author:"author6",
    },
    {
        quote:"quote7",
        author:"author7",
    },
    {
        quote:"quote8",
        author:"author8",
    },
    {
        quote:"quote9",
        author:"author9",
    },
    {
        quote:"quote10",
        author:"author10",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

