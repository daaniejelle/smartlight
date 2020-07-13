

var imageTracker = 'on';
function change() {
    var image = document.getElementById('switch');
    if (imageTracker==='on') {
        image.src ='img/light-on.jpg';
        imageTracker = 'off';
    }
    else {
        image.src ='img/light-off.jpg';
        imageTracker = 'on';
        }
}



//Werkende bulb
//var imageTracker = 'on';
//function change() {
//    var image = document.getElementById('switch');
//    if (imageTracker==='on') {
//        image.src ='img/light-on.jpg';
//        imageTracker = 'off';
//    }
//    else {
//        image.src ='img/light-off.jpg';
//        imageTracker = 'on';
//        }
//}