import Questions from "../models/questionShema.js"
import Results from "../models/resultShema.js"
import questions, { answers } from '../database/data.js'



export async function getQuestions(req, res) {

    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

export async function insertQuestions(req, res){
    try {
       Questions.insertMany({ questions, answers },
            res.json({ msg: "Data Saved Successfully...!"}), 
            )
    } catch (error) {
        res.json({ error })
    }
}

export async function dropQuestions(req, res){
    try {
         await Questions.deleteMany();
         res.json({ msg: "Questions Deleted Successfully...!"});
    } catch (error) {
         res.json({ error })
    }
 }

export async function getResult(req, res) {

    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export async function storeResult(req, res){
    try {
         const { username, result, attempts, points, achived } = req.body;
         if(!username && !result) throw new Error('Data Not Provided...!');
 
        await Results.create({ username, result, attempts, points, achived },  
             res.json({ msg : "Result Saved Successfully...!"})
         )
 
    } catch (error) {
         res.json({error})
    }
 }
 

 export async function dropResult(req, res){
     try {
         await Results.deleteMany();
         res.json({ msg : "Result Deleted Successfully...!"})
     } catch (error) {
         res.json({ error })
     }
 }
