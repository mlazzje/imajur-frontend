var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
// See the above in device.js for their assignments

// api-camera
function onPhotoDataSuccess(imageData) {
    console.log("* * * onPhotoDataSuccess");
    var cameraImage = document.getElementById('cameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoURISuccess(imageURI) {
    console.log("* * * onPhotoURISuccess");
    // Uncomment to view the image file URI 
    // console.log(imageURI);
    var cameraImage = document.getElementById('cameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = imageURI;
}

function take_pic() {
    navigator.camera.getPicture(onPhotoURISuccess, function(ex) {
        alert("Camera Error!");
    }, { quality : 30, destinationType: Camera.DestinationType.FILE_URI });
}

function album_pic() { 
    navigator.camera.getPicture(onPhotoURISuccess, function(ex) {
            alert("Camera Error!"); }, 
            { quality: 30, 
        destinationType: Camera.DestinationType.FILE_URI,
        // Android Quirk: Camera.PictureSourceType.PHOTOLIBRARY and 
        // Camera.PictureSourceType.SAVEDPHOTOALBUM display the same photo album.
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM });
}

function change_view(nb) {
    $(".col").removeClass("col-33");
    $(".col").removeClass("col-50");
    switch(nb) {
        case 2:
            $(".col").addClass("col-50");
            break;
        case 3:
            $(".col").addClass("col-33");
            break;
    }
}

function upload() {
    var img = '{ "image" : [' +
    '{}]}';
}