import User from '../models/user.model';
import Jwt from 'jsonwebtoken'

import { config } from '../config'
import logger from '../logger'

import { validateParamsAuthSignin, validateParamsAuthSignup } from '../schema/params';


export const Signup = async (req, res) => {
    try {
        const { error } = validateParamsAuthSignup.validate(req.body)
        if (error) {
            return res.status(428).json({
                error: error.details[0].message
            })
        } else {
            logger.info(`${JSON.stringify(req.body)}`)
            const { fullname,
                age,
                email,
                password } = req.body;
            const newUser = new User({
                fullname,
                age,
                email,
                password: await User.encryptPassword(password)
            })
            const foundUser = await User.find({ $or: [{ fullname: fullname }, { email: email }] })
            if (foundUser.length != []) {
                logger.debug('User already exist')
                res.status(409).json({ msg: 'User already exist' })
            } else {
                const savedUser = await newUser.save()
                logger.info(`${JSON.stringify(savedUser)}`)
                const token = Jwt.sign({ id: savedUser._id }, config.SECRET_KEY, {
                    expiresIn: 86400 // 24 hours
                })
                res.status(200).json({
                    fullname: savedUser.fullname,
                    age: savedUser.age,
                    email: savedUser.email,
                    token: token
                })
            }
        }
    } catch (err) {
        logger.debug(err);
    }
}

export const Signin = async (req, res) => {

    try{    
            const { error } = validateParamsAuthSignin.validate(req.body)
            if (error) {
                return res.status(428).json({
                    error: error.details[0].message
                })
            } else {
                logger.info(`${JSON.stringify(req.body)}`)

                const userFound = await User.findOne({email: req.body.email});
                    logger.info(`userSignin: ${JSON.stringify(userFound)}`)

                if(!userFound) return res.status(400).json({message: "User not found"})
                    logger.info(`msg: User not found`)

                const matchPassword = await User.comparePassword(req.body.password, userFound.password)
                    logger.info(`matchPassWordSignin: ${JSON.stringify(matchPassword)}`)

                if(!matchPassword) return res.status(401).json({token: null, message: "Invalid password"})
                    logger.info(`msg: Invalid password`)

                const token = Jwt.sign({id: userFound._id}, config.SECRET_KEY, {  
                    expiresIn: 86400 // 24 hours
                })
                res.status(200).json({email: req.body.email, token: token})
            }
            
    }catch(error){
            logger.debug(error);
    }
   
}