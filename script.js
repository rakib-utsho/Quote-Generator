let apiQuotes = [];

// Show new Quote
function newQuote(){
    //pick random quotes from apiQuotes array
    const quote =  apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch (error) {
        //catch error here
    }
}

// Call function
getQuotes();
