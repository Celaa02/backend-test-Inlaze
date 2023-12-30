import {Router} from 'express';
const router = Router()


import  * as authCtrl from "../controllers/auth.controller"


router.post('/signup',authCtrl.Signup)

router.post('/signin', authCtrl.Signin)


export default router;