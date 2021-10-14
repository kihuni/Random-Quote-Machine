
const RandomQuotes = [
    {
        quote:'Victory has a thousand fathers, but defeat is an orphan.',
        author:'John F. Kennedy'
        
    },
    
    {
        quote: "Failure is only postponed success as long as courage 'coaches' ambition. The habit of persistence is the habit of victory.",
        author: "Herbert Kaufman"

    },
    {
        quote: "The first and greatest victory is to conquer yourself; to be conquered by yourself is of all things most shameful and vile.",
        author: "Plato"
    },
    {
     quote: "Your first victory is in finding your happiness and your second victory is in finding others happiness",
     author: "P.S. Jagadeesh Kumar"   
    },
    
    {
        quote: "A victorious woman does not worry about the battlefield, because she knows that her victory is certain.",
        author: "Gift Gugu Mona"
    }

]



window.onload = quoteRun;
function quoteRun() {
    generateQuote()
}

const generateQuote = () => {
    let randomPick = Math.floor(Math.random() * RandomQuotes.length);
    let preservedQuote = RandomQuotes[randomPick]


let twitterLinks = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22"

let quoteApi = preservedQuote.quote.replace(/ /g, "%20");

twitterLinks += quoteApi

let testAuthor = preservedQuote.author.replace(/ /g, "%20");

twitterLinks += " - " + testAuthor


    document.getElementById("tweet-quote").href = twitterLinks;
    document.getElementById("text").innerText = preservedQuote.quote;
    document.getElementById("author").innerText = preservedQuote.author;
}