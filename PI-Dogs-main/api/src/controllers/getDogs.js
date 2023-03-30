require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");

const getDogs = async(req, res)=> {
    try {
        const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const allRaces = response.data.map((race) => { 
            return {
                image : race.image?.url,
                name : race.name,
                temperament : race.temperament,
                weight : race.weight?.metric
            }
        });
        res.status(200).json(allRaces)
            
    } catch (error) {
        res.send("fallamos")
    }
}
module.exports = getDogs