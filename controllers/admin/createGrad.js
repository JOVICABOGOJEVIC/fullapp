const mongojs = require('mongojs');
const db = mongojs("fullapp", ["users", "gradovi"]);


const createGrad = (req, res) => {
    let mesto = req.body.mesto;
    let broj = req.body.broj;
 db.gradovi.insert({ mesto : mesto , broj: broj }, (err, docs) => {
        res.redirect("/admin");
    });
};

module.exports = createGrad;