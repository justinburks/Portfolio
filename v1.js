const form = document.querySelector('#login');
const button = document.querySelector('button');
const body = document.querySelector('body');
let loginDiv = document.querySelector('.loginContainerDiv');
let frontPage = document.querySelector('.loginPageContainer')
let name = document.querySelector('.name');
let header = document.querySelector('.container');
let lowerHeader = document.querySelector('.nameTag')
function blurBackground(e) {
    e.preventDefault();
    loginShift();
    paint();
    name.style.transform = 'translateX(0)'
    document.documentElement.style.setProperty('--trans', '0');
}

function loginShift() {
    loginDiv.style.backdropFilter = "blur(0px)";
    //for version 2 translate -1000px to create a side menu esque look on fullscreen
    loginDiv.style.transform = "translateX(-10000px)";
    frontPage.style.transform = "translateY(-10000px)";
    frontPage.style.height = '75vh';
    frontPage.style.marginTop = '8vh';
}
function paint() {
    lowerHeader.style.background = "yellow";
    lowerHeader.style.color = "black";

}

form.addEventListener('submit', blurBackground)

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

