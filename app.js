const express = require('express')
const path = require('node:path')
const app = express()
const mainRouter = require('./routes/mainRoute')
const newFormRoute = require('./routes/newFormRoute')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.use('/', mainRouter)
app.use('/new', newFormRoute)

app.listen(4000, (err) => {
  if (err) throw err
})