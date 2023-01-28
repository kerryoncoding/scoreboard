
let currentHome = 0;
let currentGuest = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function add1home() {
    currentHome += 1;
    homeScore.innerHTML = currentHome; 
}

function add2home() {
    currentHome += 2;
    homeScore.innerHTML = currentHome; 
}

function add3home() {
    currentHome += 3;
    homeScore.innerHTML = currentHome; 
}

function add1guest() {
    currentGuest += 1;
    guestScore.innerHTML = currentGuest 
}

function add2guest() {
    currentGuest += 2;
    guestScore.innerHTML = currentGuest; 
}

function add3guest() {
    currentGuest += 3;
    guestScore.innerHTML = currentGuest; 
}