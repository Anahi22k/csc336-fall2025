let button = document.querySelector("#callbackDemoButton")

function clickEventHappened(e) {
    console.log("Clicked!")
}

button.addEventListener("Clcik", clickEventHappened);

// arrow funtions, the equivelant to the one above 

button.addEventListener("Clcik", (e) => {console.log("Cliked!")});

// most code that weve done is single threat and thus Synchronous, one line happens after the other

// prevent blocking with asynch, fetch API allows you to request, callback function


// dog API: https://dog.ceo/api/breeds/image/random
//FIRST way, fetch returns a promise
let dogRequest = fetch("https://dog.ceo/api/breeds/image/random");
    console.log(dogRequest) //its a promise

dogRequest.then((response) => { console.log(response)})
let beforeRequest = Date.now();

setInterval(())
    dogRequest 
        .then( (response) => {return response.json() })
        .then( (dogData) => {
            let timePassed = Date.now() - beforeRequest
            console.log('it took ${timePassed} for the request.')
            console.log(dogData)
            let dogImage = document.createElement("img")
            dogImageHTML.src = dogDate.message
            document.querySelector("dovDiv"),appendChild(dogImageHTML);
        }
        .catch( () => console.log("somethingWrong"));


console.log("test"); //would this appear before the json


//nicer way to do it asynch and await 
//SECOND way, 
async funtion getAndDisplayDogImage() {
    let dogRequest = await fetch("https://dog.ceo/api/breeds/image/random");
    let dogData = await dogRequest.json()

    let timePassed = Date.now() - beforeRequest
    console.log('it took ${timePassed} for the request.')
    console.log(dogData)
    let dogImage = document.createElement("img")
    dogImageHTML.src = dogDate.message
    document.querySelector("dovDiv"),appendChild(dogImageHTML);

}


