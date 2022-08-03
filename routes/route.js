const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")


//API's-creating Author
router.get("/greeting", userController.greetUser )


module.exports = router;

