;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('MailController', Controller)

  function Controller (MailFactory, $location, $routeParams) {
    var self = this
    self.mail = function(){
      MailFactory.mail(self.info,function(returnData){
        console.log(returnData)
      })
    }
}
})()
