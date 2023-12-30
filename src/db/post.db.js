import Post from '../models/post.model'
import logger from '../logger'

import { addDbPostForUser } from './user.db';

export const createDbPost = async (body) => {
    try {
        console.log(body)
        const { user, userto, title, content} = body;
        const newPost = new Post({ 
            user, 
            userto, 
            title, 
            content

        })
        const savedPost =  await newPost.save()
        logger.info(`msg createDbPost: ${savedPost}`)

        const addPostUser = await addDbPostForUser(user, savedPost.id)
        if(addPostUser.acknowledged === true){
            return savedPost
        }
        
    } catch (err) {
        logger.debug(err)
    }
}

export const getDbPosts = async () => {
    try {
        const result = await Post.find().sort('-createdAt')
        logger.info(`msg getDbPosts: ${result}`)
        return result
    } catch (err) {
        logger.debug(err)
    }
    
}

export const getDbPostById = async (id) => {
    try {
        const result = await Post.findOne({_id: id})
        logger.info(`msg getDbPostById: ${result}`)
        return result
    } catch (err) {
        logger.debug(err)
    }
}

export const deleteDbPostById = async (id) => {
    try {
        const result = await Post.deleteOne({_id: id})
        logger.info(`msg deleteDbPostById: ${result}`)
        return result
    } catch (err) {
        logger.debug(err)
    }
}

export const putDbPostById = async (id, body) => {
    try {
        const result = await Post.findOneAndUpdate({_id: id}, body, {
            new: true
        })      
        logger.info(`msg putDbPostById: ${result}`)
        return result
    } catch (error) {
        logger.debug(err)
    }
}

export const foundListDbPost = async (data, limit) => {
    try {
        const result = await Post.find({_id: { $in: data }}).limit(limit).sort('-createdAt')
        return result
    } catch (err) {
        logger.debug(err)
    }
}

export const foundLikeTitleDbPost = async (title) => {
    try {
        const result = await Post.find({ title: {'$regex': title}})
        return result
    } catch (err) {
        logger.debug(err)
    }
}

export const foundLikeContentDbPost = async (content) => {
    try {
        const result = await Post.find({ content: {'$regex': content}})
        return result
    } catch (err) {
        logger.debug(err)
    }
}

export const likeToDbPost = async (user, id) => {
    try {
        const validateListLike = await Post.findOne({_id: id}).distinct('like')
        if(!validateListLike.includes(user)){
            const result = await Post.updateOne({_id: id}, {$push: { like: user}})
            return true
        }else{
            const result = await Post.updateOne({_id: id}, {$pull: { like: user}})
            return false
        }
    } catch (err) {
        logger.debug(err)
    }
}