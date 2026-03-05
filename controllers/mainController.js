const messages = require('../db')

const mainController = (req, res) => {
  res.render('index', {messages})
}

module.exports = mainController