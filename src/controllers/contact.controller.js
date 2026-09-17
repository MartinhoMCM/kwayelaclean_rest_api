const Contact = require("../models/contact.model");
const { validationResult } = require("express-validator");

exports.create = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    try {

        const contact = await Contact.create(req.body);

        res.status(201).json({
            success: true,
            message: "Contact saved successfully.",
            data: contact
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });

    }

};

exports.findAll = async (req, res) => {

    try {

        const contacts = await Contact.findAll();

        res.status(200).json({
            success: true,
            total: contacts.length,
            data: contacts
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
    