import {Router} from "express"
const router =Router();

import * as controller from '../controllers/controller.js'
//Questions routes API


// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)
// change this step to

router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.insertQuestions)
export default router;