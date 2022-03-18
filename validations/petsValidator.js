const {check, validationResult } = require('express-validator');

const GeneratePetsValidators = () => [
    check('alias').notEmpty().isLength({max:50}).withMessage("invalid alias"),
    check('type').notEmpty().isIn("DOG","CAT").withMessage("invalid type"),
    check('color').notEmpty().isLength({max:10}).withMessage("invalid color"),
    check('notes').isLength({max:150}).withMessage("invalid notes"),
]

const updatePetsValidators = () =>[
    check('id').notEmpty().isNumeric().withMessage("Invalid ID"),
    check('alias').isLength({max:50}).withMessage("invalid alias"),
    check('type').isIn("DOG","CAT").withMessage("invalid type"),
    check('color').isLength({max:10}).withMessage("invalid color"),
    check('notes').isLength({max:150}).withMessage("invalid notes"),
]

const generateIdValidators = () =>[
    check('id').notEmpty().isNumeric().withMessage("Invalid ID")
]

const reporter = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(404).json({
            "success" : false,
            "code" : 404,
            "message" : errors,
            "data" : []
        });
    }
    next();
}

module.exports = {
    add: [
        GeneratePetsValidators(),
        reporter
    ],
    id: [
        generateIdValidators(),
        reporter
    ],
    update: [
        updatePetsValidators(),
        reporter
    ]
};