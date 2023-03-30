const {Router} = require("express");
const temperamentsRouter = Router();

const getTemperaments = require("../controllers/getTemperaments");

temperamentsRouter.get("/", getTemperaments);

module.exports = temperamentsRouter