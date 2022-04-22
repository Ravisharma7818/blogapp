const {getAlluser, login ,register}= require('../Controllers/user_controller')
const router = require("express").Router();

router.get('/getuser',getAlluser);
router.post('/login',login);
router.post('/register',register);


module.exports = router;
