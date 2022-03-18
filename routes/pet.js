const express = require("express");
const router = express.Router();
const petsController = require('../controllers/petsController');
const petsValidator = require('../validations/petsValidator');
const jwtToken = require("../validations/jwtValidation");
router.get('/pet', jwtToken.validateToken, petsValidator.id, petsController.getPet);
router.get('/pets', jwtToken.validateToken, petsController.getPets);
router.post('/pet', petsValidator.add, petsController.postPet);
router.post('/login', petsValidator.id, petsController.getLogin);
router.put('/pet', petsValidator.update,petsController.putPet);
router.delete('/pet', petsValidator.id, petsController.deletePet);

module.exports = router;