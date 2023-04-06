const dogsCreator = require("./dogsCreator")

//?
const postDog = async (req, res)=> {
    const {name, image, height, weight, temperament, life_span} = req.body; 
    const parsedName = name.toUpperCase() 
    const newDog = await dogsCreator(parsedName,
        image, 
        height,
        weight,
        temperament,
        life_span
        );
        console.log(newDog);
        console.log(temperament);
        
    res.status(200).json(newDog)
}
module.exports = postDog