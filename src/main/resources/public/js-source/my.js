// lightId     <input type="submit" value="Get data" name="lightId"> op lightbulb.html

function intialize(){
    var lightId = $("#lightId");
	lightId.on("change", lightIddChanged);
}

function personIdChanged(event){
	var inputField = event.target;
	var personId = inputField.value;
	var url = "/lightbulb";

	var parameters = {
		id : lightId
	};

	$.getJSON(url, parameters, fillLightbulb);
}

function fillLightbulb(data){
	$("body").append(JSON.stringify(data));
}

$(document).ready(intialize);