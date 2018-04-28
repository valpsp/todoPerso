angular.module('todoController', [])
  .controller('mainController', function($scope, $http, Todos){
    $scope.formData = {};


    //GET
    Todos.get()
      .success(function(data){
        $scope.todos = data;
        console.log($scope.todos);
      });


    $scope.createTodo = function(){
      Todos.create($scope.formData)
        .success(function(data){
          $scope.formData = {};
          $scope.todos = data;  //on récup les todos à jour
        });
    };

    $scope.updateTodo = function(id, todoText){
      Todos.update(id, {text: todoText})
        .success(function (data) {
          $scope.todos = data;
        });
    };

    $scope.deleteTodo = function(id){
      Todos.delete(id)
        .success(function(data){
          $scope.todos = data;
        });
    };
  });
