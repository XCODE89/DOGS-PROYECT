require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");
const {Temperament} = require("../db")

const getTemperaments = async (req, res)=> {
    try {
        const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        let allTempPacks = response.data.map((dog) => dog.temperament
        ).join().split(",")
        let allTemperaments = allTempPacks.map( temp => temp.trim());
        const set = new Set(allTemperaments);
        const noRepeat = [...set].filter(element => element !== "");
        const objTemp = noRepeat.map(element => {return{ name : element}})
        return(objTemp)     
    } catch (error) {
        return("la cagaste")
    }
}

const saveApiTemps = async () => {
    try {
        const allTemperaments = await getTemperaments();
        await Temperament.bulkCreate(allTemperaments)
        return(allTemperaments)
    } catch (error) {
        console.log(error);
        return("no llego a la base de datos")
    }
}
module.exports = saveApiTemps;