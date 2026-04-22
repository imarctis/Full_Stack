const Joi = require("joi");

const schemaValidation = Joi.object({
    name: Joi.string().message({
        "string.empty": "Name is not allowed to be empty",
    }),
    phone: Joi.string().min(10).messages({
        "number.base": "Phone number must be a string",
    }),
    email: Joi.string().email(),

    hobbies: Joi.array().items(
        Joi.string().messages({
            "string.empty": "Hobby cannot be an empty string",
        })
    ),
});