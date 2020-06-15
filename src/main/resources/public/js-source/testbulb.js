function action() {
    var image = document.getElementById('bulb');
    if (image.src.match("off")) {
        image.src = "../img/light-on.jpg";
    } else {
        image.src = "../img/light-off.jpg";
    }
}
// JavaScript Document