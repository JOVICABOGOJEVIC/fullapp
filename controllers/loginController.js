const mongojs = require('mongojs');
const db = mongojs("fullapp",["users"]);


const loginController = (req,res)=>{
//preuzeti podatke
let nameizForme = req.body.name;
let passizForme = req.body.pass;


db.users.find({ime:nameizForme,password:passizForme},(err,docs)=>{
    if (err){
        console.log('greska');
        res.redirect("/");
    }
    else{
        if(docs.length === 1){
            //pronadjen korisnik
            let user = docs[0];
            req.session.user = user;
            if (user.role == "admin"){
                res.redirect('/admin')
            } else{
        res.redirect("/");
            }
        }else{
            //podaci nisu tacni
        res.redirect("/");

        }
    }
})
}

module.exports = loginController;