var slider = document.getElementById("myRange");
var output = document.getElementById("sliderVisualRound");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

// change slider by filling in a number
function myFunction() {
  var x, text;
  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 100
  if (isNaN(x) || x < 1 || x > 100) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("sliderEnterNumber").innerHTML = text;
}