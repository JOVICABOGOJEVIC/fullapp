const mongojs = require('mongojs');
const db = mongojs("fullapp", ["users", "gradovi", "proizvodi"]);


const createProizvod = (req, res) => {
    let proizvod = req.body.proizvod;
    let cena = req.body.cena;

    db.proizvodi.insert({ proizvod: proizvod, cena: cena },(err, docs) => {
    
    res.redirect("/admin");
});
};     
module.exports = createProizvod;