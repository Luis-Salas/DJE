const mail = require('../controllers/BEMail.js')
const visit = require('../controllers/visits.js')


module.exports = function(app){
  app.post('/mail', mail.index)
  app.get('/visits', visit.index)
}
