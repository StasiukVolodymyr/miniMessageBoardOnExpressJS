const messages = require('../db')

exports.getNewFormController = (req, res) => {
  res.render('newForm')
}

exports.postNewFormController = (req, res) => {
  messages.push({text: req.body.messageText, user: req.body.userName, added: new Date()})
  res.redirect('/')
}