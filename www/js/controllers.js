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

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ImgListCtrl', function($scope) {
  // TODO populer imglist avec les infos de la BDD
  // template = imglist.html
  $scope.imglist = [
    { title: 'Mathieu', id: 1 },
    { title: 'Degaine', id: 2 },
    { title: 'est un', id: 3 },
    { title: 'putain', id: 4 },
    { title: 'de', id: 5 },
    { title: 'noob !', id: 6 }
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
