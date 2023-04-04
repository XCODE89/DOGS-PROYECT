
const {Dog, Temperament} = require("../db");

//? Esta funcion utiliza un metodo del modelo para crear un post de Dog
const dogsCreator = async(
    name,
    image, 
    height,
    weight,
    temperament,
    life_span,
    created,
    ) => { 
        const dogCreated = await Dog.create(
        {
            name,
            image, 
            height,
            weight,
            temperament,
            life_span,
            created,
        })
        for (const iterator of temperament) {
            await Temperament.findByPk(iterator)
            await dogCreated.addTemperament(iterator)
        }  
        return dogCreated      
};

module.exports = dogsCreator