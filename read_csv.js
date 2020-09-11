/*
$(document).ready(function() {
	$("#upload").on("click",function(){
        console.log("hello");
        var fr = new FileReader();
        fr.onload = loadHandler;
        fr.onerror = errorHandler;
        fr.readAsText(this.files[0]);

    })
});

function parseCSV(csv_content) {
    d3_parser = d3.csvParse(csv_content)
    console.log(d3_parser)
}

function loadHandler(event) {
    var csv = event.target.result;
    parseCSV(csv);
}

function errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}
*/
var dropdownClickShow = false;

var names = [];
var i = 0;
$(document).ready(function () {

    $("#dropdown").on("click", function () {
        dropdownClickShow = !dropdownClickShow;
        d3.csv("TechCrunchcontinentalUSA.csv").then(function (data) {

            Object.keys(data[0]).forEach((prop) => names.push(prop)); //Grabs the object properties and stores it into an array


            while(i < names.length){
                $("ul.list").append("<li>" + names[i] + "</li>");
                i++;
            }
            i = 500;


        });


    });



});

