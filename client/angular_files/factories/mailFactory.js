(function (){
  'use strict'
  angular
    .module('myApp')
    .factory('MailFactory', factory)

  function factory($http){
    var factory = {}

    factory.mail = function(mailInfo,callback){
      console.log(mailInfo)
      $http.post('/mail', mailInfo).then(function(returnData){
        callback(returnData)
      })
    }
    return factory
}
})()
