const controller = {

    getVista: (req, res) => {
        res.render("calculator.ejs", {
        title: "calculadora",
        })
    }
}

module.exports = controller