import Jwt from "jsonwebtoken"
import { config }from "../config"
import logger from "../logger"

import User from "../models/user.model"


export const verifyToken = async (req, res, next) => {

   try {

        const token = req.headers["x-access-token"];
        console.log(token)

        if (token == undefined) return res.status(403).json({message: "No token provided"})
        logger.debug("No token provided");

        const decoded = Jwt.verify(token, config.SECRET_KEY)
        req.userId = decoded.id
        console.log(req.userId)

        const user = await User.findById(req.userId, {password: 0}) 
        if(!user) return res.status(404).json({message: "No user found"})
        logger.debug("No user found");

        next()
    
   } catch (error) {
    logger.debug("Unauthorized")
    return res.status(500).json({message: "Unauthorized"})
   }
}

