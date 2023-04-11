require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios")
const {Dog, Temperament} = require ("../db");

const getDogsByRace = async (req, res)=> {
    const {idRaza} = req.params    
    try {        
        if(isNaN(Number(idRaza))) {
            const matchDogBd = await Dog.findByPk(idRaza, {include : Temperament});
            const temperaments = matchDogBd.temperaments.map(temp => temp.name)
            const detailBd = {
                id : matchDogBd.id,
                image : matchDogBd.image,
                name : matchDogBd.name,
                height : matchDogBd.height,
                weight : matchDogBd.weight,
                temperament : temperaments,
                life_span : matchDogBd.life_span
            }
            res.status(200).json(detailBd)
        } else {
            console.log('entro al else');
            
            const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
            const matchDog = response.data.find((dog) => dog.id === Number(idRaza))
            const temperaments = matchDog.temperament.split(", ")
            const detail = {
                id : matchDog.id,
                image : matchDog.image.url,
                name : matchDog.name,
                height : matchDog.height?.metric,
                weight : matchDog.weight?.metric,
                temperament : temperaments,
                life_span : matchDog.life_span
            }
            res.status(200).json(detail)
        }
    } catch (error) {
        res.send("fallaste con el id")
    }
}
module.exports = getDogsByRace
