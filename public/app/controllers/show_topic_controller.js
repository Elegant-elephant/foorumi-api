FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  // Toteuta kontrolleri tähän
  Api.getTopic($routeParams.id).then( res => {
    $scope.topic = res.data;
  })

  $scope.formatDate = function(date) {
    date = new Date(date);
    const options = {  
      weekday: "long", year: "numeric", month: "numeric",  
      day: "numeric", hour: "2-digit", minute: "2-digit"  
    };  
    return date.toLocaleTimeString("fi-FI", options);
  }

  $scope.addMessage = () => {
    console.log($scope.newMessage)
    Api.addMessage({title: $scope.newMessage.title, content: $scope.newMessage.content}, $routeParams.id);
  }
});
