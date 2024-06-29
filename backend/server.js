import express from 'express'
const app = express()
import cors from 'cors'
import {config} from 'dotenv'
// const router = require('./router/route.js')

import router from './router/route.js'
import morgan from 'morgan'

//app middleware

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config()
//application port

const port  = process.env.PORT || 8080

// routes
app.use('/api', router)      //api


app.get('/', (req,res) =>{
    try{
        res.json("Get Request")
    }catch(err){
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`Server Connected ${port}`);
})