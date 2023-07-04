let navMenu = false; 
// Function to change the slider margin on click
function respMenu(){
    
    if (navMenu == false){
    console.log("function triggered");
    document.querySelector("#slider").style.marginTop = "9em";
    navMenu = true;
    
    }
    else {
        console.log("function 2 triggered");
        document.querySelector("#slider").style.marginTop = "0";
        navMenu = false;
    }; 
}
// Function to change the slider margin on media query of 600px
function sliderPosition(x) {
    if (x.matches) { // If media query matches
        document.querySelector("#slider").style.marginTop = "0";
    }
  }
  
  let x = window.matchMedia("(min-width: 600px)")
  sliderPosition(x) // Invokes function
  x.addListener(sliderPosition) // Attach listener function on state changes > Don't understand this yet
