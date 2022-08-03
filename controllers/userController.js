
const userModel = require('../models/userModel')

const greetUser = async(req,res)=>{
    try{
        let name = req.body.Name;
        const found = await userModel.find({Name: name})
        if (found.length >0){
            return res.status(200).send(`BYE ${name}`)
        }
        await userModel.create(req.body)
        return res.status(200).send(`HII ${name}`)
    


    }
    catch(error){
        console.log(error)
        res.status(500).send(error.message)
    }
}

module.exports = {greetUser};