FoorumApp.controller('UsersController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
  
  $scope.register = function(){
    Api.register({
      username: $scope.newUser.username,
      password: $scope.newUser.password
    }).then(function(response){
      console.log('Rekisteröinti onnistui!');
      $location.path('/login');
    });
  }

  $scope.login = function(){
    Api.login({
      username: $scope.user.username,
      password: $scope.user.password
    }).success(function(user){
      console.log('Kirjautuminen onnistui!');
      $location.path('/')
    }).error(function(){
      $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
    });
  }
});
