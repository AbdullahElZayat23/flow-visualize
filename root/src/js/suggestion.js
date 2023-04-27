let flowNames = [
    [{
        "name": "Welcome-2"
    }, {
        "name": "Abandoned"
    }, {
        "name": "Welcome - lab"
    }, {
        "name": "Welcome-Email"
    }, {
        "name": "Welcome-Email"
    }, {
        "name": "Survey-2"
    }, {
        "name": "Welcome-no-buttons"
    }, {
        "name": "Survey-no-buttons"
    }, {
        "name": "cross-selling"
    }, {
        "name": "VIP"
    }, {
        "name": "VOIP"
    }, {
        "name": "Welcome"
    }, {
        "name": "Welcome_new"
    }],
    [{
        "name": "Welcome-old"
    }, {
        "name": "VOIP"
    }, {
        "name": "Survey-facebook"
    }, {
        "name": "cross-selling"
    }, {
        "name": "Welcome"
    }, {
        "name": "telesales"
    }, {
        "name": "preapproval"
    }, {
        "name": "Survey-emoji"
    }, {
        "name": "Survey"
    }],
    [{
        "name": "Survey"
    }, {
        "name": "B2B-2"
    }, {
        "name": "Welcome-lg-egypt"
    }, {
        "name": "Welcome"
    }],
    [{
        "name": "Survey"
    }, {
        "name": "Welcome-Jordan Updated"
    }, {
        "name": "Welcome-status-update"
    }], [{
        "name": "Welcome Appout"
    }, {
        "name": "VOIP"
    }, {
        "name": "Welcome Appout WA"
    }, {
        "name": "Welcome Appout- FB"
    }],[{
        "name": "Test !!- don't delete"
      },{
        "name": "Welcome Appout"
      },{
        "name": "VOIP"
      },{
        "name": "Welcome Appout WA"
      },{
        "name": "Welcome Appout- FB"
      },{
        "name": "Test Khaled Alfa scan flow "
      },{
        "name": "Welcome-lg-egypt"
      },{
        "name": "Welcome-Jordan Updated"
      },{
        "name": "dd"
      },{
        "name": "Welcome-lg"
      },{
        "name": "testtt"
      },{
        "name": "t"
      },{
        "name": "welcome"
      },{
        "name": "campaign test"
      },{
        "name": "test"
      },{
        "name": "sssssssssssss"
      },{
        "name": "Survey"
      },{
        "name": "Welcome-Gulf-new"
      },{
        "name": "Welcome-Gulf"
      },{
        "name": "Welcome_new"
      },{
        "name": "test flow js"
      }]
]
function flatAndFilterNames() {
// Flatten the array and extract the names
return [...new Set(flowNames.flat().map(flow => flow.name))];
}

const suggestionList = document.getElementById('suggestionList');
const inputField = document.getElementById('searchInput');

inputField.addEventListener('input', function () {
  // Clear previous suggestions
  suggestionList.innerHTML = '';

  // Get user input
  const userInput = this.value;

  // Generate new suggestions based on user input
  const suggestions = getSuggestions(userInput);

  // Create new list items for each suggestion
  suggestions.forEach(function (suggestion) {
    const listItem = document.createElement('li');
    listItem.textContent = suggestion;
    suggestionList.appendChild(listItem);

    // Add click event listener to populate input field with suggestion
    listItem.addEventListener('click', function () {
      inputField.value = suggestion;
      suggestionList.innerHTML = '';
    });
  });
});

// Set the threshold for similarity
const similarityThreshold = 0.6;

function getSuggestions(userInput) {
    let searchHistoryList = globalThis.searchHistory?.length ? globalThis.searchHistory : [];
  
    // Calculate the best match using the string-similarity library
    const bestMatch = stringSimilarity.findBestMatch(userInput.toLowerCase(), searchHistoryList.map(suggestion => suggestion.toLowerCase()));
    
    // Sort the filtered suggestions by similarity in descending order
  const filteredSuggestions = [...new Set(bestMatch.ratings
    //   .filter(({ rating }) => rating > similarityThreshold)
    .sort((a, b) => b.rating - a.rating)
    .map(({ target }) => target))];
  
    // Return the top three matches (or fewer if there are fewer than three matches)
    return filteredSuggestions.slice(0, 3);
  }
  
  

// Get the value of the "searchHistory" cookie, or initialize it as an empty array if it doesn't exist
globalThis.searchHistory = [...new Set(
  JSON.parse(
    decodeURIComponent(
      getCookie('searchHistory') || '[]'
    )
  )
)];
globalThis.searchHistory.push(...flatAndFilterNames());

globalThis.searchHistory = [...new Set(globalThis.searchHistory)];

// Add a new search term to the search history array and update the "searchHistory" cookie
function updateSearchHistory(term) {
    globalThis.searchHistory.push(term);
    setCookie('searchHistory', JSON.stringify(globalThis.searchHistory), 365);
}


// Get the value of a cookie by name
function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
}

// Set the value of a cookie with a given name and expiration date
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}