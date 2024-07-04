import Questions from '../models/questionShema.js'

export async function  getQuestions (req,res){

    try {
        const q = await Questions.find();
        res.json(q)
    }catch(error) {
        res.json( { error})
    }
}


export async function insertQuestions(req,res){
    res.json("questions api post request")
}

export async function dropQuestions(req,res){
    res.json("questions api delete request")
}

export async function getResult(req,res){
    res.json("result api get request")
}

export async function StoreResult(req,res){
    res.json("result api post request")
}

export async function dropResult(req,res){
    res.json("result api delete request")
}