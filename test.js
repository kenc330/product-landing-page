function orientationChange() {

    var $ = function (id) {
        return document.getElementById(id);
    };

    var x = $("carwash").style.marginTop.slice(0, -2);
    
    if (window.matchMedia("(orientation:portrait)").matches) {
        $("carwash").style.marginTop = (x - 100) + "px";
      console.log("Portrait " + ($("carwash").style.marginTop = (x - 100)) + "px");
    } 
    else (window.matchMedia("(orientation:landscape)").matches) 
        $("carwash").style.marginTop = (x - 100) + "px";
        console.log("Landscape " + ($("carwash").style.marginTop = (x - 100)) + "px");
    
  }

  window.addEventListener("deviceorientation", orientationChange, true);
