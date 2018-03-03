FoorumApp.controller('UsersController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
  $scope.user = {username: null, password: null};
  
  $scope.register = function(form){
    if(form.$valid){
      Api.register($scope.user).then(function(response){
        console.log('Rekisteröinti onnistui!');
        $location.path('/login');
      });
    }
  }

  $scope.login = function(form){
    if(form.$valid){
      Api.login($scope.user)
      .success(function(user){
        console.log('Kirjautuminen onnistui!');
        $location.path('/')
      }).error(function(){
        $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
      });
    }
  }
});
