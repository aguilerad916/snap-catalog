/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const REAL_MADRID_URL = "https://i.ibb.co/VCFh2r8/Gaming-Gangs.png";
const ARSENAL_URL = "https://i.pinimg.com/564x/ca/c5/14/cac51494a8a86772311c36bcac303073.jpg";
const BAYER_LEVERKUSEN_URL = "https://i.pinimg.com/originals/21/8d/f1/218df1cbc645a3fc0a9d1745d4ed333a.png";
const PSG_URL = "https://i.pinimg.com/564x/e9/6c/67/e96c675afa3d76277bf0c26dae200bba.jpg";
const INTER_MILAN_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1024px-FC_Internazionale_Milano_2021.svg.png?20230515145508";

// This is an array of arrays (Soccer Teams)
let teams = [
    ["Real Madrid", "Real Madrid is a professional football club based in Madrid, Spain.", 23, 6, 1],
    ["Arsenal", "Arsenal is a professional football club based in London, England.", 22, 5, 4],
    ["Bayer Leverkusen", "Bayer Leverkusen is a professional football club based in Leverkusen, Germany.", 24, 4, 0],
    ["PSG", "Paris Saint-Germain is a professional football club based in Paris, France.", 18, 9, 1],
    ["Inter Milan", "Inter Milan is a professional football club based in Milan, Italy.", 26, 4, 1]
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < teams.length; i++) {
        let team = teams[i][0];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        // if (i == 0) {
        //     imageURL = REAL_MADRID_URL;
        // } else if (i == 1) {
        //     imageURL = ARSENAL_URL;
        // } else if (i == 2) {
        //     imageURL = BAYER_LEVERKUSEN_URL;
        // } else if (i == 3) {
        //     imageURL = PSG_URL;
        // } else if (i == 4) {
        //     imageURL = INTER_MILAN_URL;
        // }

        if (team == "Real Madrid") {
            imageURL = REAL_MADRID_URL;
        } else if (team == "Arsenal") {
            imageURL = ARSENAL_URL;
        } else if (team == "Bayer Leverkusen") {
            imageURL = BAYER_LEVERKUSEN_URL;
        } else if (team == "PSG") {
            imageURL = PSG_URL;
        } else if (team == "Inter Milan") {
            imageURL = INTER_MILAN_URL;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, team, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
        // cardContainer.insertBefore(nextCard, cardContainer.firstChild); // Add new card to the container
    }
}

function editCardContent(card, newTeam, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTeam;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTeam + " Poster";

    const cardInfo = card.querySelector("li");
    const cardInfo2 = cardInfo.nextElementSibling;

    // if (newTitle == "Real Madrid") {
    //     cardInfo.textContent = titles[0][1];
    //     cardInfo2.textContent = "Wins: " + titles[0][2] + " Draws: " + titles[0][3] + " Losses: " + titles[0][4];
    // } else if (newTitle == "Arsenal") {
    //     cardInfo.textContent = titles[1][1];
    //     cardInfo2.textContent = "Wins: " + titles[1][2] + " Draws: " + titles[1][3] + " Losses: " + titles[1][4];
    // } else if (newTitle == "Bayer Leverkusen") {
    //     cardInfo.textContent = titles[2][1];
    //     cardInfo2.textContent = "Wins: " + titles[2][2] + " Draws: " + titles[2][3] + " Losses: " + titles[2][4];
    // } else if (newTitle == "PSG") {
    //     cardInfo.textContent = titles[3][1];
    //     cardInfo2.textContent = "Wins: " + titles[3][2] + " Draws: " + titles[3][3] + " Losses: " + titles[3][4];
    // } else if (newTitle == "Inter Milan") {
    //     cardInfo.textContent = titles[4][1];
    //     cardInfo2.textContent = "Wins: " + titles[4][2] + " Draws: " + titles[4][3] + " Losses: " + titles[4][4];
    // }

    for(let i = 0; i < teams.length; i++) {
        if (newTeam == teams[i][0]) {
            cardInfo.textContent = teams[i][1];
            cardInfo2.textContent = "Wins: " + teams[i][2] + " Draws: " + teams[i][3] + " Losses: " + teams[i][4];
        }
    }
    

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTeam, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//     console.log("Button Clicked!")
//     alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
// }

// function removeLastCard() {
//     titles.pop(); // Remove last item in titles array
//     showCards(); // Call showCards again to refresh
// }

function sortByWins() {
    teams.sort(function(a, b) {
        return b[2] - a[2];
    });
    showCards();
}

function sortByDraws() {
    teams.sort(function(a, b) {
        return b[3] - a[3];
    });
    showCards();
}

function sortByLosses() {
    teams.sort(function(a, b) {
        return b[4] - a[4];
    });
    showCards();
}

function filterByWins() {
    let temp = teams;
    let input = document.getElementById("input").value;
    let filteredArray = teams.filter(function(team) {
        return team[2] >= input;
    });
    teams = filteredArray;
    showCards();
    teams = temp;
}
