const controller = {

    getVista: (req, res) => {
        res.render("torta.ejs", {
        title: "pasteleria",
        })
    }
}

module.exports = controller