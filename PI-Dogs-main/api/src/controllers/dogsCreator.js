const {Dog} = require("../db");

const dogsCreator = async(name,
    image, 
    height,
    weight,
    life_span) => await Dog.create({name,
        image, 
        height,
        weight,
        life_span});

module.exports = dogsCreator