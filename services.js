let navMenu = false; 
// Function to change the slider margin on click
function respMenu(){
    
    if (navMenu == false){
        console.log("Hamburger btn function triggered");
        document.querySelector(".menu").style.display = "flex";
        navMenu = true;
    
    }
    else {
        console.log("Hamburger btn function 2 triggered");
        document.querySelector(".menu").style.display = "none";
        navMenu = false;
    }; 
}
// Function to change the screen margin on screen width > 800px
function screenWidth(x) {
    if (x.matches) { // If media query matches
      console.log("screenWidth ABOVE 800px function triggered"); 
      document.querySelector(".menu").style.display = "block";
    }
  }
  // Don't fully understand this, but the if clause made it work
  let x = window.matchMedia("(min-width: 800px)")
  if (x >= window.matchMedia("(width: 800px)")){
    screenWidth(x); // Invokes function
    x.addListener(screenWidth); // Attach listener function on state changes

  }

// Function to change the screen margin on screen width < 800px
function screenWidth2(x1) {
  if (x1.matches) { // If media query matches
    console.log("screenWidth BELOW 800px function triggered"); 
    console.log(x1)
    document.querySelector(".menu").style.display = "none";
    navMenu = false;
  }
}

let x1 = window.matchMedia("(max-width: 799px)")
if (x1 <= window.matchMedia("(width: 799px)") ){
  screenWidth2(x1); // Invokes function
  x1.addListener(screenWidth2); // Attach listener function on state changes
  // myInterval = setInterval(setSlider, 4500);
}


// Function for the popup form
function showPopup() {
  document.getElementById("popupForm").style.display = "block";
}

function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

document.getElementById("fillFormLink").addEventListener("click", function(event) {
  event.preventDefault();
  showPopup();
});