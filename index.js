// Nav Bar
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


// Steps pre Arrival
  let stepsPreDisplay = false;
  let stepsPreTitle = document.getElementById("Steps-btn1").innerHTML;
  let stepsPre = "<ol><li>English Proficiency Exam</li><li>College Letter of Acceptance</li> <li>Digital Study permit</li><li>Get Flight Tickets</li><li>Reserve Accommodation</li><li>Prepare Luggage</li></ol>";

  function getStepsPre(){
    if (stepsPreDisplay == false){
    document.getElementById("Steps-btn1").innerHTML = stepsPre;
    stepsPreDisplay = true;
    }
    else if (stepsPreDisplay == true){
        document.getElementById("Steps-btn1").innerHTML = stepsPreTitle;
        stepsPreDisplay = false;
        }
      }

   // Steps post Arrival
   let stepsPostDisplay = false;
   let stepsPostTitle = document.getElementById("Steps-btn2").innerHTML;
   let stepsPost = "<ol><li>Retrieve physical Study Permit</li> <li>Get SIN number</li><li>Get canadian Sim Card</li><li>Open bank Account</li><li>Get TTC Presto card</li><li>Long Term Accommodation</li</ol>";

  function getStepsPost(){
    if (stepsPostDisplay == false){
    document.getElementById("Steps-btn2").innerHTML = stepsPost;
    stepsPostDisplay = true;
    }
    else if (stepsPostDisplay == true){
    document.getElementById("Steps-btn2").innerHTML = stepsPostTitle;
    stepsPostDisplay = false;
    }
  }

//Home Slider


  //Slider Variables:
  let slider1 = `<div class="slidertext1"><img class="arrow" src="images/largearrow.png" alt=""> <p>Check the <span>Steps</span> before and after landing!</p></div>     
  <img class="background" src="images/Slider1-steps.jpg" alt="Photo of student at airport">    
  </div>`;

  let slider2 = `<div class="slidertext1"><img class="arrow" src="images/largearrow.png" alt=""> <p>Review the <span>Documents</span> you need!</p></div>
  <img class="background" src="images/Slider2-documents.jpg" alt="Photo of documents">    
  </div>`;

  let slider3 = `<div class="slidertext1"><img class="arrow" src="images/largearrow.png" alt=""> <p>Handle <span>Transportation</span> like a pro commuter!</p></div>
  <img class="background" src="images/Slider3-transportation.jpg" alt="Photo of Toronto Street Car">    
  </div>`;