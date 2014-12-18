angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $ionicPopup, $ionicPopover) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.auth = {};
  //$("#menuLogout").hide();

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.popLoginOk = function() {
    $ionicPopup.alert({
    title: 'Success!',
    content: 'Hello '+$scope.auth.pseudo+'!'
    }).then(function(res) {
      console.log('Test Alert Box');
    });
  };

  $scope.popLoginNok = function() {
    $ionicPopup.alert({
    title: 'Fail!',
    content: 'Bad credentials...'
    }).then(function(res) {
      console.log('Test Alert Box');
    });
  };

  $scope.popLogOut = function() {
    $ionicPopup.alert({
    title: 'Bye '+$scope.auth.pseudo+'!',
    content: 'You logged out successfully!'
    }).then(function(res) {
      console.log('Test Alert Box');
    });
  };

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Vérifie si l'user est authentifié
  $scope.isLogged = function() {
    return $scope.auth.id;
  };

  // Vérifie si l'user est authentifié
  $scope.logOut = function() {
    $scope.popLogOut();
    $scope.auth = {};
    /*$("#menuLogout").hide();
    $("#menuLogin").show();*/
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $.ajax('http://twix.linuxw.info/user/login',
    {
      dataType: "json",
      type: "POST",
      data: $scope.loginData,
      success: function(data) { 
        console.log(data); 
        $scope.auth.id = data.id;
        $scope.auth.pseudo = data.pseudo;
        /*$("#menuLogin").hide();
        $("#menuLogout").show();*/
        $scope.closeLogin();
        $scope.popLoginOk();
        //$scope.$apply();
      },
      error: function(request, textStatus, errorThrown) { 
        console.log("error " + textStatus + ": " + errorThrown);
        $scope.popLoginNok();
      }
    });
  };
})

.controller('ImgListCtrl', function($scope) {
  // TODO populer imglist avec les infos de la BDD
  // template = imglist.html
  $scope.imglist = [
    { id: 1, title: 'Mathieu', nb_comments:8, plus: 28, moins: 1, src:"http://fc07.deviantart.net/fs71/f/2011/054/3/c/3c512cf3b2dc387a34835c12ad9b4780-d3a8phz.gif" },
    { id: 2,title: 'Degaine', nb_comments:12, plus: 2, moins: 42,src: "http://www.jeu-poker-coach.com/images/profils-joueurs/pokerdonk-prof.jpg" },
    { id: 3,title: 'est un', nb_comments:14,plus: 3, moins: 64,src: "http://i218.photobucket.com/albums/cc241/sasuke123409501/Noob.gif" },
    { id: 4,title: 'putain', nb_comments:6,plus: 14, moins: 31,src: "http://fantasy-media.s3.amazonaws.com/players/955d8c3b7c14d982bfbf5f2f4a45b734.png" },
    { id: 5,title: 'de', nb_comments:1,plus: 6, moins: 21,src: "http://img4.wikia.nocookie.net/__cb20140627170803/plantsvszombies/images/9/98/A-noob-is_new.png" },
    { id: 6,title: 'noob !', nb_comments:8, plus: 89, moins: 1,src: "http://mmcdn4.hosting-media.net/jpg128/u3610151766693.jpg" }
  ];
})

.controller('ReviewController', function($scope) {
  this.review = [];
  this.review.user = $scope.auth.pseudo;
  this.addReview = function(img,reviews) {
    this.review.image = img.id;
    reviews.push(this.review);
    $.ajax('http://twix.linuxw.info/commentaire/insert',
    {
      dataType: "json",
      type: "POST",
      data: this.review,
      success: function(data) { 
        reviews.push(this.review);
        this.review = []; 
        this.review.user = $scope.auth.pseudo;
      },
      error: function(request, textStatus, errorThrown) { 
        console.log("error insert comm " + textStatus + ": " + errorThrown);
      }
    });
  };
})

.controller('BrowseCtrl', ['$scope','$stateParams','$http', function($scope, $stateParams, $http) {
  // TODO populer imglist avec les infos de la BDD
  // template = imglist.html
  $scope.images = [];
  $http.get('http://twix.linuxw.info/image/list').success(function(data) {
    $scope.images = data;
  });
}])

.controller('ImgDetailCtrl', ['$scope','$stateParams','$http', function($scope, $stateParams, $http) {
  // TODO Récupérer les élements de l'image avec son id passé en paramètres
  // template = imgdetail.html
  $scope.img = [];
  $scope.vote = [];
  $scope.reviews = [];
  $http.get('http://twix.linuxw.info/image/get/'+$stateParams.imgId).success(function(data) {
    $scope.img = data;
  });
  $http.get('http://twix.linuxw.info/vote/byimage/'+$stateParams.imgId).success(function(data) {
    $scope.vote = data;
  });
  $http.get('http://twix.linuxw.info/commentaire/byimage/'+$stateParams.imgId).success(function(data) {
    $scope.reviews = data;
  });
} ]);


