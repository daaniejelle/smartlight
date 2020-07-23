//turn the bulb on and off
//setbulbstatus na function geeft ie aan wat hij moet doen als het antwoord van de server komt

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

//shor or hide slider
    function toggle(event) {
        var slide = document.getElementById('slide');
        var image = event.target;
        var id = image.id;

        var lightBulb = setBulbStatus(id, function(slider) {

        if (slide.style.display == 'block') {
            slide.style.display = 'none';
        }
        else {
            slide.style.display = 'block';
             }

        });
}

// slider tonen die hoort bij het losse image
    function toggle(ele) {
        var slide = document.getElementById('slide');
        if (slide.style.display == 'block') {
            slide.style.display = 'none';

        }
        else {
            slide.style.display = 'block';
        }
    }

//Switch all lights on or off = not defined yet
    function swap(argument) {
        var element = document.getElementById(argument);
        var attr_Name = element.getAttribute("src");
            attr_Name = attr_Name.split("/").pop();
        if(argument =="lightOn"){
            if(attr_Name == "light-on.jpg"){
                document.getElementById(argument).setAttribute("src", "img/light-off.jpg");
            }else{
                document.getElementById(argument).setAttribute("src", "img/light-on.jpg");
            }
        }
        else if(argument =="lightOff"){
            if(attr_Name == "light-off.jpg"){
                document.getElementById(argument).setAttribute("src", "img/light-on.jpg");
            }else{
                document.getElementById(argument).setAttribute("src", "img/light-off.jpg");
            }
        }
}

//originele code die refereert naar de <div> in de html
function rangeOpacity(value) {
    var root = document.documentElement;
    root.style.setProperty('--exp', (value/100))
}


//okCode code die uitgevoerd moet worden
function setBulbStatus(bulbId, okCode){
    let url = new URL("/setBulb", document.baseURI);
    url.searchParams.append("bulbId", bulbId);

    fetch(url)
        .then(response => {
            return response.json();
            console.log("see bulbs");
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

//functie wordt uitgevoerd als de respons van de server komt
   fetchBulbs(function(bulbs){
        bulbs.forEach(function(bulb){
            let lightBulbSrc = bulb.on ? lightbulbOn : lightbulbOff;
            let img = $("<img>");
            img.attr("id", bulb.id)
            img.attr("src", lightBulbSrc)
            img.css({top: bulb.yPosition, left: bulb.xPosition, position:'absolute', height: 160, width: 160});
            img.on("src", swap);

            if (bulb.dimmable) {
  		            //let lightBulbsection = bulb.dimmable block : none;
  		            let section = $("<section>");
  		            img.addClass("dimmableBulb");
            		img.on("click", bulbSelectHandler);
            		img.css({height: 160, width: 160});
            		img.css({opacity: bulb.intensity});
            		 img.on("click", toggle);
            		//function rangeOpacity(value)
            		//section.value("valueInput");

            		//img.function(rangeOpacity);
            		//img.css({opacity: 0.5});
            		//class.input(value="50", min="1", max="100");
            	}

            	else {
            		img.on("click", bulbOnOffHandler)
            	}
            floorPlan.append(img);
            console.log('bulbs')


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
        console.log(data)
            okCode(data);
        },
            (error) => {
                console.log(error);
            });
}

//deze code wordt uitgevoerd als de hele pagina geladen is
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










//function rangeOpacity(value) {
//    var bulb = dimmable;
//    var root = document.documentElement;
//    if(bulb.dimmable) {
//        root.style.setProperty('--exp', (value/100))
//        }
//        else {
//        return false
//        }
//}


//code daan
//
//function rangeOpacity(value) {
//     var root = document.documentElement;
//     //var id = image.id;
//     var bulbDimmer = setBulbStatusDim(root, function(lightDimmer) {
//
//     if (bulb.dimmable) {
//          root.style.setProperty('--exp', (value/100))
//     }
//
//     else {
//         bulbOnOffHandler()
//     }
//
//        });
//}
