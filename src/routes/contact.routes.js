const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const controller = require("../controllers/contact.controller");

// GET
router.get("/", controller.findAll);

router.post(
    "/",

    [
        body("full_name").notEmpty(),
        body("email").isEmail()
    ],

    controller.create
);

module.exports = router;