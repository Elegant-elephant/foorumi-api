FoorumApp.controller('UsersController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
  $scope.register = function(){
    Api.register({
      username: $scope.newUser.username,
      password: $scope.newUser.password
    })
  }

  $scope.login = function(){
    Api.login({
      username: $scope.user.username,
      password: $scope.user.password
    })
  }
});
