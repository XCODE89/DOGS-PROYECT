const dogsCreator = require("./dogsCreator")
const postDog = async (req, res)=> {
    const {
        name,
        image, 
        height,
        weight,
        life_span
    } = req.body;    
    const newDog = await dogsCreator(name,
        image, 
        height,
        weight,
        life_span);
        console.log(newDog);
        
    res.status(200).json(newDog)
}
module.exports = postDog