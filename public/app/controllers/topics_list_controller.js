FoorumApp.controller('TopicsListController', function($scope, $location, Api) {

  $scope.newTopic = {name: null, description: null}

  const updateTopics = () => {
    Api.getTopics().success((topics) => {
      $scope.topics = topics;
    }) 
  }

  $scope.addTopic = (form) => {
    if(form.$valid){
      Api.addTopic($scope.newTopic)
        .then(updateTopics());
    }
  }

  $scope.init = updateTopics();

});
