const {Temperament} = require("../db")

const getTemperaments = async (req, res)=> {

    try {
        const allTemperaments = await Temperament.findAll()
        res.status(200).json(allTemperaments)    
    } catch (error) {
        return("la cagaste trayendo de la bd")
    }
}
module.exports = getTemperaments;
// module.exports = getTemperaments