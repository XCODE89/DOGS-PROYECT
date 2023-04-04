const {Temperament} = require("../db")

const getTemperaments = async (req, res)=> {

    try {
        const allTemperaments = await Temperament.findAll({attributes: ['name']})
        const orderedTemps = allTemperaments.sort((a, b) => (a.name > b.name ? 1 : -1));

        res.status(200).json(orderedTemps)    
    } catch (error) {
        return("la cagaste trayendo de la bd")
    }
}
module.exports = getTemperaments;