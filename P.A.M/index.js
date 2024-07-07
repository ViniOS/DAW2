const express = require('express')
const app = express()
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const category = require('./src/routes/category')
const activity = require('./src/routes/activity')
const user = require('./src/routes/user')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/category', category)
app.use('/activity', activity)
app.use('/user', user)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(3000, ()=>{
    console.log("Server is running");
})