FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  // Toteuta kontrolleri tähän
  Api.getTopic($routeParams.id).then( res => {
    $scope.topic = res.data;
  })

  $scope.addMessage = () => {
    console.log($scope.newMessage)
    Api.addMessage({title: $scope.newMessage.title, content: $scope.newMessage.content}, $routeParams.id);
  }
});
