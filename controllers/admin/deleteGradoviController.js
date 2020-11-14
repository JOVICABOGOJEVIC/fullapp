const mongojs = require('mongojs');
const db = mongojs("fullapp", ["gradovi"]);

const deleteGradoviController = (req,res)=>{
    let gradoviId = req.params.gradoviId;

    db.gradovi.remove({_id:mongojs.ObjectId(gradoviId)},(err,docs)=>{
        res.send("ok")
    })
}
module.exports = deleteGradoviController;