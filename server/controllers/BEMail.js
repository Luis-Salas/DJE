const mongoose = require('mongoose')
var sendmail = require('sendmail')();

function BEMailController(){
  this.index = function(req,res){
    console.log(req.body)
    var message = req.body.name
    var number = req.body.number
    console.log(number)
    console.log(message)
    sendmail({
    from: 'no-reply@djenriquesalas.com',
    to: 'salas.luis40@gmail.com',
    subject: 'New Inquiry',
    html:'Name of person: ' +req.body.name + '   phone number: '+ req.body.number + '    Message :' + req.body.message,
    },
     function(err, reply) {
      console.log(err && err.stack);
      res.json('Email was sent');
    });
  }
}


module.exports = new BEMailController()
