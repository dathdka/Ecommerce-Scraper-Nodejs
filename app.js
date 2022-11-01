const express = require('express')
const http = require('node:http')
const cors = require('cors')
const router = require('./routers/router')
require('dotenv').config()

const app = express()

app.use(cors({origin: true}))

app.use(express.json())

app.use('/api',router);

const server = http.createServer(app)
const PORT = process.env.PORT || 3456

server.listen(PORT,()=>{
    console.log(`server runing on port : ${PORT}`)
})
