function processData(csv) {
    var allTextLines = csv.split(/\r\n|\r|\n/);
    var lines = [];
    console.log("file has", allTextLines.length, "lines")
    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
            var tarr = [];
            for (var j=0; j<data.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
    }
  console.log(lines);
}

function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
}

function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}
