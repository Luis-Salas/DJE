(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('viewFactory', factory)

  function factory($http){
    var factory = {}

    factory.index = function(callback){
      $http.get('/visits').then(function(returnData){
        console.log(returnData)
        callback(returnData)
      })
    }
    return factory
  }
})()
