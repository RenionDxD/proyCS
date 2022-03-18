const express = require("express");
//const { use } = require("express/lib/application");
const router = express.Router();
const usersController = require('../controllers/usersController');
//const { update } = require("../validations/userValidator");
const userValidator = require('../validations/userValidator'); 
const jwtToken = require("../validations/jwtValidation");

router.post('/login,', userValidator.id, usersController.getLogin);
router.get('/user', jwtToken.validateToken, userValidator.id ,usersController.getUsers);
router.get('/users', jwtToken.validateToken, usersController.getUsers);
router.post('/user,', userValidator.add, usersController.getUser);
router.put('/user',userValidator.update, usersController.putUser);
router.delete('/user', userValidator.id, usersController.deleteUser);







module.exports = router;