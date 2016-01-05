'use strict';

angular.module('profileApp')
  .factory('dragDrop', function () {
     var factory = {};
     var dropCol = {
       'one' : [],
       'two' : [],
       'three': [],
       'four': []
     };

     var  dragCol= {
       'one' : [{name: 'React',
                  photo:'assets/images/react.svg'}],
       'two' : [{name: 'mySQL',
                  photo:'assets/images/mySQL.png'},
                  {name: 'mongoDB',
                  photo:'assets/images/mongodb.png'}],
       'three': [{name: 'JAVA',
                  photo:'assets/images/java.png'}],
       'four': [{name: 'HTML5',
                  photo:'assets/images/HTML5.png'},
                 {name: 'CSS3',
                  photo: 'assets/images/css3.png'},
                {name: 'Javascript',
                 photo:'assets/images/javascript.png'},
                 {name: 'AngularJS',
                  photo:'assets/images/angular-js.png'},
                {name: 'NodeJS',
                 photo: 'assets/images/node.png'}]
     }
     factory.drop = function(data, name){
         var index = dropCol[name].indexOf(data);
         if (index == -1){
           dropCol[name].push(data)
         }
     };
     factory.drag = function(data, name){
        var index1 = dragCol[name].indexOf(data);
        if (index1 > -1) {
         dragCol[name].splice(index1, 1);
       }
        var index2 = dropCol[name].indexOf(data);
        if (index2 > -1) {
         dropCol[name].splice(index2, 1);
       }
     };
     factory.fetchDropCol = function(name){
       return dropCol[name];
     };

     factory.fetchDragCol = function(name){
       return dragCol[name];
     };



     return factory;
  });
