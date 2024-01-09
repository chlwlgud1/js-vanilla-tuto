const quotes = [
    {
        quote: "Reading is to the mind what exercise is to the body",
        author: "Sir Richard Steele",
    },
    {
        quote: "You never really hear the truth from your subordinates until after 10 in the evening",
        author: "Jurgen Schrempp",
    },
    {
        quote: "I think a hero is an ordinary individual who finds strength to persevere and endure in spite of overwhelming obstacles",
        author: "Christopher Reeve",
    },
    {
        quote: "We have, I fear, confused power with greatness",
        author: "Stewart L. Udall",
    },
    {
        quote: "There are people in the world so hungry, that God cannot appear to them except in the form of bread",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Maturity consists in having rediscovered the seriousness one had as a child at play",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Gratitude is merely the secret hope of further favors",
        author: "Francois de La Rochefoucauld",
    },
    {
        quote: "Only a life lived for others is a life worth while",
        author: "Albert Einstein",
    },
    {
        quote: "The aging process has you firmly in its grasp if you never get the urge to throw a snowball",
        author: "Doug Larson",
    },
    {
        quote: "The only joy in the world is to begin",
        author: "Cesare Pavese",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;