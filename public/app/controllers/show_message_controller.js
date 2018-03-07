FoorumApp.controller('ShowMessageController', function($scope, $routeParams, Api){
	// Toteuta kontrolleri tähän

	$scope.reply = {
		content: null
	}

	function updateMessage(){
		Api.getMessage($routeParams.id).then( res => {
			$scope.message = res.data;
			console.log(res.data);
		})
	}

	$scope.init = updateMessage();

	$scope.onSubmit = function(form){
		if(form.$valid){
      form.$setUntouched();
      form.$setPristine();
      $scope.reply = { content : null }
		}
	}

	$scope.addReply = function(form){
		if(form.$valid){
      Api.addReply($scope.reply, $routeParams.id)
      	.then(updateMessage());
    }
	}

});
