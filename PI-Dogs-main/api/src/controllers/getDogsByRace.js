require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");

const getDogsByRace = async (req, res)=> {
    const {idRaza} = req.params
    try {
        const response = await axios(`https://api.thedogapi.com/v1/breeds/${idRaza}?api_key=${API_KEY}`);
        const detail = {
            id : response.data.id,
            image : response.data.reference_image_id,
            name : response.data.name,
            height : response.data.height?.metric,
            weight : response.data.weight?.metric,
            temperament : response.data.temperament,
            life : response.data.life_span
        }
        res.status(200).json(detail)
    } catch (error) {
        res.send("fallaste con el id")
    }
}
module.exports = getDogsByRace
