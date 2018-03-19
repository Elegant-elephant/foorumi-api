FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){

  $scope.newMessage = {title: null, content: null}

  function updateTopic(){
    Api.getTopic($routeParams.id).then( res => {
      $scope.topic = res.data;
    })
  }

  $scope.onSubmit = (form) => {
    if(form.$valid){
      form.$setUntouched();
      form.$setPristine();
      $scope.newMessage = {title: null, content: null}
    }
  }

  $scope.addMessage = (form) => {  
    if(form.$valid){
      Api.addMessage($scope.newMessage, $routeParams.id)
        .then(updateTopic);
    }
  }

  $scope.init = updateTopic;
});