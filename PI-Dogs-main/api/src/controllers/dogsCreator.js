
const {Dog, Temperament} = require("../db");

//? Esta funcion utiliza un metodo del modelo para crear un post de Dog
const dogsCreator = async(
    parsedName,
    image,
    height,
    weight,
    temperament,
    life_span,
    ) => { 
        const dogCreated = await Dog.create(
        {
            name : parsedName,
            image,
            height,
            weight,
            temperament,
            life_span,
        })
        for (const iterator of temperament) {
            await Temperament.findByPk(iterator)
            await dogCreated.addTemperament(iterator)
        }  
        return dogCreated      
};

module.exports = dogsCreator