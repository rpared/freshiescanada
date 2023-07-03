let menu = false; 

function respMenu(){
    if (menu == false){
    console.log("function triggered");
    document.querySelector("#slider").style.marginTop = "9em";
    menu = true;
    }
    else {
        console.log("function 2 triggered");
        document.querySelector("#slider").style.marginTop = "0";
        menu = false;
    }; 
}
