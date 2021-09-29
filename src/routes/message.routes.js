const { Router } = require('express');

const controllers = require('../controllers')

const middleware = require('../middlewares')

const router = Router();


router.post('/create', middleware.users.isValid, controllers.message.create)
router.post('/chat', middleware.users.isValid, controllers.message.chat)


module.exports = router;