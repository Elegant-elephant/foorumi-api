FoorumApp.controller('UsersController', function($scope, $location, Api) {

  $scope.user = {username: null, password: null};
  
  $scope.register = (form) => {
    $scope.errorMessage = null;
    form.$setUntouched();
    form.$setPristine();
    if (form.$valid) {
      Api.register($scope.user)
        .success((response) => {$location.path('/login');})
        .error((response) => {$scope.errorMessage = response.error;});
    }
  }

  $scope.login = (form) => {
    $scope.errorMessage = null;
    form.$setUntouched();
    form.$setPristine();
    if (form.$valid) {
      Api.login($scope.user)
        .success((user) => {$location.path('/');})
        .error(() => {$scope.errorMessage = 'Väärä käyttäjätunnus tai salasana!';})
    }
  }
});
