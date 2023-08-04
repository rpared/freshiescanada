//Slider Initialized
let myInterval = setInterval(setSlider, 3800);

// NAVBAR------------------------------
let navMenu = false;

// Function to display the hamburger menu
function respMenu() {
  if (navMenu == false) {
    console.log("Hamburger btn function triggered");
    document.querySelector(".menu").style.display = "flex";
    document.querySelector(".slider").style.top = "160px";
    document.querySelector(".steps").style.marginTop = "160px";
    document.querySelector(".slidercontrols").style.bottom = "-60%";
    navMenu = true;
  } else if (navMenu == true) {
    console.log("Hamburger btn function 2 triggered");
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".slider").style.top = "0";
    document.querySelector(".steps").style.marginTop = "10px";
    document.querySelector(".slidercontrols").style.bottom = "4%";
    navMenu = false;
  }
}


// Function to reposition stuff on screen width > 800px
function widthResize() {
  let w = window.outerWidth;
  if (w >= "800"){
    console.log("screenWidth ABOVE 800px function triggered");
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".slider").style.top = "0";
    document.querySelector(".steps").style.marginTop = "30px";
    document.querySelector(".slidercontrols").style.bottom = "4%";
    navMenu = false;
  }
  else{
    navMenu = false;
    console.log("screenWidth BELOW 800px function triggered")
  }
}

/*
//Another way to trigger functions resizing the screen with an onresize evento on the body tag

function screenWidth() {
  console.log("screenWidth ABOVE 800px function triggered");
  document.querySelector(".menu").style.display = "block";
  document.querySelector(".slider").style.top = "0";
  document.querySelector(".steps").style.marginTop = "30px";
  document.querySelector(".slidercontrols").style.bottom = "4%";
}

// The if clause Triggers the function to reposition stuff
let x = window.matchMedia("(min-width: 800px)");
if (x.matches == true) {
  screenWidth(x); // Invokes function
  x.addListener(screenWidth); // Attach listener function on state changes
  
}

//Function to change the screen margin on screen width < 800px
function screenWidth2() {
// If media query matches
    console.log("screenWidth BELOW 800px function triggered");
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".slider").style.top = "0";
    document.querySelector(".steps").style.marginTop = "10px";
    document.querySelector(".slidercontrols").style.bottom = "-60%";
    navMenu = false;
}

let x1 = window.matchMedia("(max-width: 800px)")
if (x1.matches == true){
  screenWidth2(x1); // Invokes function
  x1.addListener(screenWidth2); // Attach listener function on state changes
}

*/


// STEPS------------------------------
// Steps pre Arrival
let stepsPreDisplay = false;
let stepsPreTitle = document.getElementById("Steps-btn1").innerHTML;
let stepsPre =
  "<ol><li>English Proficiency Exam</li><li>College Letter of Acceptance</li> <li>Digital Study Permit</li><li>Get Flight Tickets</li><li>Reserve Accommodation</li></ol>";

function getStepsPre() {
  if (stepsPreDisplay == false) {
    document.getElementById("Steps-btn1").innerHTML = stepsPre;
    stepsPreDisplay = true;
  } else if (stepsPreDisplay == true) {
    document.getElementById("Steps-btn1").innerHTML = stepsPreTitle;
    stepsPreDisplay = false;
  }
}

// Steps post Arrival
let stepsPostDisplay = false;
let stepsPostTitle = document.getElementById("Steps-btn2").innerHTML;
let stepsPost =
  "<ol><li>Retrieve Physical Study Permit</li> <li>Get SIN Number</li><li>Get Canadian Sim Card</li><li>Get TTC Presto Card</li><li>Long Term Accommodation</li</ol>";

function getStepsPost() {
  if (stepsPostDisplay == false) {
    document.getElementById("Steps-btn2").innerHTML = stepsPost;
    stepsPostDisplay = true;
  } else if (stepsPostDisplay == true) {
    document.getElementById("Steps-btn2").innerHTML = stepsPostTitle;
    stepsPostDisplay = false;
  }
}

// SLIDER------------------------------
//Slider Variables:
let slider1 = ` 
    <a href="#stepsanchor" class="sliderbutton">
    <div class="slidertext1"><img class="arrow" src="images/largearrow.png" alt=""> <p>Check the <span>Steps</span> before and after landing!</p></div>
    <img class="background" src="images/Slider1-steps.jpg" alt="Photo of student at airport" title="Check the Steps pre and after landing!">             
    </a>`;

let slider2 = `
    <a href="documentation.html" class="sliderbutton">
    <div class="slidertext1"><img class="arrow" src="images/largearrow.png" alt=""> <p>Review the <span>Documents</span> you need!</p></div>
    <img class="background" src="images/Slider2-documents.jpg" alt="Photo of documents">
    </a>`;

let slider3 = `
    <a href="transportation.html" class="sliderbutton"><div class="slidertext1"><img class="arrow" src="images/largearrow.png" alt=""> <p>Handle <span>Transportation</span> like a local!</p></div>
    <img class="background" src="images/Slider3-transportation.jpg" alt="Photo of Toronto Street Car">
    </a>`;

let slider = document.querySelector(".slider");
slider.innerHTML = slider1;

// Slider Function (and next button)
function setSlider() {
  console.log("setSlider function triggered");
  if (slider.innerHTML == slider1) {
    slider.innerHTML = slider2;
  } else if (slider.innerHTML == slider2) {
    slider.innerHTML = slider3;
  } else if (slider.innerHTML == slider3) {
    slider.innerHTML = slider1;
  }
}
// Slider Prev Button
function prevSlide() {
  if (slider.innerHTML == slider1) {
    slider.innerHTML = slider3;
  } else if (slider.innerHTML == slider2) {
    slider.innerHTML = slider1;
  } else if (slider.innerHTML == slider3) {
    slider.innerHTML = slider2;
  }
}
