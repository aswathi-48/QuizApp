import {Router} from "express"
const router =Router();

// import controller from '../controllers/controller.js'
//Questions routes API


router.get('/questions',(req,res)=>{
    res.json("questions api get request")
})





export default router;