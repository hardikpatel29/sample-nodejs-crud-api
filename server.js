require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const itemRouter = require('./routes/itemRouter')

const app = express();  
app.use(express.json());


app.use('/api/items', itemRouter)

// app.get('/api/items', (req,res) => {
//     res.json({msg: "RestFul API"})
// })



//const port = 5000
const port = process.env.PORT
app.listen(port, () => {
    
    console.log('server is running on port : ', port)
    //console.log(process.env.MONGODB_URL);

})

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
    
}, err =>{
    if(err) throw err;
    console.log('mongo connected')
});