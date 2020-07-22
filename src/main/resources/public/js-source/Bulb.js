//let sessionTimeout = nul;

//methode wat ie moet doen als hij van de server afkomt

function change(event){

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

function rangeOpacity(value) {
         var root = document.documentElement;
         root.style.setProperty('--exp', (value/100))
}

function setBulbStatus(bulbId, okCode){
    let url = new URL("/setBulb", document.baseURI);
    url.searchParams.append("bulbId", bulbId);
    console.log("Before fetch")

    fetch(url)
        .then(response => {
            return response.json();
        })
        //resultaat van de sever
        .then((data) => {
//            console.log("Before fetch")
            console.log(data)
            okCode(data);
        },
            (error) => {
                console.error(error);
            });
//    console.log("After fetch")
}

//zie ook code hieronder positionBulbs
function positionBulbs(){
    let floorPlan = $("#floorplanContainer")
    let lightbulbOff = "img/bulb-off.png";
    let lightbulbOn = "img/bulb-on.png";

// fetch bulbs met een methode, die gaat naar de server als de respons van de server komt dan wort deze uitgevoerd
    fetchBulbs(function(bulbs){
        bulbs.forEach(function(bulb){
            let lightBulbSrc = bulb.on ? lightbulbOn : lightbulbOff;
            let img = $("<img>");
            img.attr("id", bulb.id)
            img.attr("src", lightBulbSrc)
            img.css({top: bulb.yPosition, left: bulb.xPosition, position:'absolute', height: 65, width: 65});
            img.on("click", change)
            floorPlan.append(img);
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

// dit stukje code wordt getoond als de hele pagina geladen is, dan roept hij de methode positionBulbs aan
$( document ).ready(function() {
    positionBulbs();
});

// toggle zet lamp aan of uit
function fetchBulbs(okCode){
    let url = new URL("/bulbs", document.baseURI);

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then((data) => {
            okCode(data);
//             console.log("toggle");
        },
            (error) => {
                console.log(error);
            });
}
