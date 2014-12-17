angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
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

.controller('ReviewController', function() {
  this.review = [];
  this.addReview = function(img) {
    img.reviews.push(this.review);
    this.review = [];
  };
})

.controller('BrowseCtrl', function($scope) {
  // TODO populer imglist avec les infos de la BDD
  // template = imglist.html
  $scope.images = [
    { id: 1, title: 'Mathieu', src:"http://fc07.deviantart.net/fs71/f/2011/054/3/c/3c512cf3b2dc387a34835c12ad9b4780-d3a8phz.gif" },
    { id: 2,title: 'Degaine', src: "http://www.jeu-poker-coach.com/images/profils-joueurs/pokerdonk-prof.jpg" },
    { id: 3,title: 'est un', src: "http://i218.photobucket.com/albums/cc241/sasuke123409501/Noob.gif" },
    { id: 4,title: 'putain', src: "http://fantasy-media.s3.amazonaws.com/players/955d8c3b7c14d982bfbf5f2f4a45b734.png" },
    { id: 5,title: 'de', src: "http://img4.wikia.nocookie.net/__cb20140627170803/plantsvszombies/images/9/98/A-noob-is_new.png" },
    { id: 6,title: 'noob !', src: "http://mmcdn4.hosting-media.net/jpg128/u3610151766693.jpg" }
  ];
})

.controller('ImgDetailCtrl', function($scope, $stateParams) {
  // TODO Récupérer les élements de l'image avec son id passé en paramètres
  // template = imgdetail.html
  $scope.img =
    { title: 'Mathieu', 
      id: 1,
      plus: 28,
      moins: 12,
      src: "http://img3.wikia.nocookie.net/__cb20061016203941/desencyclopedie/images/c/c4/Noob.jpg",
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    };
});
