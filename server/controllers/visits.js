const mongoose = require('mongoose')
const Visit = mongoose.model('Visit')

  function visitController(){
    this.index = function(req,res){
      Visit.find({}, function(err,visit){
        if(visit.length == 0){
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
          if(err) res.json(err)
          else res.json(visit)
        }
    })
  }
}
module.exports = new visitController()
