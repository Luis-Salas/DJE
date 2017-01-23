const mail = require('../controllers/BEMail.js')


module.exports = function(app){
  app.post('/mail', mail.index)
}
