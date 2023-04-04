require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");
const {Dog, Temperament} = require("../db")

const getDogs = async(req, res)=> {
    try {
        const dbResponse = await Dog.findAll({
            // attributes: ["image", "name", "weight", "created"], include:temperament
            include : Temperament
        })
        const dbDogs = dbResponse.map((temp) => {
            return temp.temperaments.map((temp) => temp.name);
        });
        const dbDogs2 = [...dbDogs2, ...dbDogs]

        console.log(dbDogs);
        
        // const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        // const allRaces = response.data.map((race) => { 
        //     return {
        //         image : race.image?.url,
        //         name : race.name,
        //         temperament : race.temperament,
        //         weight : race.weight?.metric,
        //         created : false
        //     }
        // });

        res.status(200).json(dbDogs2)
            
    } catch (error) {
        res.send("fallamos")
    }
}
module.exports = getDogs