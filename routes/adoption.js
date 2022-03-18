const express = require("express");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
const jwtToken = require("../validations/jwtValidation");
router.get('/adoption', jwtToken.validateToken, adoptionsController.getAdoption);
router.get('/adoptions', jwtToken.validateToken, adoptionsController.getAdoptions);
router.post('/adoption', adoptionsController.postAdoption);
router.post('/login', adoptionsController.getLogin);
router.put('/adoption', adoptionsController.putAdoption);
router.delete('/adoption', adoptionsController.deleteAdoption);
router.get('/adoptionUser', adoptionsController.getAdoptionByUser);

module.exports = router;