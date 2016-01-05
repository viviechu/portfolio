'use strict';

angular.module('profileApp')
  .controller('MainController', function ($scope, dragDrop) {

     // on drop success function takes data, event col number
     //  - push to dropped object in target column
     //
     // on drag success delete from drag column
     $scope.draggableObjects1 = dragDrop.fetchDragCol('one')
     $scope.draggableObjects2 = dragDrop.fetchDragCol('two')
     $scope.draggableObjects3 = dragDrop.fetchDragCol('three')
      $scope.draggableObjects4 = dragDrop.fetchDragCol('four')

     $scope.droppedObjects1 = dragDrop.fetchDropCol('one')
     $scope.droppedObjects2 = dragDrop.fetchDropCol('two')
     $scope.droppedObjects3 = dragDrop.fetchDropCol('three')
     $scope.droppedObjects4 = dragDrop.fetchDropCol('four')

     $scope.onDropComplete=function(data,evt,col){

           dragDrop.drop(data,col);
            $scope.droppedObjects1 =  dragDrop.fetchDropCol('one')
            $scope.droppedObjects2 =  dragDrop.fetchDropCol('two')
            $scope.droppedObjects3 = dragDrop.fetchDropCol('three')
            $scope.droppedObjects4 = dragDrop.fetchDropCol('four')

        }

    $scope.onDragSuccess=function(data, evt, col){

         dragDrop.drag(data, col);
      $scope.draggableObjects1 = dragDrop.fetchDragCol('one');
      $scope.draggableObjects2 = dragDrop.fetchDragCol('two');
      $scope.draggableObjects3 = dragDrop.fetchDragCol('three');
      $scope.draggableObjects4 = dragDrop.fetchDragCol('four');
      $scope.droppedObjects1 =  dragDrop.fetchDropCol('one');
      $scope.droppedObjects2 =  dragDrop.fetchDropCol('two');
      $scope.droppedObjects3 =  dragDrop.fetchDropCol('three');
       $scope.droppedObjects4 =  dragDrop.fetchDropCol('four');
    }




  });

