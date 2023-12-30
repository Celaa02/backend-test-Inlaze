import {Router} from 'express';
const router = Router()


import  * as postCtrl from "../controllers/post.controller"
import * as authJwt from '../middleware/authjw'


router.post('/create', postCtrl.createPost)
router.get('/', postCtrl.getPosts)
router.get('/:id', postCtrl.getPostById)
router.delete('/:id', postCtrl.deletePostById)
router.put('/:id', postCtrl.putPostsById)
router.get('/title/:title', authJwt.verifyToken, postCtrl.likeTitlePost)
router.get('/content/:content', authJwt.verifyToken, postCtrl.likeContentPost)
router.post('/like', authJwt.verifyToken, postCtrl.likeToPost)
export default router;