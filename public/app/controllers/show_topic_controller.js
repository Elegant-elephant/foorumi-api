FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  // Toteuta kontrolleri tähän
  $scope.newMessage = {title: null, content: null}

  function updateTopic(){
    Api.getTopic($routeParams.id).then( res => {
      $scope.topic = res.data;
    })
  }
  
  $scope.init = updateTopic();

  $scope.addMessage = () => {
    Api.addMessage({title: $scope.newMessage.title, content: $scope.newMessage.content}, $routeParams.id)
    .then(updateTopic());
  }
});