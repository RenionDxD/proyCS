const { check, validationResult} = require('express-validator');

const generatePetValidators = () => [
    check('alias').notEmpty().isLength({max:50}).withMessage("Invalid alias"),
    check('type').notEmpty().isLength({min:3,max:3}).withMessage("invalid type, write DOG or CAT"),
    check('color').notEmpty().isLength({max:20}).withMessage("invalid color"),
    check('notes').notEmpty().isLength({max:150}).withMessage("invalid notes"),
]

const generateIdValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("invalid id"),
]
 
const updatePetValidators = () =>[
    check('id').notEmpty().isNumeric().withMessage("invalid id"),
    check('alias').isLength({max:50}).withMessage("Invalid alias"),
    check('type').optional().isLength({min:3,max:3}).withMessage("invalid type, write DOG or CAT"),
    check('color').isLength({max:20}).withMessage("invalid color"),
    check('notes').isLength({max:150}).withMessage("invalid notes"),
 ]

const reporter = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({
            "succes" : false,
            "code" : 404,
            "message" : errors,
            "data" : []
        });
    }
    next();
}

module.exports = {
    add: [
        generatePetValidators(),
        reporter
    ],
    id: [
        generateIdValidators(),
        reporter
    ],
    update : [
        updatePetValidators(),
        reporter
    
    ]
    
};
