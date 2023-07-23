// Nav Bar
let navMenu = false; 

// Function to change the slider margin on click
function respMenu1(){
    
  if (navMenu == false){
  console.log("Hamburger btn function triggered");
  document.querySelector(".menu").style.display = "flex";
  document.querySelector(".slider").style.top = "160px";
  document.querySelector(".steps").style.marginTop = "160px";
  // document.querySelector(".background").style.top = "80px";
  navMenu = true;
  
  }
  else if (navMenu == true){
      console.log("Hamburger btn function 2 triggered");
      document.querySelector(".menu").style.display = "none";
      document.querySelector(".slider").style.top = "0";
      document.querySelector(".steps").style.marginTop = "80px";
      // document.querySelector(".background").style.top = "0";
      navMenu = false;
  }; 
}




// Function to change the slider margin on screen width > 800px
function sliderPosition(x) {
    if (x.matches) { // If media query matches
      console.log("SliderPosition ABOVE 800px function triggered"); 
      
      document.querySelector(".menu").style.display = "block";
      document.querySelector(".slider").style.top = "0";
      document.querySelector(".steps").style.marginTop = "1em";
      document.querySelector(".background").style.marginTop = "0";   
    }
  }
  // Don't fully understand this, but the if clause made it work
  let x = window.matchMedia("(min-width: 800px)")
  if (x >= window.matchMedia("(width: 800px)")){
    sliderPosition(x) // Invokes function
    x.addListener(sliderPosition) // Attach listener function on state changes
  }

// Function to change the slider margin on screen width < 800px
function sliderPosition2(x1) {
  if (x1.matches) { // If media query matches
    console.log("SliderPosition BELOW 800px function triggered"); 
    console.log(x1)
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".slider").style.top = "0";
    document.querySelector(".steps").style.marginTop = "1em";
    document.querySelector(".background").style.marginTop = "0";
    navMenu = false;   
  }
}

let x1 = window.matchMedia("(max-width: 799px)")
if (x1 <= window.matchMedia("(width: 799px)") ){
  sliderPosition2(x1) // Invokes function
  x1.addListener(sliderPosition2) // Attach listener function on state changes
  
}






// Steps pre Arrival
  let stepsPreDisplay = false;
  let stepsPreTitle = document.getElementById("Steps-btn1").innerHTML;
  let stepsPre = "<ol><li>English Proficiency Exam</li><li>College Letter of Acceptance</li> <li>Digital Study Permit</li><li>Get Flight Tickets</li><li>Reserve Accommodation</li><li>Prepare Luggage</li></ol>";

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
   let stepsPost = "<ol><li>Retrieve Physical Study Permit</li> <li>Get SIN Number</li><li>Get Canadian Sim Card</li><li>Open Bank Account</li><li>Get TTC Presto Card</li><li>Long Term Accommodation</li</ol>";

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