FoorumApp.controller('TopicsListController', function($scope, $location, Api) {

  $scope.newTopic = {name: null, description: null}

  const updateTopics = () => {
    Api.getTopics().success((topics) => {
      $scope.topics = topics;
    }) 
  }

  $scope.addTopic = () => {
    const obj = { name: $scope.newTopic.name, description: $scope.newTopic.description }
    Api.addTopic(obj)
      .then(updateTopics());
  }

  $scope.init = updateTopics();

});
