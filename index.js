let navMenu = false; 
// Function to change the slider margin on click
function respMenu(){
    
    if (navMenu == false){
    console.log("function triggered");
    document.getElementById("slider").style.marginTop = "9em";
    navMenu = true;
    
    }
    else {
        console.log("function 2 triggered");
        document.getElementById("slider").style.marginTop = "0";
        navMenu = false;
    }; 
}
// Function to change the slider margin on media query of 800px
function sliderPosition(x) {
    if (x.matches) { // If media query matches
        document.getElementById("slider").style.marginTop = "0";
        
    }
  }
  // Don't fully understad this
  let x = window.matchMedia("(min-width: 800px)")
  sliderPosition(x) // Invokes function
  x.addListener(sliderPosition) // Attach listener function on state changes
