angular.module('todoService', [])
  .factory('Todos', function($http){
    return{
      get : function(){
        return $http.get('api/todos');
      },

      create : function(formData){
        return $http.post('api/todos', formData);
      },

      update : function(id, todoData){
        return $http.post('api/todos/' + id, todoData);
      },

      delete : function(id){
        return $http.delete('api/todos/' + id);
      }
    }
  });
