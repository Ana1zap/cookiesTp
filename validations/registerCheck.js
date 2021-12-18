const {check} = require("express-validator")

module.exports =[
    check("name")
    .notEmpty().withMessage("nombre obligatorio"),

    check("email")
    .isEmail().withMessage("debe ingresar un email valido"),

    check("colors")
    .notEmpty().withMessage("debe ingresar un color"),

    check("edad")
    .isNumeric().withMessage("debe ingresar un numero")
]