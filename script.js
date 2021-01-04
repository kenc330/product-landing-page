
// Followed tutorial at https://www.w3schools.com/js/js_functions.asp
function myFunction() {

    // Setting scroll margin top to avoid header overlap issue. 
    var navLinks = document.getElementsByClassName("nav-link");
    var sections = document.getElementsByClassName("sections");
    var headerHeight = document.getElementById("header").offsetHeight;

    for (var i = 0; i < navLinks.length; i++) {
        sections[i].style.scrollMarginTop = headerHeight + "px";
        console.log("myFunction #" + i);
    }
}

// Followed tutorial at https://www.w3schools.com/jsref/event_onload.asp
window.onload = function () {

    // Adding click event and myFunction to each nav link on page load. 
    var navLinks = document.getElementsByClassName("nav-link");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', myFunction);
        console.log("Click Event #" + i);
    }

    // Adjusting "carwash" and "video" height to match header height on page load. 
    var $ = function (id) {
        return document.getElementById(id);
    };

    $("carwash").style.marginTop = $("header").offsetHeight + "px";
    console.log("carwash marginTop " + $("header").offsetHeight + "px");

    // Followed tutorial at https://www.w3schools.com/jsref/met_win_settimeout.asp
    setTimeout(function () {

        // Setting delay for "carwash" height to avoid load issue on browser refresh. 
        $("carwash").style.height = $("video").offsetHeight + "px";
        console.log("carwash height " + $("video").offsetHeight + "px");

        $("carwash").style.visibility = "visible";


        // Set video controls on mouseover event
        document.getElementById("video").addEventListener("mouseover", controls);

        function controls () {

            document.getElementById("video").setAttribute("controls", "controls");

        }


    }, 50);
};



// Followed tutorial at https://www.w3schools.com/jsref/event_onresize.asp
window.onresize = function () {

    // Adjusting "carwash" margin top and height on window resize. 
    var $ = function (id) {
        return document.getElementById(id);
    };

    $("carwash").style.height = $("video").offsetHeight + "px";
    $("carwash").style.marginTop = $("header").offsetHeight + "px";
};