const { Router } = require("express");
const { login, loginPage, creatPage, creat, logout } = require("../controllers/userControler");


const router = Router()


router.get('/login', loginPage)
router.post('/login', login)
router.get('/creat', creatPage)
router.post('/creat', creat)
router.get('/logout', logout)



module.exports = router