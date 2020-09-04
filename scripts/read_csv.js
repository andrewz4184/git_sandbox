
function parseCSV(csv_content) {
    d3_parser = d3.csvParse(csv_content)
    console.log(d3_parser)
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
