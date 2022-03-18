const {check, validationResult } = require('express-validator');

const GenerateUserValidators = () => [
    check('name').notEmpty().isLength({max:50}).withMessage("invalid name"),
    check('lastname').notEmpty().isLength({max:50}).withMessage("invalid lastname"),
    check('phone').notEmpty().isLength({min:10, max:10}).isNumeric().withMessage("invalid phone"),
    check('address').notEmpty().isLength({max:150}).withMessage("invalid address"),
]

const updateUserValidators = () =>[
    check('id').notEmpty().isNumeric().withMessage("Invalid ID"),
    check('name').isLength({max:50}).withMessage("Invalid name"),
    check('lastname').isLength({max:50}).withMessage("Invalid lastname"),
    check('phone').optional().isLength({min:10, max:10}).isNumeric().withMessage("Invalid phone(10 numbers)"),
    check('address').isLength({max:150}).withMessage("Invalid address")
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
        GenerateUserValidators(),
        reporter
    ],
    id: [
        generateIdValidators(),
        reporter
    ],
    update: [
        updateUserValidators(),
        reporter
    ]
};