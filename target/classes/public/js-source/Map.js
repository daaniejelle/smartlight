function changeImage() {
     alert("You turned the light off");
}


var imageTracker = 'on1';
function change() {
    var image = document.getElementById('switch1');
    if (imageTracker==='on1') {
        image.src ='img/bulb-on.png';
        imageTracker = 'off1';
    }
    else {
        image.src ='img/bulb-off.png';
        imageTracker = 'on1';
        }
}

var imageTracker = 'on2';
function change() {
    var image = document.getElementById('switch2');
    if (imageTracker==='on2') {
        image.src ='img/bulb-on.png';
        imageTracker = 'off2';
    }
    else {
        image.src ='img/bulb-off.png';
        imageTracker = 'on2';
        }
}

var imageTracker = 'on3';
function change() {
    var image = document.getElementById('switch3');
    if (imageTracker==='on3') {
        image.src ='img/bulb-on.png';
        imageTracker = 'off3';
    }
    else {
        image.src ='img/bulb-off.png';
        imageTracker = 'on3';
        }
}








//document.images[0].src = "new url";

//  function()
//javascript:(
//    {
//    document.getElementById('img1').src='https://www.xul.fr/images/asin1.jpg';
//    }
//)()
//
//function replaceImage(imgid, source, mapid)
//{
//  var image = document.getElementById(imgid);
//  image.src= source;
//  var newmap = document.getElementById(mapid);
//  var origin = document.getElementById("mapgeneric");
//  origin.innerHTML = newmap.innerHTML;
//}
