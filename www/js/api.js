var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
var imgURI;
// See the above in device.js for their assignments

// api-camera
function onPhotoDataSuccess(imageData) {
    console.log("* * * onPhotoDataSuccess");
    var cameraImage = document.getElementById('cameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = "data:image/jpeg;base64," + imageData;
}
// fonction lancée quand une photo à été prise ou recupérée
function onPhotoURISuccess(imageURI) {
    console.log("* * * onPhotoURISuccess");
    // on affiche dans la page d'upload
    var cameraImage = document.getElementById('cameraImage');
    cameraImage.style.visibility = 'visible';
    cameraImage.src = imageURI;
    imgURI = imageURI;
}
// permet de prendre une photo
function take_pic() {
    // en cas de photo prise la fonction onPhotoURISuccess est appelée
    navigator.camera.getPicture(onPhotoURISuccess, function(ex) {
        alert("Camera Error!");
    }, { quality : 30, destinationType: Camera.DestinationType.FILE_URI });
}
// permet de rechercher une photo stockée dans l'appareil
function album_pic() { 
    // en cas de photo prise la fonction onPhotoURISuccess est appelée
    navigator.camera.getPicture(onPhotoURISuccess, function(ex) {
            alert("Camera Error!"); }, 
            { quality: 30, 
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM });
}

// template browse
// permet de changer le nbre d'images par ligne
function changeView(nb) {
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