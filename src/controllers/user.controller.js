import { foundDbPostForUser, getDbUser, putDbUserById } from "../db/user.db";
import logger from "../logger";


export const getPostForUser = async(req, res) => {
    try {
        const result = await foundDbPostForUser(req.params.id, req.params.limit)
        if(result != []){
            logger.info(`${JSON.stringify(result)}`)
            res.status(200).json(result)
        }else{
            logger.debug(`msg: User don't have post created`)
            res.status(409).json({msg: `User don't have post created` })
        }
    } catch (err) {
        logger.debug(err)
    }
}

export const getUserById = async (req, res) => {
    try {
        const result = await getDbUser(req.params.fullname)
        if(result != null){
            logger.info(`msg: User`)
            return res.status(200).json({ 
                id: result.id, 
                fullname: result.fullname, 
                age: result.age, 
                email: result.email,
                post: result.post.length 
            })
        }else {
            logger.debug(`User not found`)
            return res.status(409).json({ msg: `User not found`})
        }
    } catch (err) {
        logger.debug(err)
    }
}

export const putUserById = async (req, res) => {
    try {
        const result = await putDbUserById(req.params.id, req.body)
        if(result != null){
            logger.info(`${ JSON.stringify(result)}`);
            res.status(200).json({ id: result.id, 
                fullname: result.fullname, 
                age: result.age, 
                email: result.email,
                post: result.post.length });
        }else{
            logger.info(`User not found`);
            res.status(200).json({ msg: `User not found`});
        }
    } catch (err) {
        logger.debug(err)
    }
}