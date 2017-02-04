;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('viewController', Controller)

  function Controller (viewFactory,$location, $routeParams) {
    var self = this
    self.index = function(){
      viewFactory.index(function(returnData){
      console.log(returnData)
      self.view = returnData.data
    })
  }
}
})()
