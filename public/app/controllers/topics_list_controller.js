FoorumApp.controller('TopicsListController', function($scope, $location, Api){
  Api.getTopics().success(function(topics) {
    $scope.topics = topics
  })
  $scope.addTopic = () => Api.addTopic({name: $scope.newTopic.name, description: $scope.newTopic.description})
});
