angular.module('todoController', [])

   .controller('mainController', function($scope, $http, Todos){
      $scope.formData = {};

      // GET ===============================================
      //when landing on the page, get all todos and show them
      // use the service to get all the todos
      Todos.get()
         .success(function(data){
            $scope.todos = data;
         });
      // $http.get('/api/todos')
      //    .success(function(data){
      //       $scope.todos = data;
      //       console.log(data);
      //    })
      //    .error(function(data){
      //       console.log('Error: ' + data);
      //    });

      // CREATE ===============================================
      //when submitting the add form, send the text to the node api
      $scope.createTodo = function(){
         // Validate the formData to make sure that something is there
         // if form is empty, nothing will happen
         // people can't just hold enter to keep adding the some to-do anymore
         if ($scope.formData.text !== undefined){
            // Call the create function from our service (returns a promise object)
            Todos.create($scope.formData)
               // If successful creation, call our get function to get all the new todos
               .success(function(data){
                  $scope.formData = {}; //clear the form so our user us ready to enter another
                  $scope.todos = data; //assign our new list of todos
               });
         }
      };
      // $scope.createTodo = function(){
      //    $http.post('/api/todos', $scope.formData)
      //       .success(function(data){
      //          $scope.formData = {}; //clear the form so our user us ready to enter another
      //          $scope.todos = data;
      //          console.log(data);
      //       })
      //       .error(function(data){
      //          console.log('Error: ' + data);
      //       });
      // };

      // DELETE ===============================================
      //Delete a todo after checking it
      $scope.deleteTodo = function(id){
         Todos.delete(id)
            // If successfuf delete, call our get function to get all the new todos
            .success(function(data){
               $scope.todos = data;
            });
      };
      // $scope.deleteTodo = function(id){
      //    $http.delete('/api/todos/' + id)
      //       .success(function(data){
      //          $scope.todos = data;
      //          console.log(data);
      //       })
      //       .error(function(data){
      //          console.log('Error: ' + data);
      //       });
      // };
   });
