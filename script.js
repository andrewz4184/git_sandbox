$(document).ready(function (event) {

    /*
    var upload = function (files) {
        var formData = new FormData(),
            xhr = new XMLHttpRequest(),
            x;
        for(x = 0; x < files.length;x = x + 1){
            formData.append('file[]',files[x]);
        }

        xhr.onload = function(){
            var data = this.responseText;
            console.log(data)
        }

        xhr.open('POST','upload.php');
        xhr.send(formData);

    };
    */

    //adds dragover class to dropzone when dragging something over the drop zone
    $("#dropzone").on("dragover", function (event) {
        console.log("enter");
        $(this).addClass('dragover');
        return false;
    });

    //removes dragover class from dropzone when leaving dropzone
    $("#dropzone").on("dragleave", function (event) {
        console.log("leave");
        $(this).removeClass('dragover');
        return false;
    });
    //Handles what happens after file is dropped in drop zone
    $("#dropzone").on("drop", function (e) {
        console.log("drop");
        $(this).removeClass('dragover');
        
        upload(e.originalEvent.dataTransfer.files);
        e.preventDefault();
    });
});