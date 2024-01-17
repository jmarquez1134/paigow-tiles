
//Global Variables. 
let dealerHand;
let playerHand;
let deck; // variable ot hold the deck. 
let tileImg; // Varibale that will hold the image tag. 
let counterHands = 0; // counter to determine number of hands, there should be 8 hands in total. 
const hand = 4; // Variable to determine one hand. 


window.onload = function () { // Main Application
    buildDeck();
    shuffleDeck();
    startTraining();

}

function buildDeck () { // Function to create a deck 
    console.log("creating Deck");
    deck = []; //Array that will hold the tiles
    let tile = [ // This is each tile in the game. value = number of tile and img will be whats used to link the image. 
        {value: 3, img: "2-1"}, 
        {value: 6, img: "2-4"},
        {value: 12, img: "6-6"}, 
        {value: 12, img: "6-6"}, 
        {value: 2, img: "1-1"}, 
        {value: 2, img: "1-1"}, 
        {value: 8, img: "4-4"}, 
        {value: 8, img: "4-4"}, 
        {value: 4, img: "3-1"}, 
        {value: 4, img: "3-1"}, 
        {value: 10, img: "5-5"}, 
        {value: 10, img: "5-5"}, 
        {value: 6, img: "4-2"}, 
        {value: 6, img: "4-2"}, 
        {value: 4, img: "2-2"}, 
        {value: 4, img: "2-2"}, 
        {value: 11, img: "6-5"}, 
        {value: 11, img: "6-5"}, 
        {value: 11, img: "6-4"}, 
        {value: 11, img: "6-4"}, 
        {value: 7, img: "1-6"},
        {value: 7, img: "1-6"}, 
        {value: 6, img: "5-1"}, 
        {value: 6, img: "5-1"}, 
        {value: 9, img: "4-5"}, 
        {value: 9, img: "6-3"},
        {value: 8, img: "6-2"}, 
        {value: 8, img: "3-5"},  
        {value: 7, img: "2-5"}, 
        {value: 7, img: "4-3"}, 
        {value: 5, img: "4-1"}, 
        {value: 5, img: "2-3"}, 
    ]
    for(let i = 0; i < tile.length; i++) {
        deck.push(tile[i]);
    }
    
    //console.log(deck); //Check to see if Deck was built
}

function shuffleDeck () { // This will shiffle the deck. 
    console.log(`Shuffling Deck of ${deck.length} tiles.`)

    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);  // J will hold a random number .floor will round up and .random choose a randome number between 0-1. 
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    //console.log(deck); // Check to see if deck was shuffled. 
}

function startTraining(){ // This is the method that has the game play. 
    console.log("Trainging Start")
    
    dealersCurrentHand();
    tempImage();
    //playersCurrentHand();

    document.getElementById("player-hand").addEventListener("click", newPlayerHand); //button activity.
    document.getElementById("deckReset").addEventListener("click", refreshWindow); //button activity. Reloads page once number of hands is delt. 

    //console.log(counterHands)// check to ensure number of hands. 
}

function tempImage () { // temp image: this image will be replaced when enduser is ready. 
    console.log("Creating Temp Image")
    for (let i = 0; i < 4; i++) {
        let tempImg = document.createElement("img");
        tempImg.src = "./assets/knight.png";
        document.getElementById("player-tile").append(tempImg);
    }
}

function dealersCurrentHand () { // this will provide the dealer with a hand
    console.log("dealersCards")
    dealerHand =[];
    counter = 0

    while (counter < hand) {
        let tileImg = document.createElement("img");
        let tile = deck.pop();
        tileImg.src = "./assets/" + tile.img +".png";
        document.getElementById("dealer-tile").append(tileImg)
        counter++;

        //console.log(tile.img) //check to ensure tiles are being generated. 
    }
    counterHands++;
}

function playersCurrentHand () { // this generates the player hand. 
    console.log("PlayersCards")
    playerHand =[];
    counter = 0
    checkForLastHand(); // Checks how many hands have been delt. 

    while (counter < hand) {
        tileImg = document.createElement("img");
        let tile = deck.pop();
        tileImg.className = "playerTile"
        tileImg.src = "./assets/" + tile.img +".png";
        document.getElementById("player-tile").append(tileImg)
        counter++;
        //console.log(tileImg); // Will provdive img files 
    }

    counterHands++;
}

function newPlayerHand () { // This will provide the player with a new hand and delete the previous hand. 
    console.log("new player hand")
    removeImagesInDiv();
    playersCurrentHand();
  

}
function refreshWindow () { // 
    console.log("Refreshing Window")
    location.reload(true);
}

function removeImagesInDiv() {
    console.log("Deleting Player Hand")
    var div = document.getElementById("player-tile");
    var images =  div.getElementsByTagName("img");

    for (let i = images.length - 1; i >= 0; i--) {
        images[i].parentNode.removeChild(images[i]);
    }
}

function checkForLastHand () {
    if (counterHands === 8 ) {
        alert("No more Hands. Press OK for new hand.");
        refreshWindow();
    }
}


