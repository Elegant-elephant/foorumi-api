FoorumApp.service('Api', function($http){
  // TOPIC
  this.getTopics = function(){
    return $http.get("/topics");
  }
  this.getTopic = function(id){
    return $http.get("/topics/" + id);
  }
  this.addTopic = function(topic){
    return $http.post("/topics", topic);
  }

  // MESSAGE
  this.getMessage = function(id){
    return $http.get("/messages/"+id);
  }
  this.addMessage = function(message, topicId){
    return $http.post("/topics/"+topicId+"/message", message);
  }

  // REPLY
  this.addReply = function(reply, messageId){
    return $http.post("/messages/"+messageId+"/reply", reply);
  }

  // USER
  this.login = function(user){
    return $http.post('/users/authenticate', user);
  }
  this.register = function(user){
    return $http.post('/users', user);
  }
  this.getUserLoggedIn = function(){
    return $http.get('/users/logged-in');
  }
  this.logout = function(){
    return $http.get('/users/logout');
  }
});
