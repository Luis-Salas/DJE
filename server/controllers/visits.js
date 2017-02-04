const mongoose = require('mongoose')
const Visit = mongoose.model('Visit')

  function visitController(){
    this.index = function(req,res){
      Visit.find({}, function(err,visit){
        console.log('CONSOLE LOG BEFORE INDEX')
        if(visit.length == 0){
          console.log('heree')
          var visit = new Visit({
            times: 1
          })
          visit.save(function(err,visit){
          })
          if(err) res.json(err)
          else res.json(visit)
          console.log(visit)
        }
        else{
          console.log(visit[0].times)
          var plus = visit[0].times + 1
          visit[0].times = plus
          visit[0].save()
          console.log('or heree')
          if(err) res.json(err)
          else res.json(visit)
        }
    })
  }
}
module.exports = new visitController()
