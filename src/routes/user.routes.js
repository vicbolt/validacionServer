const { Router } = require('express');

const controllers = require('../controllers')

const middleware = require('../middlewares')

const router = Router();

router.post('/crear', middleware.users.isValid, controllers.user.crear)
router.post('/inicioSesion', controllers.user.inicioSesion)
router.get('/all', middleware.users.isValid, controllers.user.all)



module.exports = router;