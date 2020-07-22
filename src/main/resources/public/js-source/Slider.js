//turn the bulb on and off
function bulbOnOffHandler(event){

    var image = event.target;
    var id = image.id
    var lightBulb = setBulbStatus(id, function(lightBulb) {

       if (lightBulb.on) {
            image.src ='img/bulb-on.png';
        }
        else {
            image.src ='img/bulb-off.png';
            }

        });
}

//originele code die refereert naar de <div> in de html
function rangeOpacity(value) {
    var root = document.documentElement;
    root.style.setProperty('--exp', (value/100))
}

//function rangeOpacity(value) {
//    var bulb = isDimmible;
//    var root = document.documentElement;
//    if(bulb.isDimmible) {
//        root.style.setProperty('--exp', (value/100))
//        }
//        else {
//        return false
//        }
//}



//code daan

//function rangeOpacity(value) {
//     var root = document.documentElement;
//     //var id = image.id;
//     var bulbDimmer = setBulbStatusDim(root, function(lightDimmer) {
//
//     if (bulb.isDimmible) {
//          root.style.setProperty('--exp', (value/100))
//     }
//
//     else {
//         bulbOnOffHandler()
//     }
//
//        });
//}

function setBulbStatus(bulbId, okCode){
    let url = new URL("/setBulb", document.baseURI);
    url.searchParams.append("bulbId", bulbId);

    fetch(url)
        .then(response => {
            return response.json();
        })

        .then((data) => {
            console.log(data)
            okCode(data);
        },
            (error) => {
                console.error(error);
            });
}

function positionBulbs(){
    let floorPlan = $("#floorplanContainer")
    let lightbulbOff = "img/bulb-off.png";
    let lightbulbOn = "img/bulb-on.png";

   fetchBulbs(function(bulbs){
        bulbs.forEach(function(bulb){
            let lightBulbSrc = bulb.on ? lightbulbOn : lightbulbOff;
            let img = $("<img>");
            img.attr("id", bulb.id)
            img.attr("src", lightBulbSrc)
            img.css({top: bulb.yPosition, left: bulb.xPosition, position:'absolute', height: 60, width: 60});
            if (bulb.isDimmable) {
            		img.addClass("dimmableBulb");
            		img.on("click", bulbSelectHandler)
            	}
            	else {
            		img.on("click", bulbOnOffHandler)
            	}
            floorPlan.append(img);

function bulbSelectHandler(event){
	// remove the selected class from the currently selected bulb
	$(".dimmableBulb.selected").removeClass("selected");

	// Add class to the bulb which is selected
	$(event.target).addClass("selected");
}

        });
    });
}

function fetchBulbs(okCode){
    let url = new URL("/bulbs", document.baseURI);

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then((data) => {
            okCode(data);
        },
            (error) => {
                console.log(error);
            });
}

$( document ).ready(function() {
    positionBulbs();
});

function fetchBulbs(okCode){
    let url = new URL("/bulbs", document.baseURI);

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then((data) => {
            okCode(data);
        },
            (error) => {
                console.log(error);
            });
}
