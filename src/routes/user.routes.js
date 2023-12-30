import {Router} from 'express';
const router = Router()


import  * as userCtrl from "../controllers/user.controller"
import * as authJwt from '../middleware/authjw'

router.get('/:id', userCtrl.getPostForUser)
router.get('/fullname/:fullname', userCtrl.getUserById)
router.put('/:id', userCtrl.putUserById)


export default router;