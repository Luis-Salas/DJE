;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('userController', Controller)

  function Controller (userFactory, $location, $routeParams) {
    var self = this
    self.login = function (){
      userFactory.login(self.users, function(returnData){
        console.log('in callback', returnData)
        if(returnData.status){
          $location.url('/dash')
        } else {
          alert('bad login')
        }
      })
    }
    self.index = function(){
      console.log('lasdffskl?')
      userFactory.index(function(returnData){
        console.log(returnData.data)
        self.AllUsers = returnData.data
      })
    }

  function getSession(){
    console.log('why')
    userFactory.getSession(function(data){
      console.log('-----')
      console.log(data.data)
      if(data.status){
        self.myUser = {}
        self.myUser.name = data.data.name
        self.myUser._id = data.data._id
        console.log(self.myUser)
      }
    })
  }
  getSession()
  }
})()
