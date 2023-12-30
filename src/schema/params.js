import Joi from 'joi'

export const validateParamsAuthSignup = Joi.object().keys({
        fullname: Joi.string(),
        age: Joi.number(),
        email: Joi.string(),
        password: Joi.string()

})

export const validateParamsAuthSignin = Joi.object().keys({
    email: Joi.string(),
    password: Joi.string()

})

export const validateParamsCreatePost = Joi.object().keys({
    _id: Joi.allow(""),
    user: Joi.string(),
    userto: Joi.allow(""),
    title: Joi.string(),
    content: Joi.string()

})