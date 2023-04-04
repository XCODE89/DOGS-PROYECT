const dogsCreator = require("./dogsCreator")

//?
const postDog = async (req, res)=> {
    const {
        name,
        image, 
        height,
        weight,
        temperament,
        life_span,
        created
    } = req.body;    
    const newDog = await dogsCreator(name,
        image, 
        height,
        weight,
        temperament,
        life_span,
        );
        console.log(newDog);
        
    res.status(200).json(newDog)
}
module.exports = postDog