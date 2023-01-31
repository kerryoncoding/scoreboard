
let currentHome = 0;
let currentGuest = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeLeader = document.getElementById("home");
let guestLeader = document.getElementById("guest");

function add1home() {
    currentHome += 1;
    homeScore.innerHTML = currentHome;
    checkleader();  
}

function add2home() {
    add1home();
    add1home();
    checkleader();  
}

function add3home() {
    add1home();
    add1home();
    add1home();
    checkleader();  
}

function add1guest() {
    currentGuest += 1;
    guestScore.innerHTML = currentGuest;
    checkleader(); 
}

function add2guest() {
    add1guest();
    add1guest() 
    checkleader();
}

function add3guest() {
    add1guest();
    add1guest()
    add1guest() 
    checkleader();
}

function reset() {
    currentHome = 0;
    currentGuest = 0;
    homeScore.innerHTML = currentHome; 
    guestScore.innerHTML = currentGuest;
    checkleader();
}

function checkleader() {
    if (currentHome > currentGuest) {
        homeLeader.innerHTML = `<u>HOME</u>`;
        guestLeader.innerHTML = `GUEST`;
    } else {
        if (currentHome < currentGuest) {
        homeLeader.innerHTML = `HOME`;
        guestLeader.innerHTML = `<u>GUEST</u>`;
        } else {
            homeLeader.innerHTML = `HOME`;
            guestLeader.innerHTML = `GUEST`;
        }
    }
}