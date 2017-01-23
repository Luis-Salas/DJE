const mongoose = require('mongoose')

function BEMailController(){
  this.index = function(req,res){
    console.log(req.body)
  }
}
module.exports = new BEMailController()
