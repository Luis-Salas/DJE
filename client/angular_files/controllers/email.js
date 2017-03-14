;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('MailController', Controller)

  function Controller (MailFactory, $location, $routeParams, $scope) {
    var self = this
    self.mail = function(){
      console.log('hello')
      console.log(self.email)
      MailFactory.mail(self.email,function(returnData){
        self.email = {}
        self.verify = returnData.data
      })
    }
}
})()
