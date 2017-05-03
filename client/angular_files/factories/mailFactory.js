(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('MailFactory', factory)

  function factory($http){
    var factory = {}

    factory.mail = function(mailInfo,callback){
      console.log(mailInfo)
      $http.post('/mail', mailInfo).then(function(response){
        console.log(response)
        callback(response)
      })
    }
    return factory
}
})()
