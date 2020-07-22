//Wheater
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=
'https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

function greet() {
  var time = new Date().getHours();
  var greeting;
        if (time < 10) {
        greeting = "Goedemorgen";
  } else if (time < 20) {
        greeting = "Goedemiddag";
  } else {
        greeting ="Goedeavond";
  }
document.getElementById("hallo").innerHTML = greeting;
}



