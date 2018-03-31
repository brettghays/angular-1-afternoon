var app = angular.module('myApp', [])

app.controller('mainCtrl', function($scope) {
    $scope.message = 'Hello Utah!'  
    $scope.todos = [
      {
        status: 'done',
        title: 'clean socks'
      },
      {
        status: 'not done',
        title: 'make a smoothie'
      }
    ]
    $scope.log = item => console.log(item);
    $scope.addToDo = newToDo => $scope.todos.push({title: newToDo, status: 'not done'});
    $scope.done = index => $scope.todos[index].status = 'done';
    $scope.delete = index => $scope.todos.splice(index,1);
});

   