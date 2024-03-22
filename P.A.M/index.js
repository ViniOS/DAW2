const express = require('express')
const { stat } = require('fs')
const status = require('http-status')
const app = express()

const category = require('./src/routes/category')
const activity = require('./src/routes/activity')
const user = require('./src/routes/user')

app.use('/category', category)
app.use('/activity', activity)
app.use('/user', user)

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(3000, ()=>{
    console.log("Server is running");
})