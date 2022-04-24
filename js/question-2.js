//Question 2

/*
Make a call to the Rawg API.

Go to https://rawg.io/apidocs and get an API key which you'll use as a part of the endpoint you're making an API call to.
You can use https://noroff.no for the URL and Noroff Assignment for the description.

You'll be given an API Key you can add as a "key" parameter in your fetch request.

Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=rating&key=INSERTAPIKEYHERE

Loop through the results and display the following properties in HTML, but only the first eight results:
    *Name
    *Rating
    *Number of tags (not the tag details, just the amount of tags)

The styling for this assignment is not important but the loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.
*/



//This is the API Key, given to me by RAWG API: ea0d4377ace1473a94f363cca08e5cbf

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=rating&key=ea0d4377ace1473a94f363cca08e5cbf"

const resultsContainer = document.querySelector(".results")

async function getAPIKey() {


    const responce = await fetch(url);

    const results = await responce.json();

    const info = results.all;

    for (let i = 0; i < info.length; i++) {
        console.log(info[i].text)

        if(i === 8) {
            break;
        }

        //resultsContainer.innerHTML += `<div class="results">${info[i].text}</div>`;

    }
}

getAPIKey()