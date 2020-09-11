
function parseCSV(csv_content) {
    d3_parser = d3.csvParse(csv_content)
    console.log(d3_parser)
    if (d3_parser.length === 0) {
        return
    }
    console.log(d3_parser[0])
    for (var key in d3_parser[0]) {

        $("#headers").append(`<option value=\"${key}\">${key}</option>`);
    }

}

function loadHandler(event) {
    var csv = event.target.result;
    parseCSV(csv);
}

function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}
