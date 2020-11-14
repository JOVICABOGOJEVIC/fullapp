const mongojs = require('mongojs');
const db = mongojs("fullapp",["users"]);

const saveController = (req,res)=>{
    //preuzeti podatke
    let ime = req.body.ime;
    let prezime = req.body.prezime;
    let lozinka = req.body.lozinka;
    let role = req.body.role;
 
    db.users.insert(
        {
        ime:ime,
        prezime:prezime,
        lozinka:lozinka,
        role:role,
    },
    (err,docs) => {
        if (err) {
            //display error page
        }else{
            res.redirect("/admin");
        }
    }
    );
};

module.exports = saveController;
