var outstandingCalls = 0;

function intialize() {
    var personId = $("#personId");
    personId.on("change", personIdChanged);

    intializePersonSelect();

    var updateButton = $("#update");
    updateButton.on("click", updatePerson);
}

function personIdChanged(event) {
    var inputField = event.target;
    var personId = inputField.value;
    var url = "/person";

    var parameters = {
        id: personId
    };

    $.getJSON(url, parameters, fillPerson);
}

function fillPerson(data) {
    var id = data.id;
    var fullName = data.fullName;
    var birthDate = data.birthDatePrint;
    var streetAndNumber = data.address.streetname + " " + data.address.number;
    var cityAndZipcode = data.address.city + " " + data.address.zipCode;
    var firstName = data.firstName;
    var prefix = data.prefix;
    var lastName = data.lastName;

    $("#fullName").text(fullName);
    $("#birthDate").text(birthDate);
    $("#streetAndNumber").text(streetAndNumber);
    $("#cityAndZipcode").text(cityAndZipcode);

    $("#firstName").val(firstName);
    $("#prefix").val(prefix);
    $("#lastName").val(lastName);

    selectCorrectPerson(id);
}

function selectCorrectPerson(id) {
    // synchronize the select
    var personSelect = $("#personId");
    personSelect.val(id);

    $("button").removeClass("selected");
    $("button[value='" + id + "']").addClass("selected");
}

function intializePersonSelect(selectedId) {
    var personSelect = $("#personId");
    personSelect.find('option').remove();
    var url = "/persons";

    var success = function success(data) {
        var selectedPerson = data[0];
        data.forEach(function (person) {
            var option = $("<option>");
            option.text(person.fullName);
            option.attr("value", person.id);
            if (selectedId == person.id) {
                option.attr("selected", "selected");
                selectedPerson = person;
            }
            personSelect.append(option);

            createButton(person.id, person.fullName, selectedId);
        });

        fillPerson(selectedPerson);
    };

    $.getJSON(url, null, success);
}

function createButton(id, name, selectedId) {
    // Remove the old button if present
    $("button[value='" + id + "']").remove();

    var button = $("<button>");
    button.attr("value", id);
    button.text(name);

    if (selectedId == id) {
        button.addClass("selected");
    }

    $("body").append(button);
    button.on("click", personIdChanged);
}
function updatePerson() {
    var url = "/updatePerson";
    var id = $("#id").text();
    var firstName = $("#firstName").val();
    var prefix = $("#prefix").val();
    var lastName = $("#lastName").val();

    var parameters = {
        id: id,
        firstName: firstName,
        prefix: prefix,
        lastName: lastName,
        // this is just a test to see if the address can be posted at the same time.
        address: {
            streetname: "hoflaan",
            number: 17,
            zipCode: "1234AA",
            city: "Zoomstra"
        }
    };

    // convert the json to something the controller understands
    // This is needed because a complex parameter is used (address is included)
    // If only the person is posted, this is not needed and the parameters can just be added in the getJSON
    url = url + "?" + jQuery.param(parameters);
    url = url.replace(/\%5B/g, ".");
    url = url.replace(/\%5D/g, "");

    var succeeded = function succeeded(data) {
        fillPerson(data);
        intializePersonSelect(data.id);
    };

    $.getJSON(url, null, succeeded, onError, onAlways);
};

$(document).ready(intialize);