require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");
const {Dog, Temperament} = require("../db")
const {Op} = require("sequelize")

const getDogsByName = async (req, res)=> {
    const {name} = req.query;
    const nameChar = name.toUpperCase()
    console.log(nameChar);
    
    try {

        const dbRespone = await Dog.findAll({
            where:
        {
            name: {[Op.substring]:`%${nameChar}%`}
        },
        include: Temperament
        })
        const selected = dbRespone.map((select) => {         
        const temperaments = select.temperaments.map(temp => temp.name).join(", ");
        let names = select.name.toLowerCase().split(" ");            
        for (let i = 0; i < names.length; i++) {
            names[i] = names[i].charAt(0).toUpperCase() + names[i].substring(1);
        }
        let name = names.join(' ');
        return {
            id : select.id,
            image : select.image,
            name : name,
            temperament : temperaments,
            weight : select.weight,
            created : true
        }
        
        })
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

        const total = [...selected, ...allRaces]
        const regex = new RegExp(nameChar.replace(/[^a-z]/gi, "").split('').join('.*'), "i");
        const results = total.filter((dog) => regex.test(dog.name.replace(/[^a-z]/gi, "")));

        res.json(results)
    } catch (error) {
        res.json("fallo")
    }
}
module.exports = getDogsByName