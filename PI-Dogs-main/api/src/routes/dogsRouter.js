const {Router} = require("express");
const dogsRouter = Router();

const getDogs = require("../controllers/getDogs")
const getDogsByName = require("../controllers/getDogsByName");
const getDogsByRace = require("../controllers/getDogsByRace");
const postDog = require("../controllers/postDog")

dogsRouter.get("/", getDogs);
dogsRouter.get("/name", getDogsByName)
dogsRouter.get("/:idRaza", getDogsByRace);
dogsRouter.post("/", postDog);

module.exports = dogsRouter;