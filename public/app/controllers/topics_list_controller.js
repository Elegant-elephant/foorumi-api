FoorumApp.controller('TopicsListController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
  /* Api.getTopics().success(function(topics) {
    $scope.topics = topics
  }) */
  $scope.topics = [{name: "Name", description: "Desc"}]
  $scope.addTopic = () => Api.addTopic({name: $scope.newTopic.name, description: $scope.newTopic.description})
});
