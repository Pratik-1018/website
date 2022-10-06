function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navcontainer") {
      x.className += " responsive";
    } else {
      x.className = "navcontainer";
    }
  }