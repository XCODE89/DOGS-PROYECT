require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");

const getDogsByName = async (req, res)=> {
    const {name} = req.query;
    const nameChar = name.toUpperCase()
    try {
        const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        const allRaces = response.data?.map((race) => { 
            return {
                image : race.image?.url,
                name : race.name,
                temperament : race.temperament,
                weight : race.weight?.metric,
                created : false
            }
        });
        const regex = new RegExp(nameChar.replace(/[^a-z]/gi, "").split('').join('.*'), "i");
        const results = allRaces.filter((dog) => regex.test(dog.name.replace(/[^a-z]/gi, "")));
        console.log(results);
        res.json(results)
    } catch (error) {
        res.json("fallo")
    }

}
module.exports = getDogsByName