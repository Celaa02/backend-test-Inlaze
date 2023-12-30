import logger from '../logger'
import User from '../models/user.model'

import { foundListDbPost } from './post.db'

export const addDbPostForUser = async (id, post) => {
    try {
        const result = await User.updateOne({_id: id}, {$push: { post: post}})
        logger.info(` msg addPostForUser: ${result}`)
        return result
    } catch (err) {
        logger.debug(result)
    }
}

export const foundDbPostForUser = async (id, limit) => {
    try {
        
         const result = await User.find({ _id: id }).distinct('post')
         if(result != []){
            logger.info(`${JSON.stringify(result)}`)
            const foundPost = await foundListDbPost(result, limit)
            return foundPost
         }else{
            logger.debug(`msg foundPostForUser: The user don't have post created`)
            return []
         }
    } catch (err) {
        logger.debug(err)
    }

}

export const getDbUser = async (name) => {
    try {
        const result = await User.findOne({ fullname: name})
        logger.info(`${ JSON.stringify(result) }`)
        return result
    } catch (err) {
        logger.debug(err)
    }
}

export const putDbUserById = async (id, body) => {
    try {
        const result = await User.findOneAndUpdate({_id: id}, body, {
            new: true
        })      
        logger.info(`msg putDbUsertById: ${result}`)
        return result
    } catch (error) {
        logger.debug(err)
    }
}