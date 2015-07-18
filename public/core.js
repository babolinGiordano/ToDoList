// All angular coe for out app
var baboTodo = angular.module('baboTodo', []);

function mainController($scope, $http){
   $scope.formData = {};

   //when landing on the page, get all todos and show them
   $http.get('/api/todos')
      .success(function(data){
         $scope.todos = data;
         console.log(data);
      })
      .error(function(data){
         console.log('Error: ' + data);
      });

   //when submitting the add form, send the text to the node api
   $scope.createTodo = function(){
      $http.post('/api/todos', $scope.formData)
         .success(function(data){
            $scope.formData = {}; //clear the form so our user us ready to enter another
            $scope.todos = data;
            console.log(data);
         })
         .error(function(data){
            console.log('Error: ' + data);
         });
   };

   //Delete a todo after checking it
   $scope.deleteTodo = function(id){
      $http.delete('/api/todos/' + id)
         .success(function(data){
            $scope.todos = data;
            console.log(data);
         })
         .error(function(data){
            console.log('Error: ' + data);
         });
   };
}
