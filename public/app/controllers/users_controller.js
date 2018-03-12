FoorumApp.controller('UsersController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
  $scope.user = {username: null, password: null};
  
  $scope.register = function(form){
    $scope.errorMessage = null;
    form.$setUntouched();
    form.$setPristine();
    if(form.$valid){
      Api.register($scope.user).success(function(response){

        $location.path('/login')
      }).error(function(response){

        $scope.errorMessage = response.error;
      });
    }
  }

  $scope.login = function(form){
    $scope.errorMessage = null;
    form.$setUntouched();
    form.$setPristine();
    if(form.$valid){
      Api.login($scope.user)
      .success(function(user){

        $location.path('/')
      }).error(function(){
        $scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';
      });
    }
  }
});
