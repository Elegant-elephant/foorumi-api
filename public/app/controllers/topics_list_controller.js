FoorumApp.controller('TopicsListController', function($scope, $location, Api) {

  const data = {
    topics: []
  }

  const getTopics = () => {
    Api.getTopics().success((newTopics) => {
      console.info("getTopics()")
      console.log($scope)
      console.log((data.topics.length > 0? 
          `Old: ${JSON.stringify($scope.topics)}\n`
          + "New: \n" : "Data: \n"
        ) + JSON.stringify(newTopics))
      data.topics = newTopics
    }) 
  }

  $scope.addTopic = () => {
    console.info("addTopic()")
    console.log($scope)
    const obj = {name: $scope.newTopic.name, description: $scope.newTopic.description}
    Api.addTopic(obj)
      .then(() => {getTopics()})
      .then(() => console.log($scope))
  }

  $scope.init = () => {
    console.info("init()")
    console.log($scope)
    $scope.data = data
    getTopics()
  }
});
