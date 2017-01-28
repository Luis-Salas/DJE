;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('userController', Controller)

  function Controller (userFactory, $location, $routeParams) {
    var self = this
    self.login = function (){
      console.log('kajhsflkasfojh')
  }
})()
