const mongojs = require('mongojs');
const db = mongojs("fullapp", ["users", "gradovi", "priozvodi"]);


const adminController = (req, res) => {
    let user = req.session.user;
    db.users.find({}, (err, users) => {
        db.proizvodi.find({}, (err, proizvodi) => {
            db.gradovi.find({}, (err, gradovi) => {

            let operateri = users.filter(user => user.role = "oparater");
           let savetnici = users.filter(user => user.role = "savetnik");

                res.render("admin/adminDashboard", {
                    ime: users.ime,
                    gradovi: gradovi,
                    proizvodi: proizvodi,
                    operateri: operateri,
                    savetnici: savetnici
                });
            })
        })
    })
}

module.exports = adminController;