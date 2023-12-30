import { 
    createDbPost, 
    getDbPosts, 
    getDbPostById, 
    deleteDbPostById, 
    putDbPostById,
    foundLikeContentDbPost,
    foundLikeTitleDbPost,
    likeToDbPost
} from '../db/post.db'
import logger from '../logger'

import { validateParamsCreatePost } from '../schema/params'

export const createPost = async (req, res) => {
    try {
        const { error } = validateParamsCreatePost.validate(req.body)
        if (error) {
            return res.status(428).json({
                error: error.details[0].message
            })
        } else {
            const result = await createDbPost(req.body )
            logger.info(`${JSON.stringify(result)}`)
            res.status(200).json(result)
        }   
    } catch (err) {
        logger.debug(err)
    }
}

export const getPosts = async (req, res) => {
    try {
        const result = await getDbPosts()
        if(result.length != []){
            logger.info(`msg: all post`)
            return res.status(200).json(result)
        }else {
            logger.debug(`Don't exist records`)
            return res.status(400).json({ msg: `Don't exist records`})
        }
    } catch (err) {
        logger.debug(err)
    }
}

export const getPostById = async (req, res) => {
    try {
        const id = req.params.id
        const result = await getDbPostById(id)
        if(result != null){
            logger.info(`msg: post`)
            return res.status(200).json(result)
        }else {
            logger.debug(`Post not found`)
            return res.status(409).json({ msg: `Post not found`})
        }
    } catch (err) {
        logger.debug(err)
    }
}

export const deletePostById = async (req, res) => {
    try {
        const id = req.params.id
        const result = await deleteDbPostById(id)
        if(result != null){
            logger.info(`msg: delete post`)
            return res.status(200).json({ msg: `The post has been remove`})
        }else {
            logger.debug(`Post not found`)
            return res.status(409).json({ msg: `Post not found`})
        }
    } catch (err) {
        logger.debug(err)
    }
}

export const putPostsById = async (req, res) => {
    try{
        const result = await putDbPostById(req.params.id, req.body)
        if(result != null){
            logger.info(`${ JSON.stringify(result)}`);
            res.status(200).json({ msg: `The post has been update`});
        }else{
            logger.info(`Post not found`);
            res.status(200).json({ msg: `Post not found`});
        }
    }catch(err){
        logger.debug(err);
    }
}

export const likeTitlePost = async (req, res) => {
    try {
        const result = await foundLikeTitleDbPost(req.params.title)
        if(result.length != 0){
            logger.info('msg: list tittle')
            res.status(200).json(result)
        }else{
            logger.debug('title not found')
            res.status(409).json({ msg: 'title not found'})
        }
    } catch (err) {
        logger.debug(err)
    }
}

export const likeContentPost = async (req, res) => {
    try {
        const result = await foundLikeContentDbPost(req.params.content)
        if(result.length != 0){
            logger.info('msg: list content')
            res.status(200).json(result)
        }else{
            logger.debug('content not found')
            res.status(409).json({ msg: 'content not found'})
        }
    } catch (err) {
        
    }
}

export const likeToPost = async (req, res) => {
    try {
        const result = await likeToDbPost(req.body.user, req.body.id)
        switch (result) {
            case true:
                res.status(200).json({ msg : result })
                break;
            case false:
                res.status(201).json({ msg : result })
                break;
        }
    } catch (err) {
        
    }
}