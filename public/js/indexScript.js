$(document).ready(function() {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

function click_handler() {
    alert("Pictures uploaded successfully!")
}


let submitGo = document.getElementById("go");

submitGo.addEventListener("click", click_handler, false);


function previewImages() {

    var previewOne = document.querySelector('#preview');

    if (this.files) {
        [].forEach.call(this.files, readAndPreview);
    }

    function readAndPreview(file) {

        // Make sure `file.name` matches our extensions criteria
        if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
            return alert(file.name + " is not an image");
        } // else...

        var reader = new FileReader();

        reader.addEventListener("load", function() {
            var image = new Image();
            image.height = 200;
            // image.margin = '5%';
            image.title = file.name;
            image.src = this.result;
            previewOne.appendChild(image);
        });

        reader.readAsDataURL(file);

    }

}

document.querySelector('#file-input').addEventListener("change", previewImages);


//New Line
function previewImagesTwo() {

    var previewTwo = document.querySelector('#preview2');

    if (this.files) {
        [].forEach.call(this.files, readAndPreviewTwo);
    }

    function readAndPreviewTwo(file) {

        // Make sure `file.name` matches our extensions criteria
        if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
            return alert(file.name + " is not an image");
        } // else...

        var readerTwo = new FileReader();

        readerTwo.addEventListener("load", function() {
            var imageTwo = new Image();
            imageTwo.height = 200;
            // image.margin = '5%';
            imageTwo.title = file.name;
            imageTwo.src = this.result;
            previewTwo.appendChild(imageTwo);
        });

        readerTwo.readAsDataURL(file);

    }

}

document.querySelector('#file-input2').addEventListener("change", previewImagesTwo);
