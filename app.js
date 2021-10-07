const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')
const postRouter = require('./routers/posts')
app.use(cors())
require('dotenv/config')
app.use(express.json())
app.use('/posts', postRouter)



mongoose.connect('mongodb+srv://charannivas:charan123@cluster0.ejosu.mongodb.net/Charan?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log('Connection successful')
}).catch(err=>{
    console.log(err)
})

app.listen(4000, ()=>{
    console.log('http://localhost:4000')
})