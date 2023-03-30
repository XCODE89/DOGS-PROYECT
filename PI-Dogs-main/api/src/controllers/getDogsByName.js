require('dotenv').config();
const {API_KEY} = process.env;
const axios = require("axios");

const getDogsByName = async (req, res)=> {
    const {name} = req.query;
    const nameChar = name.toUpperCase()
    try {
        const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        let matchName = response.data.filter((dog) =>
            dog.name.toUpperCase().includes(nameChar)
        )
        if(matchName.length) {
            res.status(200).json(matchName)
        } else {
            throw Error
        }
    } catch (error) {
        res.send("fucking query")
    }

}
module.exports = getDogsByName