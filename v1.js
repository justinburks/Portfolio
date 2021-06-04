const form = document.querySelector('#login');
const body = document.querySelector('body');
let loginDiv = document.querySelector('.loginContainerDiv');
let frontPage = document.querySelector('.loginPageContainer')
let fullName = document.querySelector('.nameContain');
let header = document.querySelector('.container');
let lowerHeader = document.querySelector('.nameTag')
let menuButton = document.querySelector('.menu');
let main = document.querySelector('main');
let navBar = document.querySelector('.navBar');
let messageCenter = document.querySelector('.messageCenter');
let overlay = document.querySelector('.overlay');

let menuOpen = false;

function pullHeader() {
    document.documentElement.style.setProperty('--trans', '0');
    return menuOpen = false;
};

function toggleHeader() {
    if (!menuOpen) {
    document.documentElement.style.setProperty('--trans', '50%');
    document.documentElement.style.setProperty('--pos', 'fixed')
    menuOpen = true;
    }
    else {
        document.documentElement.style.setProperty('--pos', 'relative')
        pullHeader();
        
    }
}

function toggleMenu() {
    if (!menuOpen) {    
        navBar.classList.toggle('mainAnime')
        main.classList.toggle('mainAnime');
        body.classList.toggle('menuAnime'); 
        messageCenter.classList.toggle('hover'); 
        toggleHeader();
}
    else if (menuOpen) {
        navBar.classList.toggle('mainAnime')
        main.classList.toggle('mainAnime');
        body.classList.toggle('menuAnime'); 
        messageCenter.classList.toggle('hover');
        toggleHeader();
    }
}
function blurBackground(e) {
    e.preventDefault();
    loginShift();
    paint();
    pullHeader();
    form.removeEventListener('submit', null)
}

function loginShift() {
    loginDiv.style.backdropFilter = "blur(0px)";
    //for version 2 translate -1000px to create a side menu esque look on fullscreen
    loginDiv.style.display = "none";
    frontPage.style.display= "none";
    frontPage.style.height = '75vh';
    frontPage.style.marginTop = '8vh';
}

function paint() {
    lowerHeader.style.background = "yellow";
    lowerHeader.style.color = "black";

}

function toggleIM() {

    messageCenter.classList.toggle('open');
    overlay.classList.toggle('shader');
}

form.addEventListener('submit', blurBackground);
menuButton.addEventListener('click', toggleMenu);
messageCenter.addEventListener('click', toggleIM)


//navBar Design Updates
    // highjack pointer -- semi opaque(backdropFilter) #333 circle
        // when hovering over navBar letters change text color to red in corresponding area
            // on click (navLinks) collapse circle until transitionEnd (scale(0), display none)

//messageCenter.click
        // or
//messageCenter.mouseover 

//change opacity
//drop in most recent messages from server
//add interface

//on transition end
    //roll out contact links

//navBar.scroll
//translate up to hide

//navBar.scroll
// if background color is close to or on the nav area
// change background color to match it.. if yellow change text to black

//features page
//add rich font with icons
        //GUIDE THE EYES
//perpendicular halfcircle path 
//icons and descriptions following path

// ADD AJAX PREVIEW ON SCROLLING NAV LINKS


//ADD DEMO OFF WEBSITE FEATURES IF FIRST TIME LOGGING IN
    //DEMO ON CLICK


// REFACTOR/ORGANIZE TO PREPARE FOR UPDATES


//ADD PERMISSIONS

