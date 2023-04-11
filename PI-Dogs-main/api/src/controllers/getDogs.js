require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");
const {Dog, Temperament} = require("../db")

const getDogs = async(req, res)=> {
    try {
        const dbResponse = await Dog.findAll({
            include : Temperament
        })
        
        const dbDogs = dbResponse.map((temp) => {
            console.log(temp);
            const temps = temp.temperaments.map((temp) => temp.name).join(", ");
            let names = temp.name.toLowerCase().split(" ");            
            for (let i = 0; i < names.length; i++) {
                names[i] = names[i].charAt(0).toUpperCase() + names[i].substring(1);
            }
            let name = names.join(' ');
            return {
                id : temp.id,
                image : temp.image,
                name : name,
                temperament : temps,
                weight : temp.weight,
                created : true
            }
        });

        const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const allRaces = response.data.map((race) => {
            // const temps = race.temperament.split(",")
            // console.log(temps);
            // console.log('holitas');
            
            return {
                id : race.id,
                image : race.image?.url,
                name : race.name,
                temperament : race.temperament,
                weight : race.weight?.metric,
                created : false
            }
        });
        
        const totalDogs = [...dbDogs, ...allRaces]
        console.log("totalDogs");
        
        res.status(200).json(totalDogs)
            
    } catch (error) {
        res.send("fallamos")
    }
}
module.exports = getDogs